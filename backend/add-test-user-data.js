const mongoose = require('mongoose');
const User = require('./models/user');

// MongoDB connection
const mongoURI = 'mongodb://localhost:27017/mern-places';

async function addTestUserData() {
  try {
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to MongoDB');

    // Find the test@test.com user
    const testUser = await User.findOne({ email: 'test@test.com' });
    if (!testUser) {
      console.log('Test user not found!');
      return;
    }

    console.log('Found test user:', testUser.name);

    // Sample plush IDs from the API response
    const plushIds = [
      '68bb59d969a9155e92781ee0', // Kuromi Gothic Lolita
      '68bb59d969a9155e92781edc', // Disney Mickey Mouse Vintage
      '68bb59d969a9155e92781ede', // Totoro Forest Spirit
      '68bb59d969a9155e92781eda', // Pokemon Pikachu Jumbo
      '68bb59d969a9155e92781ed8'  // Hello Kitty Classic Pink
    ];

    // Add some plush toys to collection (owned)
    testUser.plushCollection = [
      plushIds[0], // Kuromi Gothic Lolita
      plushIds[1], // Disney Mickey Mouse Vintage
      plushIds[4]  // Hello Kitty Classic Pink
    ];

    // Add some plush toys to wishlist
    testUser.wishlist = [
      plushIds[2], // Totoro Forest Spirit
      plushIds[3]  // Pokemon Pikachu Jumbo
    ];

    // Save the updated user
    await testUser.save();
    
    console.log('Successfully updated test user data!');
    console.log('PlushCollection:', testUser.plushCollection);
    console.log('Wishlist:', testUser.wishlist);

  } catch (error) {
    console.error('Error updating test user data:', error);
  } finally {
    mongoose.connection.close();
  }
}

addTestUserData();

