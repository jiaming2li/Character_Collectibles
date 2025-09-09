const mongoose = require('mongoose');
const Plush = require('./models/place');
const User = require('./models/user');

mongoose.connect('mongodb://127.0.0.1:27017/mern-plush', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

mongoose.connection.once('open', async () => {
  try {
    console.log('=== Debug Controller Logic ===');
    
    // 模拟controller的查询逻辑
    const { category, brand, sortBy = 'createdAt', order = 'desc', page = 1, limit = 50 } = {};
    
    let query = {};
    
    if (category) query.category = category;
    if (brand) query.brand = brand;
    
    console.log('Query:', query);
    console.log('Sort:', { [sortBy]: order === 'desc' ? -1 : 1 });
    console.log('Limit:', limit * 1);
    console.log('Skip:', (page - 1) * limit);
    
    const plush = await Plush.find(query)
      .populate('creator', 'name image')
      .sort({ [sortBy]: order === 'desc' ? -1 : 1 })
      .limit(limit * 1)
      .skip((page - 1) * limit)
      .exec();
      
    console.log(`找到 ${plush.length} 个plush:`);
    plush.forEach(p => {
      console.log(`- ${p.name} (ID: ${p._id})`);
    });
    
    const total = await Plush.countDocuments(query);
    console.log(`总数: ${total}`);
    
    mongoose.connection.close();
  } catch (error) {
    console.error('查询出错:', error);
    mongoose.connection.close();
  }
});
