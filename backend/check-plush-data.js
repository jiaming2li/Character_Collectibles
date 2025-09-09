const mongoose = require('mongoose');
const Plush = require('./models/place');

mongoose.connect('mongodb://127.0.0.1:27017/mern-plush', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

mongoose.connection.once('open', async () => {
  try {
    console.log('=== 检查Plush数据 ===');
    
    const places = await Plush.find({});
    console.log(`找到 ${places.length} 个plush记录:`);
    
    places.forEach((place, index) => {
      console.log(`${index + 1}. ${place.name} (${place.brand})`);
      console.log(`   分类: ${place.category}`);
      console.log(`   图片: ${place.image}`);
      console.log(`   创建者: ${place.creator}`);
      console.log('   ---');
    });
    
    mongoose.connection.close();
  } catch (error) {
    console.error('查询出错:', error);
    mongoose.connection.close();
  }
});
