# 📚 Bookstore - Full Stack E-Commerce Application

A modern, full-stack e-commerce platform for managing and purchasing books with enterprise-grade authentication, authorization, and a beautiful user interface.

![GitHub stars](https://img.shields.io/github/stars/yourusername/bookstore?style=flat-square)
![License](https://img.shields.io/badge/License-MIT-blue.svg?style=flat-square)
![Node.js Version](https://img.shields.io/badge/Node.js-20+-green.svg?style=flat-square)
![Docker](https://img.shields.io/badge/Docker-Supported-blue.svg?style=flat-square)

---

## 📋 Table of Contents

- [Features](#-features)
- [Technology Stack](#-technology-stack)
- [Project Structure](#-project-structure)
- [Prerequisites](#-prerequisites)
- [Installation](#-installation)
- [Configuration](#-configuration)
- [Running the Application](#-running-the-application)
- [API Endpoints](#-api-endpoints)
- [Authentication & Authorization](#-authentication--authorization)
- [Usage Guide](#-usage-guide)
- [Screenshots](#-screenshots)
- [Contributing](#-contributing)
- [License](#-license)
- [Contact](#-contact)

---

## ✨ Features

### Core Features
- 📖 **Browse Books** - Explore a comprehensive catalog of books with detailed information
- 🛒 **Shopping Cart** - Add/remove books and manage quantities
- 👤 **User Authentication** - Secure OAuth2/OIDC authentication via Keycloak
- 🔐 **Role-Based Access Control** - Separate CLIENT and ADMIN roles with granular permissions
- 📂 **Category Management** - Organize books by categories
- 🎯 **Admin Dashboard** - Full CRUD operations for books and categories
- 📱 **Responsive Design** - Works seamlessly on desktop, tablet, and mobile devices
- 🚀 **Docker Support** - Containerized deployment ready

### Advanced Features
- 🔄 **Automatic Token Refresh** - JWT tokens automatically refresh before expiration
- 🛡️ **JWT Verification** - Backend validates all tokens using Keycloak JWKS
- 📊 **MongoDB Database** - Persistent data storage with indexed queries
- 🌐 **CORS Enabled** - Secure cross-origin requests
- 📝 **Comprehensive Logging** - Detailed auth and API logging for debugging
- 🔗 **RESTful API** - Clean and intuitive API design

---

## 🛠️ Technology Stack

### Frontend
- **React 19.2** - UI library with hooks and functional components
- **Vite 7.3.1** - Lightning-fast build tool and dev server
- **React Router 7.13.1** - Client-side routing and navigation
- **Axios 1.13.6** - HTTP client with interceptors for token management
- **Keycloak-JS 25.0.2** - OAuth2/OIDC client library
- **CSS3** - Responsive styling with flexbox and grid

### Backend
- **Node.js 20** - JavaScript runtime
- **Express 5.2.1** - Web framework for API routing
- **Mongoose 9.2.4** - MongoDB object modeling
- **Jose 6.2.2** - JWT verification and signing
- **CORS** - Cross-Origin Resource Sharing middleware

### Infrastructure & DevOps
- **Docker** - Containerization for all services
- **Docker Compose** - Multi-container orchestration
- **MongoDB 9.2.4** - NoSQL database
- **Keycloak 25.0.2** - Open-source authentication server
- **Nginx** - Reverse proxy for frontend

---

## 📁 Project Structure

```
bookstore/
├── backend/                          # Express.js API server
│   ├── middleware/
│   │   └── auth.js                   # JWT verification & role-based middleware
│   ├── models/
│   │   ├── books.js                  # Book MongoDB schema
│   │   └── category.js               # Category MongoDB schema
│   ├── Dockerfile                    # Backend container configuration
│   ├── package.json                  # Dependencies & scripts
│   └── server.js                     # Express server entry point
│
├── frontend/
│   └── ateliereact/                  # Vite React application
│       ├── src/
│       │   ├── api/
│       │   │   ├── axiosClient.js    # Axios instance with token interceptors
│       │   │   ├── booksApi.js       # Books API service
│       │   │   └── categoriesApi.js  # Categories API service
│       │   ├── components/
│       │   │   ├── BookCard.jsx      # Book display component
│       │   │   ├── BookForm.jsx      # Add/Edit book form
│       │   │   ├── BookList.jsx      # Book list container
│       │   │   ├── CategoryForm.jsx  # Add/Edit category form
│       │   │   ├── CategoryList.jsx  # Category list container
│       │   │   ├── Footer.jsx        # Footer navigation
│       │   │   ├── Header.jsx        # Navigation header with auth
│       │   │   └── MainLayout.jsx    # Layout wrapper
│       │   ├── config/
│       │   │   └── keycloak.js       # Keycloak configuration
│       │   ├── context/
│       │   │   └── KeycloakProvider.jsx  # Auth state management
│       │   ├── hooks/
│       │   │   └── useKeycloak.js    # Custom Keycloak hook
│       │   ├── pages/
│       │   │   ├── HomePage.jsx      # Landing page
│       │   │   ├── BooksPage.jsx     # Books listing
│       │   │   ├── BookDetail.jsx    # Book details
│       │   │   ├── BookEdit.jsx      # Edit book (admin)
│       │   │   ├── CategoryPage.jsx  # Category management
│       │   │   ├── AboutPage.jsx     # About page
│       │   │   └── ContactPage.jsx   # Contact page
│       │   ├── styles/               # CSS modules for each component
│       │   ├── App.jsx               # Root component
│       │   └── main.jsx              # Entry point
│       ├── public/
│       │   └── silent-check-sso.html # SSO iframe handler
│       ├── Dockerfile                # Frontend container configuration
│       ├── nginx.conf                # Nginx reverse proxy config
│       ├── vite.config.js            # Vite configuration
│       └── package.json              # Dependencies & build scripts
│
├── docker-compose.yaml               # Multi-container orchestration
└── README.md                         # This file
```

---

## 📦 Prerequisites

Before you begin, ensure you have the following installed:

- **Docker** (v20.0+) - [Download](https://www.docker.com/products/docker-desktop)
- **Docker Compose** (v2.0+) - Usually included with Docker Desktop
- **Node.js** (v20+) - [Download](https://nodejs.org/) (optional, for local development)
- **Git** - [Download](https://git-scm.com/)

---

## 🚀 Installation

### Clone the Repository

```bash
git clone https://github.com/yourusername/bookstore.git
cd bookstore
```

### Using Docker (Recommended)

The entire application runs in Docker containers, so you don't need to install Node.js or MongoDB locally.

1. **Build and start all services:**

```bash
docker-compose up --build
```

The application will be available at:
- **Frontend**: `http://localhost`
- **Backend API**: `http://localhost:5000`
- **Keycloak Admin**: `http://localhost:8080/admin` (admin/admin)
- **Mongo Express**: `http://localhost:8081`

### Local Development (Without Docker)

If you prefer to run services locally:

1. **Install Backend Dependencies:**

```bash
cd backend
npm install
```

2. **Install Frontend Dependencies:**

```bash
cd frontend/ateliereact
npm install
```

3. **Start Keycloak** (in Docker):

```bash
docker run -p 8080:8080 \
  -e KEYCLOAK_ADMIN=admin \
  -e KEYCLOAK_ADMIN_PASSWORD=admin \
  quay.io/keycloak/keycloak:25.0.2 start-dev
```

4. **Start MongoDB** (in Docker):

```bash
docker run -p 27017:27017 mongo:latest
```

5. **Start Backend:**

```bash
cd backend
npm run dev
```

6. **Start Frontend:**

```bash
cd frontend/ateliereact
npm run dev
```

---

## ⚙️ Configuration

### Environment Variables

#### Backend (`.env` or `docker-compose.yaml`)

```env
KEYCLOAK_URL=http://keycloak:8080        # Keycloak server URL (http://localhost:8080 for local dev)
KEYCLOAK_REALM=bookstore-realm           # Keycloak realm name
MONGODB_URI=mongodb://mongodb:27017/booksdb  # MongoDB connection string
```

#### Frontend (`src/config/keycloak.js`)

```javascript
const keycloak = new Keycloak({
  url: 'http://localhost:8080',          // Keycloak server URL
  realm: 'bookstore-realm',               // Keycloak realm
  clientId: 'ecommerce-frontend',         // Keycloak client ID
})
```

### Keycloak Setup

1. **Access Keycloak Admin Console:** `http://localhost:8080/admin`
2. **Login:** admin / admin
3. **Create Realm:**
   - Name: `bookstore-realm`
4. **Create Client:**
   - Client ID: `ecommerce-frontend`
   - Client Type: OpenID Connect
   - Valid Redirect URIs: `http://localhost/*`, `http://localhost:80/*`
   - Valid Post Logout Redirect URIs: `http://localhost/`
4. **Create Users** with Roles:
   - Username: `testadmin`, Password: `admin123`, Role: `ADMIN`
   - Username: `testuser`, Password: `user123`, Role: `CLIENT`

---

## 🎯 Running the Application

### Using Docker Compose

```bash
# Start all services in background
docker-compose up -d

# View logs
docker-compose logs -f

# Stop all services
docker-compose down
```

### Useful Commands

```bash
# View specific service logs
docker-compose logs backend
docker-compose logs frontend
docker-compose logs keycloak

# Rebuild containers
docker-compose up --build

# Remove all containers and volumes
docker-compose down -v
```

---

## 📡 API Endpoints

### Authentication

All endpoints (except documented public ones) require a valid JWT token in the `Authorization` header:

```
Authorization: Bearer <JWT_TOKEN>
```

### Books

| Method | Endpoint | Role Required | Description |
|--------|----------|---------------|-------------|
| `GET` | `/books` | AUTH | Get all books |
| `POST` | `/books` | ADMIN | Create a new book |
| `PUT` | `/books/:id` | ADMIN | Update a book |
| `DELETE` | `/books/:id` | ADMIN | Delete a book |

**Example Request:**

```bash
curl -X GET http://localhost:5000/books \
  -H "Authorization: Bearer YOUR_JWT_TOKEN"
```

**Response:**

```json
[
  {
    "_id": "67890abc123",
    "title": "The Great Gatsby",
    "author": "F. Scott Fitzgerald",
    "price": 9.99,
    "category": "Fiction",
    "description": "A classic American novel",
    "imageUrl": "https://example.com/gatsby.jpg",
    "createdAt": "2024-01-15T10:30:00Z"
  }
]
```

### Categories

| Method | Endpoint | Role Required | Description |
|--------|----------|---------------|-------------|
| `GET` | `/categories` | AUTH | Get all categories |
| `POST` | `/categories` | ADMIN | Create a category |
| `PUT` | `/categories/:id` | ADMIN | Update a category |
| `DELETE` | `/categories/:id` | ADMIN | Delete a category |

**Example Response:**

```json
[
  {
    "_id": "123abc456",
    "name": "Fiction",
    "description": "Fictional works and novels",
    "createdAt": "2024-01-10T08:45:00Z"
  }
]
```

---

## 🔐 Authentication & Authorization

### How It Works

1. **User Login** → Redirected to Keycloak login page
2. **Token Generation** → Keycloak issues JWT token
3. **Token Storage** → Token stored in browser (via Keycloak.js)
4. **Auto-Refresh** → Token refreshed 30 seconds before expiration
5. **API Requests** → Axios interceptor adds token to all requests
6. **Backend Verification** → Express middleware verifies JWT using Keycloak JWKS
7. **Role Validation** → Routes check user roles for authorization

### Roles

- **ADMIN** - Full access to all endpoints (create, read, update, delete)
- **CLIENT** - Read-only access (can only GET resources)

### Protected Routes

- **Public Routes:**
  - Home, About, Contact pages

- **Authenticated Routes (CLIENT+):**
  - Books list, Book details
  - Category list

- **Admin Only Routes:**
  - Add/Edit books
  - Delete books
  - Manage categories

---

## 💡 Usage Guide

### For End Users

1. **Create an Account**
   - Click "Login" in the header
   - Create a new account in Keycloak
   - Redirect to dashboard

2. **Browse Books**
   - Navigate to "Books" page
   - View book details and descriptions

3. **Admin Panel** (Admin users only)
   - Navigate to "Categories" to manage book categories
   - Use "Add Book" to create new book entries
   - Edit or delete books from the Books page

### For Developers

1. **Adding New Fields to Books**
   - Update schema in `backend/models/books.js`
   - Update API routes in `backend/server.js`
   - Update frontend form in `frontend/ateliereact/src/components/BookForm.jsx`

2. **Adding New Routes**
   - Create API endpoint in `backend/server.js`
   - Add middleware for authentication/authorization
   - Create frontend component/page
   - Add route in `frontend/ateliereact/src/App.jsx`

3. **Styling Updates**
   - Modify CSS files in `frontend/ateliereact/src/styles/`
   - Component-specific styles are in the same folder

---

## 📸 Screenshots

### Home Page
<img width="1903" height="965" alt="image" src="https://github.com/user-attachments/assets/85007500-b0eb-454a-a750-61293ae0c103" />
*Description: Landing page with featured books and navigation*

### Books Catalog
<img width="1760" height="962" alt="image" src="https://github.com/user-attachments/assets/4058b022-a3fc-4869-a2d0-d1597d0baaf3" />
*Description: Browse all available books with search and filter options*

### Book Details
<img width="1887" height="880" alt="image" src="https://github.com/user-attachments/assets/9d45d2af-23a0-4e42-a58f-3872d712bd04" />
*Description: Detailed view of a selected book with price and description*

### Keycloak Login
<img width="1919" height="950" alt="image" src="https://github.com/user-attachments/assets/872bfabc-7f1e-44b2-89a6-145d8f090dbc" />
*Description: Secure OAuth2 login via Keycloak*

### Category Management
<img width="1905" height="877" alt="image" src="https://github.com/user-attachments/assets/193b2901-e68a-4899-a655-6c8823eea131" />

*Description: Admin interface for managing book categories*

### Contact
<img width="1487" height="2674" alt="localhost_contact" src="https://github.com/user-attachments/assets/90e69edd-ae3e-4971-b75b-b7ccada82c9b" />

### About
<img width="1600" height="4463" alt="localhost_about" src="https://github.com/user-attachments/assets/559b1529-940b-4c9b-84e9-f42ce2953deb" />



---

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. **Fork the Repository**
   ```bash
   git clone https://github.com/yourusername/bookstore.git
   cd bookstore
   ```

2. **Create Feature Branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```

3. **Commit Changes**
   ```bash
   git commit -m 'Add amazing feature'
   ```

4. **Push to Branch**
   ```bash
   git push origin feature/amazing-feature
   ```

5. **Open a Pull Request**
   - Describe your changes clearly
   - Link any related issues

### Development Guidelines

- Follow ES6+ syntax standards
- Keep components small and focused
- Add comments for complex logic
- Test API endpoints before submitting PR
- Ensure Docker build is successful

---

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

```
MIT License

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.
```

---

## 📞 Contact

- **Author:** Your Name
- **Email:** your.email@example.com
- **GitHub:** [@yourusername](https://github.com/yourusername)
- **Website:** https://yourwebsite.com

---

## 🙏 Acknowledgments

- [Keycloak](https://www.keycloak.org/) - Open-source identity and access management
- [React](https://react.dev/) - UI library
- [Express](https://expressjs.com/) - Node.js web framework
- [MongoDB](https://www.mongodb.com/) - NoSQL database
- [Docker](https://www.docker.com/) - Containerization platform

---

## 📊 Project Statistics

- **Total Files:** 25+
- **Lines of Code:** 2000+
- **Last Updated:** April 2026
- **Status:** Active Development ✅

---

**⭐ If you found this project helpful, please give it a star!** ⭐
