# ♻️ FoodiSync — Connecting NGOs, Food Banks & Restaurants to Reduce Waste

A web-based platform that connects NGOs and food banks with restaurants and party halls to **minimize food waste** using predictive **machine learning models**. Designed to foster real-time coordination and smart surplus food distribution.

---

## 🌍 Problem Statement

Each year, tons of edible food go to waste while millions remain undernourished. **FoodiSync** aims to bridge this gap by enabling food donors (restaurants, events, individuals) to connect with nearby NGOs and food banks — powered by demand prediction models to avoid mismatches and delays.

---

## 🔧 Tech Stack

- **Frontend**: React.js, TypeScript, Tailwind CSS, shadcn/ui, Vite
- **Backend**: FastAPI (or your backend stack — update if needed)
- **ML Models**: Trained with Python (Scikit-learn, Pandas, RandomForest)
- **Database**: MongoDB / PostgreSQL *(based on your actual setup)*
- **Hosting**: Vercel / Netlify for frontend, Render / Railway / AWS for backend *(customizable)*

---

## ✨ Key Features

- 📍 **Real-Time Geo Matching** of food donors and NGOs
- 🤖 **ML-Based Demand Prediction** to optimize food pickup routing and quantity planning
- 📅 **Event Scheduling** for food donations
- 🔔 **Smart Notifications** for new food availability
- 📊 **Analytics Dashboard** for NGO admins and donors
- 🔐 **Role-Based Authentication** (Donor / NGO / Admin)

---

## 📦 Getting Started (Frontend)

> Make sure [Node.js](https://nodejs.org/) is installed.

```bash
git clone https://github.com/vtyagi26/foodisync.git
cd foodlink
npm install
npm run dev
