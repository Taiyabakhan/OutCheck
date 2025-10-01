# 🧭 OutCheck – Smart Commute Assistant

OutCheck is a real-time smart travel advisor that guides users on the best time to commute based on **live location**, **network strength**, and **weather conditions**. Built using modern Web APIs and React.js, it’s optimized for both user experience and functionality.

---
## ✨ Features

- 📍 **Live Location Detection** via `Geolocation API`
- 🌐 **Network Strength Analysis** via `Network Information API`
- 🌦 **Live Weather Forecasting** using `OpenWeatherMap API`
- 🔄 **Smart Background Tasks** with `setInterval` logic
- 📬 **Instant Travel Suggestions** (ideal or avoid travel)
- 🎨 **Dark/Light Mode Toggle**
- 🕒 **Last Refreshed Time** and ✅ **Toast Notification**
- 💾 **Saves Last Known Location** to `localStorage`
- 📍 **Reverse Geocoding** using OpenStreetMap API (via CORS proxy)

---
## 🚀 Tech Stack

- **Frontend:** React.js, JavaScript, CSS (with Tailwind or vanilla)
- **APIs Used:**
  - [Geolocation API](https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API)
  - [Network Information API](https://developer.mozilla.org/en-US/docs/Web/API/Network_Information_API)
  - [Background Tasks (setInterval)](https://developer.mozilla.org/en-US/docs/Web/API/setInterval)
  - [OpenWeatherMap API](https://openweathermap.org/api)
  - [Nominatim API](https://nominatim.org/release-docs/develop/api/Reverse/)

---
## 🧠 Logic Summary

- If **Network = 4G** and **Time between 6 AM to 10 PM** ➤ Suggest "✅ Good time to leave!"
- If **Network = 2G** ➤ Warn "❌ Poor network"
- If **Weather = Rain/Thunderstorm** ➤ Suggest "⚠️ Avoid travel"
- Else ➤ Suggest "⚠️ Conditions not ideal"

---

## 📸 Screenshots

Here’s how the web app looks when making a prediction:

## Smart Commute Decisions

### Light Mode 
![Home Page](https://github.com/Taiyabakhan/OutCheck/blob/main/Screenshot%20(175).png)
![Home Page](https://github.com/Taiyabakhan/OutCheck/blob/main/Screenshot%20(176).png)

![Prediction Example](https://github.com/Taiyabakhan/OutCheck/blob/main/Screenshot%20(177).png)
![Prediction Example](https://github.com/Taiyabakhan/OutCheck/blob/main/Screenshot%20(178).png)

### Dark Mode 
![Calorie COunter](https://github.com/Taiyabakhan/OutCheck/blob/main/Screenshot%20(179).png)



---

## 👩‍💻 Author

**Taiyaba Khan**  
📧 khantaiyaba610@gmail.com  

---

## 📄 License

This project is licensed under the **MIT License**.  
Feel free to fork, modify, and use it for learning or production.
