# Character Collectibles - Full-Stack MERN Application

Character Collectibles - Your Plush & Figurine Hub. A comprehensive platform for character collectible enthusiasts to browse, collect, and share their love for plush toys, figurines, Hello Kitty, Sanrio, Disney, Pokemon, and other beloved collectible items.

## Features

### Core Functionality
- **Browse Character Collection**: View all character collectibles including plush toys and figurines with advanced filtering and search
- **User Collections**: Personal character collectible collections with social features
- **Wishlist Management**: Add/remove items from personal wishlists
- **Photo Sharing**: Users can upload and share photos of their collectible items
- **Social Features**: Follow other users, like items, and leave reviews
- **User Profiles**: Comprehensive profiles with bio, collection stats, and activity

### Technical Features
- **JWT Authentication**: Secure role-based access control
- **Responsive Design**: Modern, mobile-first UI built with React
- **MongoDB Integration**: Efficient data management with Mongoose
- **File Upload**: Secure image upload for collectible items and user profiles
- **Real-time Updates**: Live updates for likes, reviews, and collections
- **RESTful API**: Well-structured API endpoints with proper validation

## Architecture

### Backend (Node.js + Express)
- **Models**: User, Place (Collectible), CollectiblePhoto, Message with comprehensive schemas
- **Controllers**: RESTful API endpoints for all CRUD operations
- **Middleware**: Authentication, file upload, validation, error handling
- **Routes**: Organized API routing with proper validation and authorization

### Frontend (React)
- **Components**: Modular, reusable UI components with CSS Modules
- **Hooks**: Custom hooks for HTTP requests, forms, and authentication
- **Context**: Global state management for user authentication
- **Routing**: React Router for seamless single-page navigation


## Getting Started

### Prerequisites
- **Node.js** (v14 or higher) - [Download here](https://nodejs.org/)
- **MongoDB** - [Installation guide](https://docs.mongodb.com/manual/installation/)
- **npm** or **yarn** - Package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/character-collectibles.git
   cd character-collectibles
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
   DB_CONNECTION_STRING=mongodb://localhost:27017/character-collectibles
   
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


5. **Test Account**
   For testing the deployed application:
   - **Email**: `test@test.com`
   - **Password**: `password123`
   - **Role**: Standard user with full access to features

