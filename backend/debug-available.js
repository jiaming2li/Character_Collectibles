const mongoose = require('mongoose');
const Plush = require('./models/place');
const User = require('./models/user');

mongoose.connect('mongodb://127.0.0.1:27017/mern-plush', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

mongoose.connection.once('open', async () => {
  try {
    console.log('=== Debug Available Plush ===');
    
    // 获取所有plush
    const allPlush = await Plush.find({});
    console.log(`总共有 ${allPlush.length} 个plush`);
    
    // 获取所有用户的收藏
    const users = await User.find({}, 'plushCollection');
    console.log(`总共有 ${users.length} 个用户`);
    
    const collectedPlushIds = users.reduce((acc, user) => {
      console.log(`用户收藏: ${user.plushCollection.length} 个plush`);
      return acc.concat(user.plushCollection);
    }, []);
    
    console.log(`总共被收藏的plush数量: ${collectedPlushIds.length}`);
    console.log('被收藏的plush IDs:', collectedPlushIds.map(id => id.toString()));
    
    // 获取available plush
    const availablePlush = await Plush.find({
      _id: { $nin: collectedPlushIds }
    });
    
    console.log(`可用的plush数量: ${availablePlush.length}`);
    availablePlush.forEach(plush => {
      console.log(`- ${plush.name} (ID: ${plush._id})`);
    });
    
    mongoose.connection.close();
  } catch (error) {
    console.error('查询出错:', error);
    mongoose.connection.close();
  }
});
