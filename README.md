# 💬 MERN Chat App

A real-time chat application built with the **MERN Stack** (MongoDB, Express.js, React.js, Node.js) and integrated with **Cloudinary** for cloud image storage and profile picture uploads.

## 🚀 Features

- 🔐 User authentication (Register/Login)
- 🧑‍🤝‍🧑 One-to-one chat
- 🟢 Real-time messaging with WebSocket (Socket.IO)
- 🖼️ Upload profile pictures with Cloudinary
- ✅ JWT-based authentication
- 📦 RESTful API with Express
- 📄 MongoDB for storing users and messages

---

## 🛠️ Tech Stack

| Tech | Description |
|------|-------------|
| **MongoDB** | NoSQL database for storing chat data |
| **Express.js** | Backend framework for routing and middleware |
| **React.js** | Frontend framework for UI |
| **Node.js** | JavaScript runtime for the server |
| **Cloudinary** | Cloud storage for images |
| **Socket.IO** | Real-time communication |
| **Mongoose** | ODM for MongoDB |
| **JWT** | Secure user authentication |

---

## 📁 Folder Structure

/client # React frontend
/server # Express backend

├── controllers
├── models
├── routes
├── middleware
├── utils
.env # Environment variables


---

## 📸 Screenshots

![image](https://github.com/user-attachments/assets/43e5047d-b74c-44f6-9b17-848222aa1d84)


---

## 🧑‍💻 Installation

### 1. Clone the repository

```bash
git clone https://github.com/your-username/mern-chat-app.git
cd mern-chat-app

2. Setup Backend
cd server
npm install
Create a .env file inside the server directory:

env

PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret

Start the server:
npm run dev

3. Setup Frontend
cd ../client
npm install
npm start

🔗 API Endpoints
Method	Endpoint	Description
POST	/api/auth/register	Register new user
POST	/api/auth/login	Login user
GET	/api/users	Get all users
GET	/api/messages/:id	Get messages between users
POST	/api/messages	Send message
PUT	/api/profile	Update profile info/image

🌐 Deployment
You can deploy the app using:

Frontend: Vercel / Netlify

Backend: Render / Railway / Heroku

MongoDB: MongoDB Atlas







