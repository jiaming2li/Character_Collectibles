const mongoose = require('mongoose');
const Plush = require('./models/place');

mongoose.connect('mongodb://127.0.0.1:27017/mern-plush', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

mongoose.connection.once('open', async () => {
  try {
    console.log('=== 检查模型 ===');
    
    console.log('Plush.modelName:', Plush.modelName);
    console.log('Plush.collection.name:', Plush.collection.name);
    
    // 尝试查询
    const count = await Plush.countDocuments();
    console.log('Plush.countDocuments():', count);
    
    if (count > 0) {
      const docs = await Plush.find().limit(2);
      console.log('找到的文档:');
      docs.forEach(doc => {
        console.log(`- ${doc.name} (ID: ${doc._id})`);
      });
    }
    
    mongoose.connection.close();
  } catch (error) {
    console.error('查询出错:', error);
    mongoose.connection.close();
  }
});
