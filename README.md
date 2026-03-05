# 🚀 Professional MERN Stack Portfolio

A high-performance, fully responsive personal portfolio designed to showcase full-stack development expertise. This project features a React-based frontend, a Node/Express backend for contact management, and a mobile-first UI architecture.

🔗 **Live Link:** [portfolio-blue-psi-oidiiz6jv5.vercel.app](https://portfolio-blue-psi-oidiiz6jv5.vercel.app/)

---

## 🛠️ Tech Stack
* **Frontend:** React.js (Functional Components, Hooks)
* **Backend:** Node.js & Express.js
* **Database:** MongoDB Atlas (Cloud Database)
* **Styling:** Tailwind CSS (Utility-first CSS)
* **Deployment:** Vercel (Frontend) & Render (Backend)

---

## ✨ Key Features & Technical Solutions

### 📱 Responsive Engineering (Mobile-First)
One of the core challenges solved in this project was the "text cut-off" issue on mobile devices. 
* **The Fix:** Replaced rigid padding (`pl-20`) with responsive utility classes (`px-6 md:pl-20`).
* **Result:** Content now scales perfectly from a 320px mobile screen to a 4K desktop display.

### 🛡️ Secure API & CORS Management
Successfully implemented a secure communication bridge between the Vercel frontend and Render backend.
* **Solution:** Configured custom **CORS middleware** to allow specific origins, preventing unauthorized API access and solving "Failed to Fetch" errors.

### 📬 Real-time Contact System
* Users can send messages directly through the "Get In Touch" modal.
* Data is validated on the backend and stored securely in **MongoDB**.

---

## 🏗️ Architecture


---

## 🚀 Installation & Local Setup

### 1. Clone the Repository
```bash
git clone [https://github.com/balajii-dev/Portfolio.git](https://github.com/balajii-dev/Portfolio.git)
cd Portfolio
