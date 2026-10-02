# 🏠 Real Estate Marketplace

### A Full-Stack MERN-Based Platform for Property Discovery & Buyer–Seller Communication

The **Real Estate Marketplace** is a modern full-stack web application designed to connect **property buyers and sellers** through a centralized, secure, and user-friendly platform.

Buyers can discover properties, apply filters, save favorites, send inquiries, and communicate with sellers. Sellers can manage their property listings and inquiries, while administrators handle users, sellers, properties, and platform activities.

---

## 🌐 Project Overview

The platform provides dedicated functionality for three types of users:

| Role          | Main Responsibilities                                      |
| ------------- | ---------------------------------------------------------- |
| 👤 **Buyer**  | Search properties, wishlist, inquiries, chat               |
| 🏢 **Seller** | Manage properties, inquiries, and buyer communication      |
| 🛡️ **Admin** | Manage users, sellers, properties, and platform activities |

### 🎯 Project Goal

To provide a **single digital platform** that simplifies:

**Property Discovery → Property Management → Buyer–Seller Communication**

---

# ✨ Key Features

## 👤 Buyer

* 🔐 User registration and secure login
* ✉️ OTP-based email verification
* 🔎 Search and filter properties
* 🏠 Browse available properties
* 📄 View detailed property information
* ❤️ Add properties to wishlist
* 📩 Send inquiries to sellers
* 💬 Chat with sellers
* 👤 Manage personal profile

## 🏢 Seller

* 📝 Seller registration
* ✅ Admin-based seller approval
* 🔐 Secure authentication
* ➕ Add new property listings
* ✏️ Update property information
* 🗑️ Delete property listings
* 📋 Manage listed properties
* 📩 View and manage buyer inquiries
* 💬 Communicate with buyers
* 👤 Manage seller profile

## 🛡️ Admin

* 🔐 Admin authentication
* 👥 Manage users
* ✅ Approve seller registrations
* 🚫 Block / unblock users
* 🏠 View property listings
* 🗑️ Delete inappropriate properties
* 📩 View buyer inquiries
* 📬 View contact messages
* ⚙️ Centralized platform management

---

# 🛠️ Technology Stack

### Frontend

| Technology       | Purpose               |
| ---------------- | --------------------- |
| **React.js**     | User interface        |
| **Vite**         | Frontend build tool   |
| **TypeScript**   | Type-safe development |
| **Tailwind CSS** | Responsive UI styling |
| **Axios**        | API communication     |

### Backend

| Technology     | Purpose                          |
| -------------- | -------------------------------- |
| **Node.js**    | Server-side runtime              |
| **Express.js** | Backend framework                |
| **REST APIs**  | Frontend–backend communication   |
| **JWT**        | Authentication and authorization |

### Database

| Technology   | Purpose                 |
| ------------ | ----------------------- |
| **MongoDB**  | Database                |
| **Mongoose** | MongoDB object modeling |

### External Services

* ☁️ **Cloudinary** — Property image storage and management
* ✉️ **Brevo API** — OTP-based email verification

---

# 🏗️ System Architecture

```text
                         ┌─────────────────────────┐
                         │          USERS          │
                         │                         │
                         │  Buyer │ Seller │ Admin │
                         └────────────┬────────────┘
                                      │
                                      ▼
                         ┌─────────────────────────┐
                         │        FRONTEND         │
                         │                         │
                         │ React.js + Vite         │
                         │ TypeScript + Tailwind   │
                         │ Axios                   │
                         └────────────┬────────────┘
                                      │
                                REST API
                                      │
                                      ▼
                         ┌─────────────────────────┐
                         │         BACKEND         │
                         │                         │
                         │ Node.js + Express.js    │
                         │ JWT Authentication      │
                         │ REST APIs               │
                         └────────────┬────────────┘
                                      │
                     ┌────────────────┴────────────────┐
                     │                                 │
                     ▼                                 ▼
          ┌─────────────────────┐          ┌─────────────────────┐
          │       DATABASE      │          │  EXTERNAL SERVICES  │
          │                     │          │                     │
          │      MongoDB        │          │     Cloudinary      │
          │      Mongoose       │          │     Brevo API       │
          │                     │          │                     │
          │ • Users             │          │ • Property Images  │
          │ • Properties        │          │ • OTP Emails       │
          │ • Inquiries         │          │                     │
          │ • Contacts          │          │                     │
          │ • Wishlist          │          │                     │
          └─────────────────────┘          └─────────────────────┘
```

---

# 🔐 Security & Authentication

The application uses multiple security mechanisms to protect user accounts and platform resources.

* **JWT Authentication** for secure user sessions
* **Role-Based Access Control** for Buyer, Seller, and Admin
* **OTP Email Verification** during registration
* **Protected REST APIs**
* **Password Hashing**
* **Seller Approval Workflow**
* **User Blocking / Unblocking**

---

# 🔄 Application Workflow

```text
              User Registration
                     │
                     ▼
              OTP Verification
                     │
                     ▼
                User Login
                     │
          ┌──────────┼──────────┐
          ▼          ▼          ▼
        Buyer      Seller      Admin
          │          │          │
          ▼          ▼          ▼
      Search      Manage      Manage
     Properties   Listings     Users
          │          │          │
          ▼          ▼          ▼
      Wishlist    Inquiries   Properties
          │          │          │
          ▼          ▼          ▼
      Inquiry       Chat      Platform
          │          │        Management
          └──────────┴──────────┘
                     │
                     ▼
              Buyer–Seller
               Communication
```

---

# 📂 Main Modules

```text
Real Estate Marketplace
│
├── 👤 Authentication
│   ├── Registration
│   ├── Login
│   ├── JWT Authentication
│   └── OTP Verification
│
├── 🏠 Property Management
│   ├── Add Property
│   ├── Update Property
│   ├── Delete Property
│   ├── Search & Filter
│   └── Property Details
│
├── ❤️ Wishlist
│
├── 📩 Inquiry Management
│
├── 💬 Buyer–Seller Chat
│
├── 👥 User Management
│
├── 🛡️ Admin Management
│
└── ☁️ Cloud Services
    ├── Cloudinary
    └── Brevo API
```

---

# 📱 Responsive Design

The application is designed with a responsive interface to provide a consistent experience across:

* 💻 Desktop
* 📱 Mobile
* 📟 Tablet

The UI is built using **React.js and Tailwind CSS** with a focus on simple navigation and usability.

---

# 🚀 Core Functional Flow

```text
Browse Properties
       ↓
Search / Filter
       ↓
View Property Details
       ↓
Add to Wishlist
       ↓
Send Inquiry
       ↓
Chat with Seller
       ↓
Buyer–Seller Communication
```

---

# 📌 Future Enhancement

The platform can be extended with additional features such as:

* 📅 Online property booking
* 🔔 Real-time notifications
* 📊 Advanced admin analytics
* 🗺️ Map-based property search
* 📱 Mobile application

---

# 👨‍💻 Developer

**Samit Sankhla**

MCA — Computer Science & Engineering
MBM University, Jodhpur, Rajasthan

---

## ⭐ Project Highlights

> **Search • Manage • Wishlist • Inquire • Chat • Manage**

A centralized real estate platform that brings **buyers, sellers, and administrators** together in one secure web application.

---

### 📄 License

This project is developed for **academic and educational purposes**.
