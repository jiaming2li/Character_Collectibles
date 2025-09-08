const mongoose = require('mongoose');
const User = require('./models/user');

const MONGODB_URI = `mongodb://${process.env.DB_USER}:${process.env.DB_PASSWORD}@localhost:27017/${process.env.DB_NAME}?authSource=admin`;

async function updateTestUserPlush() {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log('Connected to MongoDB');

    // 找到test@test.com用户
    const user = await User.findOne({ email: 'test@test.com' });
    if (!user) {
      console.log('Test user not found');
      return;
    }

    console.log('Found test user:', user.name);

    // 更新用户的plushCollection和wishlist
    // 给用户添加2个拥有的毛绒玩具
    user.plushCollection = [
      '68bb59d969a9155e92781ed8', // Hello Kitty Classic Pink
      '68bb59d969a9155e92781eda'  // Pokemon Pikachu Jumbo
    ];

    // 给用户添加2个心愿单毛绒玩具
    user.wishlist = [
      '68bb59d969a9155e92781edc', // Disney Mickey Mouse Vintage
      '68bb59d969a9155e92781ee0'  // Kuromi Gothic Lolita
    ];

    await user.save();
    console.log('✅ Successfully updated test user with plush collection and wishlist');
    
    // 验证更新
    const updatedUser = await User.findOne({ email: 'test@test.com' });
    console.log('Updated user data:');
    console.log('- plushCollection:', updatedUser.plushCollection);
    console.log('- wishlist:', updatedUser.wishlist);

  } catch (error) {
    console.error('❌ Error updating test user:', error);
  } finally {
    await mongoose.connection.close();
    console.log('Database connection closed');
  }
}

updateTestUserPlush();

