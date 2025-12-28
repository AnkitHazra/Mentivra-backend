#  [MENTIVRA BACKEND](https://www.mentivra.site/)

Mentivra Backend is the server-side application powering the Mentivra platform. It is built using **Node.js**, **Express**, and **MongoDB**, and provides RESTful APIs for authentication, data management, and AI-powered features using Google Generative AI.

---

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [Running the Server](#running-the-server)
- [Scripts](#scripts)
- [Dependencies](#dependencies)
- [Authentication](#authentication)
- [Database](#database)
- [AI Integration](#ai-integration)
- [License](#license)
- [Maintainer](#maintainer)

---

## Overview

This repository contains the backend codebase for Mentivra. It handles:

- User authentication and authorization
- Secure API endpoints
- Database operations using MongoDB
- Integration with Google Generative AI for AI-driven features
- Environment-based configuration and secure token handling

---

## Features

- RESTful API architecture
- JWT-based authentication
- Password hashing with bcrypt
- MongoDB integration using Mongoose
- AI-powered responses via Google Generative AI
- CORS-enabled secure API access
- Environment variable management with dotenv
- Hot-reload development workflow using nodemon

---

## Tech Stack

| Layer               | Technology |
|--------------------|------------|
| Runtime            | Node.js (ES Modules) |
| Framework          | Express.js |
| Database           | MongoDB |
| ODM                | Mongoose |
| Authentication     | JWT, bcrypt |
| AI Integration     | Google Generative AI |
| Environment Config | dotenv |
| Dev Tools          | nodemon |

---

## Project Structure
```text
Mentivra-backend/
│
├── index.js # Application entry point
├── package.json # Project metadata and dependencies
├── .env # Environment variables
├── models/ # Mongoose schemas
├── routes/ # API routes
├── controllers/ # Business logic
├── middleware/ # Authentication & middleware
└── utils/ # Utility functions
```

---

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/AnkitHazra/Mentivra-backend.git
   cd Mentivra-backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
# Dependencies
- Production Dependencies

  - express – Web framework

  - mongoose – MongoDB ODM

  - jsonwebtoken – JWT authentication

  - bcryptjs – Password hashing

  - dotenv – Environment variable management

  - cors – Cross-Origin Resource Sharing

  - @google/generative-ai – AI integration

  - node-fetch – HTTP requests

  - fs – File system utilities

# Development Dependencies

- nodemon – Development auto-reload tool

#Authentication

- Passwords are securely hashed using bcrypt

- Authentication uses JSON Web Tokens (JWT)

- Protected routes require a valid Bearer token

3Database

- MongoDB is used as the primary database

- Mongoose is used for schema modeling and queries

- Connection is configured via MONGO_URI

#AI Integration

- Mentivra integrates Google Generative AI to enable AI-driven features and responses.
The API key must be provided using the GOOGLE_API_KEY environment variable.

#License

This project is licensed under the ISC License.

#Maintainer

 [ANKIT HAZRA](https://www.ankithazra.online/)
