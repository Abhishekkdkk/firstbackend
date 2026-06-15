🌐 Social Media App (MERN Stack)

A full-stack social media platform built using the MERN stack that allows users to connect, share posts, and interact in real time. The project demonstrates modern full-stack development practices including authentication, REST APIs, and real-time communication using Socket.IO.

🚀 Live Demo

🔗 Frontend (Vercel):
https://social-media-project-6l15.vercel.app/

📁 Repository

🔗 GitHub:
https://github.com/Abhishekkdkk/Social-Media-Project

✨ Features
🔐 Authentication
User registration and login
JWT-based authentication
Protected routes
Secure session handling
👤 User System
View user profiles
Update profile information
Search users
📝 Posts
Create new posts
Delete posts
Like posts
View feed from other users
💬 Real-Time Chat
One-to-one messaging
Instant message delivery using Socket.IO
Persistent chat history stored in MongoDB
🔍 Social Features
Follow and unfollow users
View followers/following list
User discovery through search
⚡ Real-Time System
Socket.IO integration for live communication
Instant updates without page refresh
🛠️ Tech Stack
Frontend
React.js
React Router
Axios
Socket.IO Client
CSS
Backend
Node.js
Express.js
MongoDB
Mongoose
JWT Authentication
Socket.IO
Deployment
Frontend: Vercel
Backend: (your backend hosting if any — Render / VPS)
📂 Project Structure
social-media-app/
│
├── client/ (Frontend - React)
│   ├── src/
│   ├── components/
│   └── pages/
│
├── server/ (Backend - Express)
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   └── socket/
│
└── README.md
⚙️ Environment Variables
Backend .env
PORT=5000
MONGO_URI=your_mongodb_connection_string

JWT_SECRET=your_jwt_secret
FRONTEND_URL=https://social-media-project-6l15.vercel.app
Frontend .env
VITE_API_URL=your_backend_url
VITE_SOCKET_URL=your_backend_url
📡 API Overview
Auth Routes
POST /api/auth/register
POST /api/auth/login
User Routes
GET /api/users/:id
PUT /api/users/:id
Post Routes
POST /api/posts
GET /api/posts
DELETE /api/posts/:id
PUT /api/posts/like/:id
Chat Routes
POST /api/chat
GET /api/chat/:userId
🔄 Real-Time Communication

This project uses Socket.IO to enable:

Instant messaging
Live chat updates
Real-time user interaction
🧠 Key Learnings
Full-stack MERN application architecture
JWT authentication and authorization
Socket.IO real-time communication
REST API design and integration
MongoDB schema design
Frontend-backend deployment workflow
Handling CORS and environment variables in production

👨‍💻 Author

Abhishek Khadka
GitHub: https://github.com/Abhishekkdkk

📄 License

This project is licensed under the MIT License.
