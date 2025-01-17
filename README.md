# User Authentication System

## Description
The **User Authentication System** is a secure platform that allows users to register, log in, and reset their passwords. The system implements strong password encryption using hashing algorithms to ensure user data security. It also includes a **forgot password** feature with email verification, where a verification code is sent to the user’s registered email for password resetting.

## Features
- 🔐 Secure user registration with **hashed passwords**.
- 🔑 User login authentication system with **validation checks**.
- 📧 **Forgot password** functionality with email verification.
- 🔄 Password reset using a **verification code** sent to the registered email.
- 🧹 Clears input fields after successful registration or login.

Usage
User Registration:
Users can register by providing their email and a password.
Passwords are hashed before being stored in the database for security.

Login:

Users can log in by providing their email and password.
The system validates the login credentials using hashed password comparison.

Forgot Password:
Users can request a password reset, where a verification code is sent to their registered email.
After entering the verification code, they can set a new password.

Technologies
Backend: Node.js, Next.js
Database: MySQL
Security: Password hashing (bcrypt or similar)
