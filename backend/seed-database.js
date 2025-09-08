const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const PlushPhoto = require('./models/plush-photo');
const Plush = require('./models/place');
const User = require('./models/user');

// 连接数据库
mongoose.connect('mongodb://localhost:27017/mern-plush', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

async function seedDatabase() {
  try {
    console.log('Seeding database with sample data...');
    
    // 清空现有数据
    await User.deleteMany({});
    await Plush.deleteMany({});
    await PlushPhoto.deleteMany({});
    
    // 创建示例用户
    const hashedPassword = await bcrypt.hash('password123', 12);
    
    const users = [
      {
        name: 'Test User',
        email: 'test@test.com',
        password: hashedPassword,
        image: 'user-test.jpg'
      },
      {
        name: 'Alice Chen',
        email: 'alice@example.com',
        password: hashedPassword,
        image: 'user-1.jpg'
      },
      {
        name: 'Bob Smith',
        email: 'bob@example.com', 
        password: hashedPassword,
        image: 'user-2.jpg'
      },
      {
        name: 'Carol Wang',
        email: 'carol@example.com',
        password: hashedPassword,
        image: 'user-3.jpg'
      }
    ];
    
    const createdUsers = [];
    for (const userData of users) {
      const user = new User(userData);
      await user.save();
      createdUsers.push(user);
      console.log(`Created user: ${user.name} (${user._id})`);
    }
    
    // 创建示例plush
    const plushItems = [
      {
        name: 'Hello Kitty Classic Pink',
        description: 'Adorable Hello Kitty plush in classic pink bow. Super soft and cuddly, perfect for collectors and fans alike.',
        image: 'hello-kitty-classic.jpg',
        brand: 'Sanrio',
        category: 'Hello Kitty',
        price: 25.99,
        creator: createdUsers[3]._id
      },
      {
        name: 'Pokemon Pikachu Jumbo',
        description: 'Large Pikachu plush with embroidered details. Official Pokemon merchandise from the Pokemon Center.',
        image: 'pikachu-cute.jpg',
        brand: 'Pokemon Center',
        category: 'Pokemon',
        price: 45.99,
        creator: createdUsers[3]._id
      },
      {
        name: 'Disney Mickey Mouse Vintage',
        description: 'Vintage Mickey Mouse plush from the 1990s. Rare collector item in excellent condition.',
        image: 'mickey-classic.jpg',
        brand: 'Disney',
        category: 'Disney',
        price: 89.99,
        creator: createdUsers[3]._id
      },
      {
        name: 'My Melody Pink Bow',
        description: 'Sweet My Melody plush with her signature pink hood. Part of the Sanrio family.',
        image: 'my-melody-pink.jpg',
        brand: 'Sanrio',
        category: 'Sanrio',
        price: 35.99,
        creator: createdUsers[3]._id
      },
      {
        name: 'Kuromi Gothic Lolita',
        description: 'Limited edition Kuromi in gothic lolita dress. Part of the Sanrio Characters collection.',
        image: 'kuromi-purple.jpg',
        brand: 'Sanrio',
        category: 'Sanrio',
        price: 75.99,
        creator: createdUsers[3]._id
      }
    ];
    
    const createdPlush = [];
    for (const plushData of plushItems) {
      const plush = new Plush(plushData);
      await plush.save();
      createdPlush.push(plush);
      console.log(`Created plush: ${plush.name} (${plush._id})`);
    }
    
    // 为每个plush创建一些示例照片
    const samplePhotos = [
      // Hello Kitty photos
      {
        plushId: createdPlush[0]._id,
        uploader: createdUsers[3]._id,
        imageUrl: 'uploads/images/hello-kitty-classic.jpg',
        description: '我的Hello Kitty收藏中的最爱！'
      },
      {
        plushId: createdPlush[0]._id,
        uploader: createdUsers[3]._id,
        imageUrl: 'uploads/images/my-melody-pink.jpg',
        description: '质量超好，超级软！'
      },
      {
        plushId: createdPlush[0]._id,
        uploader: createdUsers[3]._id,
        imageUrl: 'uploads/images/twinstar-pink.jpg',
        description: '粉色蝴蝶结太可爱了'
      },
      
      // Pikachu photos
      {
        plushId: createdPlush[1]._id,
        uploader: createdUsers[3]._id,
        imageUrl: 'uploads/images/pikachu-cute.jpg',
        description: '官方Pokemon Center的正品！'
      },
      {
        plushId: createdPlush[1]._id,
        uploader: createdUsers[3]._id,
        imageUrl: 'uploads/images/pikachu-sitting.jpg',
        description: '尺寸比想象中大，很值！'
      },
      {
        plushId: createdPlush[1]._id,
        uploader: createdUsers[3]._id,
        imageUrl: 'uploads/images/eevee-evolution.jpg',
        description: 'Pokemon系列真的很棒！'
      },
      
      // Mickey Mouse photos
      {
        plushId: createdPlush[2]._id,
        uploader: createdUsers[3]._id,
        imageUrl: 'uploads/images/mickey-classic.jpg',
        description: '90年代的经典版本，很有收藏价值'
      },
      {
        plushId: createdPlush[2]._id,
        uploader: createdUsers[3]._id,
        imageUrl: 'uploads/images/winnie-pooh-honey.jpg',
        description: '迪士尼经典角色收藏'
      },
      {
        plushId: createdPlush[2]._id,
        uploader: createdUsers[3]._id,
        imageUrl: 'uploads/images/stitch-blue.jpg',
        description: '迪士尼系列都很可爱'
      },
      
      // Totoro photos
      {
        plushId: createdPlush[3]._id,
        uploader: createdUsers[3]._id,
        imageUrl: 'uploads/images/ash-trainer.jpg',
        description: '宫崎骏迷必备！'
      },
      {
        plushId: createdPlush[3]._id,
        uploader: createdUsers[3]._id,
        imageUrl: 'uploads/images/bulbasaur-grass.jpg',
        description: '材质摸起来特别舒服'
      },
      
      // Kuromi photos
      {
        plushId: createdPlush[4]._id,
        uploader: createdUsers[3]._id,
        imageUrl: 'uploads/images/kuromi-purple.jpg',
        description: '限量版哥特风，太酷了！'
      },
      {
        plushId: createdPlush[4]._id,
        uploader: createdUsers[3]._id,
        imageUrl: 'uploads/images/psyduck-cute.jpg',
        description: 'Sanrio系列的精品'
      }
    ];
    
    for (const photoData of samplePhotos) {
      const photo = new PlushPhoto(photoData);
      await photo.save();
      console.log(`Created photo: ${photo._id} for ${createdPlush.find(p => p._id.equals(photo.plushId))?.name}`);
    }
    
    console.log('\n✅ Database seeded successfully!');
    console.log(`Created ${createdUsers.length} users, ${createdPlush.length} plush items, and ${samplePhotos.length} photos`);
    
  } catch (error) {
    console.error('❌ Error seeding database:', error);
  } finally {
    mongoose.disconnect();
  }
}

seedDatabase();
