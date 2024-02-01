# Videotube

Videotube is a complex backend project built with Node.js, Express.js, MongoDB, Mongoose, JWT, bcrypt, and more. It serves as the backbone for a video hosting website similar to YouTube, equipped with features like user authentication, video upload, like/dislike, comments, subscriptions, and more.

The Videotube project includes a powerful aggregation pipeline designed to extract relevant information from the MongoDB database. This pipeline is crafted to efficiently process and transform data, providing valuable insights for various functionalities within the video hosting platform.

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

    PORT=
    MONGODB_URI=
    CORS_ORIGIN=*
    ACCESS_TOKEN_SECRET=
    ACCESS_TOKEN_EXPIRY=1d
    REFRESH_TOKEN_SECRET=
    REFRESH_TOKEN_EXPIRY=10d

    CLOUDINARY_CLOUD_NAME=
    CLOUDINARY_API_KEY=
    CLOUDINARY_API_SECRET=

3. **Run the application:**

    npm run dev


The server will be running at http://localhost:{PORT}.