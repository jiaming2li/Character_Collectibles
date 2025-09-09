const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/mern-plush', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

mongoose.connection.once('open', async () => {
  try {
    console.log('=== 检查MongoDB集合 ===');
    
    const db = mongoose.connection.db;
    const collections = await db.listCollections().toArray();
    
    console.log('可用的集合:');
    collections.forEach(collection => {
      console.log('- ' + collection.name);
    });
    
    // 检查places集合
    const placesCount = await db.collection('places').countDocuments();
    console.log(`\nplaces集合中的文档数量: ${placesCount}`);
    
    // 检查plushes集合
    const plushesCount = await db.collection('plushes').countDocuments();
    console.log(`plushes集合中的文档数量: ${plushesCount}`);
    
    // 显示places集合中的文档
    if (placesCount > 0) {
      console.log('\nplaces集合中的文档:');
      const places = await db.collection('places').find({}).limit(3).toArray();
      places.forEach(doc => {
        console.log(`- ${doc.name} (ID: ${doc._id})`);
      });
    }
    
    // 显示plushes集合中的文档
    if (plushesCount > 0) {
      console.log('\nplushes集合中的文档:');
      const plushes = await db.collection('plushes').find({}).limit(3).toArray();
      plushes.forEach(doc => {
        console.log(`- ${doc.name} (ID: ${doc._id})`);
      });
    }
    
    mongoose.connection.close();
  } catch (error) {
    console.error('查询出错:', error);
    mongoose.connection.close();
  }
});
