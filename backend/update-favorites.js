const mongoose = require('mongoose');
const User = require('./models/user');
const Plush = require('./models/place');

mongoose.connect("mongodb://127.0.0.1:27017/mern", {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});

async function updateUserFavorites() {
  try {
    // 找到用户
    const user = await User.findOne({ email: 'test@test.com' });
    if (!user) {
      console.log('User not found');
      return;
    }
    
    console.log('Current user:', user.name, user.email);
    console.log('Current favorites:', user.favorites || []);
    
    // 获取所有可用的 places
    const places = await Plush.find({});
    console.log('\nAvailable places:');
    places.forEach(place => {
      console.log(`- ${place._id}: ${place.title}`);
    });
    
    // 添加第一个 place 到 favorites（如果还没有的话）
    if (places.length > 0) {
      const placeToAdd = places[0]._id;
      
      if (!user.favorites) {
        user.favorites = [];
      }
      
      if (!user.favorites.includes(placeToAdd)) {
        user.favorites.push(placeToAdd);
        await user.save();
        console.log(`\nAdded place "${places[0].title}" to favorites`);
      } else {
        console.log(`\nPlace "${places[0].title}" already in favorites`);
      }
      
      console.log('Updated favorites:', user.favorites);
    }
    
  } catch (error) {
    console.error('Error:', error);
  } finally {
    mongoose.connection.close();
  }
}

updateUserFavorites();
