const mongoose = require('mongoose');
const User = require('./models/user');

mongoose.connect('mongodb://127.0.0.1:27017/mern-plush', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

mongoose.connection.once('open', async () => {
  try {
    console.log('=== 检查用户数据 ===');
    
    const users = await User.find({});
    console.log(`找到 ${users.length} 个用户:`);
    
    users.forEach((user, index) => {
      console.log(`${index + 1}. 用户ID: ${user._id}`);
      console.log(`   邮箱: ${user.email}`);
      console.log(`   姓名: ${user.name}`);
      console.log(`   plushCollection长度: ${user.plushCollection ? user.plushCollection.length : 0}`);
      console.log(`   wishlist长度: ${user.wishlist ? user.wishlist.length : 0}`);
      console.log('   ---');
    });

    if (users.length > 0) {
      const testUser = users[0];
      console.log(`\n🧪 测试用户: ${testUser.email} (ID: ${testUser._id})`);
      console.log('✅ 用户数据存在，可以用于测试My Profile功能');
      console.log('\n💡 在前端登录时使用:');
      console.log(`   邮箱: ${testUser.email}`);
      console.log('   密码: password123');
    }
    
    mongoose.connection.close();
  } catch (error) {
    console.error('查询出错:', error);
    mongoose.connection.close();
  }
});
