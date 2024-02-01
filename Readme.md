# Videotube

Videotube is a complex backend project built with Node.js, Express.js, MongoDB, Mongoose, JWT, bcrypt, and more. It serves as the backbone for a video hosting website similar to YouTube, equipped with features like user authentication, video upload, like/dislike, comments, subscriptions, and more.

## Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT (JSON Web Tokens)
- bcrypt

## Features

- **User Authentication:** Sign up and log in securely using JWT for token-based authentication.
- **Video Management:** Upload videos to the platform.
- **User Interaction:** Like, dislike, comment on videos.
- **Comment:** Engage in discussions with the ability to comments.
- **Subscriptions:** Subscribe and unsubscribe to channels for personalized content updates.

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/Videotube.git
   cd Videotube

2. **Install dependencies:**

    npm install

3. **Set up the environment variables:**

    PORT=3000
    MONGODB_URI=mongodb://localhost:27017/videotube
    JWT_SECRET=your_jwt_secret

3. **Run the application:**

    npm run dev


The server will be running at http://localhost:{PORT}.