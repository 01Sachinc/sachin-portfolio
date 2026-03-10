# 🚀 Sachin C S | Cloud & DevOps Portfolio

### _Premium, Responsive, and Performance-Optimized Portfolio for Modern Engineering_

[![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)](https://reactjs.org/)
[![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer%20Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white)](https://www.framer.com/motion/)
[![Three.js](https://img.shields.io/badge/Three.js-black?style=for-the-badge&logo=three.js&logoColor=white)](https://threejs.org/)

---

## 🌟 Overview

This project is a **high-end developer portfolio** custom-built for **Sachin C S**, a Cloud and DevOps Engineer. It is designed to create a premium first impression for recruiters and hiring managers by combining clean typography, glassmorphic UI elements, and interactive 3D visual effects.

### ✨ Key Features

- **3D Background**: Subtle star-field background powered by Three.js and React Three Fiber.
- **Dynamic Repositories**: Real-time fetching of GitHub repositories using the GitHub REST API.
- **Micro-Animations**: Smooth transitions and scroll-triggered reveals using Framer Motion.
- **Responsive Design**: Fully optimized for Mobile, Tablet, and Desktop (4K).
- **Glassmorphism**: Modern frosted-glass aesthetic for cards and navigation.

---

## 🛠️ Technology Stack

| Layer            | Technology                    |
| :--------------- | :---------------------------- |
| **Framework**    | React 19 (Vite)               |
| **Styling**      | Tailwind CSS v4               |
| **Animation**    | Framer Motion                 |
| **3D Rendering** | Three.js / React Three Fiber  |
| **Icons**        | Lucide React                  |
| **Typography**   | Google Fonts (Outfit & Inter) |

---

## 📂 Repository Structure

```text
sachin-portfolio/
├── 📁 public/            # Static assets and project images
├── 📁 src/
│   ├── 📁 components/    # Reusable UI elements (Navbar, Background)
│   ├── 📁 sections/      # Main page sections (Hero, Projects, Skills)
│   ├── 📁 utils/         # API and helper functions
│   ├── 📁 constants/     # Centralized site data
│   ├── App.tsx           # Main application shell
│   └── index.css         # Global styles & Tailwind layers
└── vite.config.ts        # Project configuration
```

---

## 🚀 Local Development

Follow these steps to run the portfolio locally:

1. **Clone the repository**:

   ```bash
   git clone https://github.com/01Sachinc/sachin-portfolio.git
   cd sachin-portfolio
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Start the development server**:

   ```bash
   npm run dev
   ```

4. **Build for production**:
   ```bash
   npm run build
   ```

---

## 👨‍💻 Deployment (GitHub Pages)

To deploy this project to GitHub Pages:

1. Ensure `gh-pages` is installed: `npm install gh-pages --save-dev`.
2. Update `vite.config.ts` to include `base: '/sachin-portfolio/'`.
3. Add deploy scripts to `package.json`:
   ```json
   "predeploy": "npm run build",
   "deploy": "gh-pages -d dist"
   ```
4. Run `npm run deploy`.

---

## 👨‍💼 Professional Profile

**Sachin C S**  
_Cloud & DevOps Specialist_  
[LinkedIn](https://www.linkedin.com/in/csesachin/) | [GitHub](https://github.com/01Sachinc) | [Email](mailto:cssachin83@gmail.com)

---

_Built with ❤️ for Engineering Excellence._
