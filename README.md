# Sachin C S - Professional Portfolio

Built with **React (Vite)**, **Tailwind CSS**, and **Framer Motion**. Deployed on **AWS**.

## 🚀 Live Demo
[sachincs.dev](https://sachincs.dev) *(Replace with your domain after deployment)*

## 🛠 Tech Stack
- **Frontend:** React 18, Vite
- **Styling:** Tailwind CSS (Custom Dark Theme + Glassmorphism)
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Hosting:** AWS S3 + CloudFront
- **CI/CD:** GitHub Actions

## 📂 Project Structure
```text
/src
  /components     # Reusable UI components (Navbar, Footer, etc.)
  /sections       # Main page sections (Hero, About, Projects, etc.)
  /data           # Centralized content and data files
  /styles         # Global CSS and Tailwind configuration
  /hooks          # Custom React hooks
App.jsx           # Main application entry point
main.jsx          # React DOM rendering
```

## ⚙️ Environment Variables
Create a `.env` file in the root directory:
```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

## 🛠 Setup & Launch
1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run in development mode:
   ```bash
   npm run dev
   ```
4. Build for production:
   ```bash
   npm run build
   ```

## ☁️ Deployment
For detailed AWS deployment instructions, see [AWS_DEPLOYMENT.md](file:///c:/Users/cssac/Downloads/DevOps/docs/AWS_DEPLOYMENT.md).

## 📄 License
MIT License - Copyright (c) 2026 Sachin C S
