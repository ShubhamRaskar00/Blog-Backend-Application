# Blog Backend Application

## Project Overview
This is a backend application for a blog platform built with Node.js, Express, and MongoDB. The application provides APIs for user authentication and blog post management.

## Prerequisites
- Node.js (v18 or later)
- MongoDB

## Project Structure
```
src/
│
├── config/          # Configuration files
├── controllers/     # Route handlers
├── middleware/      # Custom middleware
├── models/          # Mongoose models
├── routers/         # Express route definitions
├── services/        # Business logic
└── utils/           # Utility functions
```

## Installation

### 1. Clone the Repository
```bash
git clone https://github.com/ShubhamRaskar00/Blog-Backend-Application.git
cd Blog-Backend-Application
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Environment Configuration
Create a `.env` file in the root directory with the following variables:
```
PORT=5001
MONGODB_URI='your_mongodb_connection_string'
JWT_SECRET='your_jwt_secret_key'
NODE_ENV="development"
```

### 4. Dependencies
Key dependencies used in this project:
- Express: Web framework
- Mongoose: MongoDB object modeling
- JSONWebToken: Authentication
- Bcrypt: Password hashing
- Cors: Cross-origin resource sharing
- Dotenv: Environment variable management

## Available Scripts

### Start the Development Server
```bash
npm run dev
```

### Run in Production
```bash
npm start
```

## API Endpoints

### Authentication
- `POST /api/auth/signup`
  - Register a new user
  - Request Body: 
    ```json
    {
      "name": "John Doe",
      "email": "john@example.com",
      "password": "securepassword"
    }
    ```

- `POST /api/auth/login`
  - User login
  - Request Body:
    ```json
    {
      "email": "john@example.com",
      "password": "securepassword"
    }
    ```

### Blog Posts
- `POST /api/posts/create`
  - Create a new blog post
  - Requires Authentication
  - Request Body:
    ```json
    {
      "title": "Blog Post Title",
      "subTitle": "Blog Post Subtitle",
      "tags": ["technology", "programming"],
      "content": "Full blog post content"
    }
    ```

- `PUT /api/posts/:postId`
  - Update an existing blog post
  - Requires Authentication

- `DELETE /api/posts/:postId`
  - Delete a blog post
  - Requires Authentication

- `GET /api/posts`
  - Retrieve all blog posts
  - Optional query parameters for pagination

- `GET /api/posts/:postId`
  - Retrieve a specific blog post by ID

- `GET /api/posts/tag/:tagName`
  - Retrieve posts by specific tag

## Authentication
- JWT (JSON Web Token) is used for authentication
- Passwords are hashed using bcrypt
- Protected routes require a valid JWT token in the Authorization header

## Error Handling
- Consistent error response format
- Detailed error messages for debugging
- Appropriate HTTP status codes

## Security Considerations
- Password hashing
- JWT authentication
- Input validation
- CORS configuration
- Environment-based configuration

## Logging
- Morgan for HTTP request logging
- Winston for application logging (optional)

## Testing
- Recommended testing frameworks:
  - Jest
  - Supertest

## Deployment
- Ensure all environment variables are set
- Use process managers like PM2
- Consider containerization with Docker

## Contributing
1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License
Specify your project's license (e.g., MIT, Apache)

## Contact
SR SHUBH
shubhamraskar69@gmail.com