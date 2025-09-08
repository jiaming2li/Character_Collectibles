# 🧸 IP Plush Hub - Full-Stack MERN Application

[![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)](https://mongodb.com/)
[![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com/)
[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)

A comprehensive platform for IP plush enthusiasts to browse, collect, and share their love for Hello Kitty, Sanrio, Disney, Pokemon, and other beloved plush items.

## 🌟 Live Demo

> **Note:** This is a full-stack application that requires both frontend and backend servers to be running.

## 📸 Screenshots

*Add your application screenshots here to showcase the UI*

## 🎯 Features

### 🔥 Core Functionality
- **Browse Plush Collection**: View all IP plush items with advanced filtering and search
- **User Collections**: Personal plush collections with social features
- **Wishlist Management**: Add/remove items from personal wishlists
- **Photo Sharing**: Users can upload and share photos of their plush items
- **Social Features**: Follow other users, like items, and leave reviews
- **User Profiles**: Comprehensive profiles with bio, collection stats, and activity

### ⚡ Technical Features
- **JWT Authentication**: Secure role-based access control
- **Responsive Design**: Modern, mobile-first UI built with React
- **MongoDB Integration**: Efficient data management with Mongoose
- **File Upload**: Secure image upload for plush items and user profiles
- **Real-time Updates**: Live updates for likes, reviews, and collections
- **RESTful API**: Well-structured API endpoints with proper validation

## 🏗️ Architecture

### Backend (Node.js + Express)
- **Models**: User, Place (Plush), PlushPhoto, Message with comprehensive schemas
- **Controllers**: RESTful API endpoints for all CRUD operations
- **Middleware**: Authentication, file upload, validation, error handling
- **Routes**: Organized API routing with proper validation and authorization

### Frontend (React)
- **Components**: Modular, reusable UI components with CSS Modules
- **Hooks**: Custom hooks for HTTP requests, forms, and authentication
- **Context**: Global state management for user authentication
- **Routing**: React Router for seamless single-page navigation

## 📁 Project Structure

```
course-project/
├── backend/
│   ├── controllers/
│   │   ├── places-controller.js      # Plush CRUD operations
│   │   ├── users-controller.js       # User management & auth
│   │   ├── plush-photos-controller.js # Photo sharing
│   │   └── messages-controller.js    # User messaging
│   ├── models/
│   │   ├── place.js                  # Plush data model
│   │   ├── user.js                   # User data model
│   │   ├── plush-photo.js           # Photo model
│   │   └── message.js               # Message model
│   ├── routes/
│   │   ├── places-routes.js         # Plush API routes
│   │   ├── users-routes.js          # User API routes
│   │   ├── plush-photos-routes.js   # Photo API routes
│   │   └── messages-routes.js       # Message API routes
│   ├── middleware/
│   │   ├── auth.js                  # JWT authentication
│   │   └── file-upload.js           # Image upload handling
│   ├── uploads/images/              # Uploaded images storage
│   └── app.js                       # Express app configuration
└── frontend/
    ├── src/
    │   ├── places/
    │   │   ├── components/
    │   │   │   ├── PlaceItem/       # Individual plush display
    │   │   │   └── PlaceList/       # Plush collection display
    │   │   └── pages/
    │   │       ├── PlushDetail.js   # Detailed plush view
    │   │       ├── PlushPhotos.js   # Photo gallery
    │   │       ├── NewPlace.js      # Add new plush
    │   │       ├── UpdatePlace.js   # Edit plush
    │   │       └── UserPlaces.js    # User's collection
    │   ├── user/
    │   │   ├── components/
    │   │   │   ├── UserItem.js      # User card component
    │   │   │   └── UsersList.js     # Users listing
    │   │   └── pages/
    │   │       ├── Auth/            # Login/Signup
    │   │       ├── UserProfile.js   # User profile page
    │   │       └── Users.js         # All users page
    │   ├── shared/
    │   │   ├── components/          # Reusable UI components
    │   │   ├── contexts/            # React contexts
    │   │   ├── hooks/               # Custom hooks
    │   │   └── util/                # Utility functions
    │   └── pages/
    │       └── Home.js              # Homepage
    └── public/
```

## 🚀 Getting Started

### Prerequisites
- **Node.js** (v14 or higher) - [Download here](https://nodejs.org/)
- **MongoDB** - [Installation guide](https://docs.mongodb.com/manual/installation/)
- **npm** or **yarn** - Package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/ip-plush-hub.git
   cd ip-plush-hub
   ```

2. **Backend Setup**
   ```bash
   cd backend
   npm install
   ```

3. **Environment Configuration**
   
   Create a `.env` file in the backend directory:
   ```env
   # Database
   DB_CONNECTION_STRING=mongodb://localhost:27017/ip-plush-hub
   
   # Authentication
   JWT_KEY=your-super-secret-jwt-key-here-12345
   
   # Server
   PORT=5000
   ```

4. **Frontend Setup**
   ```bash
   cd ../frontend
   npm install
   ```

5. **Frontend Environment Configuration**
   
   Create a `.env` file in the frontend directory:
   ```env
   REACT_APP_BACKEND_URL=http://localhost:5000/api
   REACT_APP_ASSET_URL=http://localhost:5000
   ```

### Running the Application

1. **Start MongoDB**
   ```bash
   # On macOS (with Homebrew)
   brew services start mongodb-community
   
   # On Windows/Linux
   mongod
   ```

2. **Start Backend Server**
   ```bash
   cd backend
   npm start
   
   # For development with auto-restart
   npm run dev
   ```

3. **Start Frontend Development Server**
   ```bash
   cd frontend
   npm start
   ```

4. **Access the Application**
   - 🌐 Frontend: http://localhost:3000
   - 🔧 Backend API: http://localhost:5000
   - 📊 API Documentation: http://localhost:5000/api

## 📊 Database Schema

### User Model
```javascript
{
  name: String,
  email: String (unique),
  password: String (hashed with bcrypt),
  image: String (profile picture URL),
  bio: String,
  role: String (user/admin),
  plushCollection: [Place IDs],
  wishlist: [Place IDs],
  customLists: [{
    name: String,
    description: String,
    plushItems: [Place IDs],
    isPublic: Boolean,
    createdAt: Date
  }],
  followers: [User IDs],
  following: [User IDs],
  createdAt: Date,
  updatedAt: Date
}
```

### Place (Plush) Model
```javascript
{
  name: String,
  brand: String,
  category: String, // 'Hello Kitty', 'Sanrio', 'Disney', 'Pokemon', 'Other'
  description: String,
  price: Number,
  rating: Number (0-5),
  image: String (main image URL),
  creator: User ID,
  likes: [User IDs],
  reviews: [{
    user: User ID,
    rating: Number (1-5),
    comment: String,
    date: Date
  }],
  location: {
    lat: Number,
    lng: Number
  },
  address: String,
  createdAt: Date,
  updatedAt: Date
}
```

### PlushPhoto Model
```javascript
{
  image: String (image URL),
  caption: String,
  uploader: User ID,
  plushItem: Place ID,
  uploadDate: Date,
  likes: [User IDs]
}
```

## 🔧 API Endpoints

### Places Routes (`/api/places`)
- `GET /` - Get all plush items with filtering options
- `GET /available` - Get available plush items not in user's collection
- `GET /:placeId` - Get specific plush item details
- `GET /user/:userId` - Get user's plush collection
- `POST /` - Create new plush item (authenticated)
- `PATCH /:placeId` - Update plush item (authenticated, owner only)
- `DELETE /:placeId` - Delete plush item (authenticated, owner only)
- `POST /:placeId/like` - Toggle like on plush item (authenticated)
- `POST /:placeId/review` - Add review to plush item (authenticated)

### Users Routes (`/api/users`)
- `GET /` - Get all users
- `GET /:userId/profile` - Get user profile details
- `POST /signup` - User registration
- `POST /login` - User authentication
- `PATCH /:userId/profile` - Update user profile (authenticated)
- `POST /:userId/wishlist/:placeId` - Add to wishlist (authenticated)
- `DELETE /:userId/wishlist/:placeId` - Remove from wishlist (authenticated)
- `POST /:userId/follow` - Follow user (authenticated)
- `DELETE /:userId/follow` - Unfollow user (authenticated)

### Plush Photos Routes (`/api/plush-photos`)
- `GET /plush/:plushId` - Get photos for specific plush item
- `POST /upload` - Upload new photo (authenticated)
- `DELETE /:photoId` - Delete photo (authenticated, uploader only)
- `POST /:photoId/like` - Toggle like on photo (authenticated)

## 🎨 Key Features

### 👥 Social Features
- **User Profiles**: Comprehensive profiles with bio, stats, and activity
- **Follow System**: Follow other collectors and see their activity
- **Likes & Reviews**: Rate and review plush items with detailed feedback
- **Photo Sharing**: Upload and share photos of plush collections
- **Custom Lists**: Create and share themed plush collections

### 🔍 Search & Filter
- **Category Filter**: Hello Kitty, Sanrio, Disney, Pokemon, Other
- **Brand Filter**: Filter by specific manufacturers
- **Price Range**: Filter by price ranges
- **Search**: Full-text search by name, brand, or category
- **Sorting**: Sort by date, name, price, rating, or popularity

### 💻 User Experience
- **Responsive Design**: Optimized for desktop, tablet, and mobile
- **Real-time Updates**: Live updates for social interactions
- **Image Upload**: Drag-and-drop image upload with preview
- **Modern UI**: Clean, intuitive interface with smooth animations
- **Dark Mode**: Toggle between light and dark themes

## 🔒 Security Features

- **JWT Authentication**: Secure token-based authentication system
- **Password Hashing**: bcrypt for secure password storage
- **Input Validation**: Comprehensive form validation on client and server
- **File Upload Security**: Secure image upload with file type validation
- **Role-based Access**: User and admin roles with appropriate permissions
- **CORS Protection**: Configured CORS for secure cross-origin requests
- **Rate Limiting**: API rate limiting to prevent abuse

## 🛠️ Technologies Used

### Backend
- **Node.js** - JavaScript runtime environment
- **Express.js** - Web application framework
- **MongoDB** - NoSQL database for flexible data storage
- **Mongoose** - MongoDB object modeling for Node.js
- **JWT** - JSON Web Tokens for authentication
- **bcryptjs** - Password hashing library
- **Multer** - Middleware for handling file uploads
- **Express Validator** - Server-side validation
- **CORS** - Cross-Origin Resource Sharing middleware

### Frontend
- **React** (v16.11.0) - UI library for building user interfaces
- **React Router** - Client-side routing for single-page application
- **CSS Modules** - Scoped CSS styling
- **React Transition Group** - Smooth animations and transitions
- **Custom Hooks** - Reusable logic for HTTP requests, forms, and auth
- **Context API** - Global state management for user authentication

### Development Tools
- **Nodemon** - Auto-restart server during development
- **React Scripts** - Build tools and development server
- **ESLint** - Code linting for consistent code style

## 🚀 Deployment

### Backend Deployment (Heroku/Railway/Vercel)
1. Set environment variables in your hosting platform
2. Update MongoDB connection string for production
3. Configure file upload storage (consider AWS S3 or Cloudinary)

### Frontend Deployment (Netlify/Vercel)
1. Build the production version: `npm run build`
2. Update API URLs for production environment
3. Deploy the `build` folder

### Environment Variables for Production
```env
# Backend
DB_CONNECTION_STRING=your-production-mongodb-uri
JWT_KEY=your-production-jwt-secret
NODE_ENV=production

# Frontend
REACT_APP_BACKEND_URL=your-production-api-url
REACT_APP_ASSET_URL=your-production-asset-url
```

## 🧪 Testing

```bash
# Run backend tests
cd backend
npm test

# Run frontend tests
cd frontend
npm test
```

## 📈 Future Enhancements

- [ ] Real-time chat between users
- [ ] Advanced recommendation system
- [ ] Mobile app with React Native
- [ ] Integration with e-commerce platforms
- [ ] Advanced analytics dashboard
- [ ] Multi-language support
- [ ] Push notifications
- [ ] Social media integration

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/AmazingFeature
   ```
3. **Make your changes**
4. **Add tests** if applicable
5. **Commit your changes**
   ```bash
   git commit -m 'Add some AmazingFeature'
   ```
6. **Push to the branch**
   ```bash
   git push origin feature/AmazingFeature
   ```
7. **Open a Pull Request**

### Development Guidelines
- Follow existing code style and conventions
- Write clear, descriptive commit messages
- Add comments for complex logic
- Update documentation as needed
- Test your changes thoroughly

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Your Name**
- GitHub: [@yourusername](https://github.com/yourusername)
- LinkedIn: [Your LinkedIn](https://linkedin.com/in/yourprofile)
- Email: your.email@example.com

## 🙏 Acknowledgments

- Thanks to all the plush enthusiasts who inspired this project
- Special thanks to the open-source community
- Icons and images from [Unsplash](https://unsplash.com) and [Flaticon](https://flaticon.com)

## 📞 Support

If you encounter any issues or have questions:

1. **Check existing issues** on GitHub
2. **Create a new issue** with detailed description
3. **Contact support** at your.email@example.com

For urgent matters, please include:
- Steps to reproduce the issue
- Expected vs actual behavior
- Screenshots if applicable
- Environment details (OS, browser, Node version)

---

<div align="center">

**🧸 IP Plush Hub - Where plush enthusiasts unite! ✨**

Made with ❤️ by passionate developers for the plush community

[⭐ Star this repo](https://github.com/yourusername/ip-plush-hub) • [🐛 Report Bug](https://github.com/yourusername/ip-plush-hub/issues) • [💡 Request Feature](https://github.com/yourusername/ip-plush-hub/issues)

</div>