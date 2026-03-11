# DummiStore Landing Page: API Showcase & Documentation

**A modern landing page for the DummiStore API, a free and developer-friendly product API that provides structured product data with simple endpoints and no authentication or API keys required.**

---

![Preview](https://i.postimg.cc/qM3NQZcL/dummistore-image.png)

---

## ✨ Features

### API Exploration
- **Product Listings:** View some of the available products from the DummiStore API
- **Product Details:** Retrieve product information by ID
- **Category Filtering:** Browse products by category
- **Live API Integration:** Fetch real-time data from the API endpoints

### Developer Experience
- **Interactive API Docs:** Built-in documentation for all API routes
- **Request Examples:** Ready-to-use API request URLs
- **Success & Error Responses:** Structured response previews
- **Smooth Navigation:** Scroll-based documentation navigation

### User Interface
- **Modern UI:** Clean dark theme built with Tailwind CSS
- **Responsive Layout:** Works seamlessly across desktop and mobile
- **Endpoint Highlighting:** Visual indicators for API routes
- **Code-style Responses:** Editor-style response blocks

### Performance & Architecture
- **Fast Build Tool:** Powered by Vite
- **Client Routing:** React Router for page navigation
- **Modular Components:** Clean reusable component structure
- **Lightweight State:** Efficient data fetching with hooks

---

## 🛠️ Tech Stack

### Frontend Architecture

| Category | Technology | Version |
|----------|-----------|---------|
| **Framework** | React.js | 19.x |
| **Routing** | React Router DOM | 6.x |
| **Styling** | Tailwind CSS | 3.x |
| **Build Tool** | Vite | 5.x |

### UI & Interaction

| Feature | Library |
|--------|--------|
| **Animations** | Framer Motion |
| **Styling** | Tailwind CSS |
| **Icons** | Lucide React / React Icons |

### Development Tools

| Tool | Purpose |
|-----|------|
| **ESLint** | Code linting |
| **Vite Dev Server** | Fast local development |

---

## 📋 Prerequisites

Before starting, ensure the following are installed:

```bash
Node.js (v18 or higher)
npm (v9 or higher)
Git

**Verify installation:**
```bash
node --version
npm --version
git --version
```

---

## 🚀 Installation & Setup

### 1. Clone the Repository

```bash
git clone https://github.com/Pranjal-Sahu21/products-api.git

```

### 2. Install Dependencies

```bash
npm install
```

### 3. Start the Development Server

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### 5. Build for Production

```bash
npm run build
```

The optimized build will be in the `dist/` directory.

---

## 📁 Project Structure

```
├── public/
|   └── favicon-dummistore.svg     # Favicon
│
├── src/
│   ├── assets/                    # Static assets
|   |   ├── api.js
|   |   └── api.png
|   |
|   ├── ui/                        # ui folder
|   |   └── 3d-marquee.jsx
│   │
│   ├── components/                # Reusable UI components
│   │   ├── About.jsx
│   │   ├── Features.jsx
│   │   ├── FAQSection.jsx
|   |   ├── Hero.jsx
│   │   ├── Navbar.jsx
|   |   ├── Products.jsx
│   │   └── Footer.jsx
│   │
|   ├── hooks/                     # Custom hooks
|   |   └── useScrollToSection.js
|   |
│   ├── pages/                     # Page components
│   │   ├── Home.jsx
│   │   └── Docs.jsx
|   |   └── NotFound.jsx
│   │
│   ├── App.jsx                    # Root component
│   ├── main.jsx                   # Entry point
│   └── index.css                  # Global styles
│
├── components.json
├── eslint.config.js
├── index.html
├── jsconfig.json
├── netlify.toml                   # Redirects
├── package-lock.json                
├── package.json                   
├── README.md                   
├── tailwind.config.js                   
└── vite.config.js                   
```

---

## 🎯 Available Scripts

### Development
```bash
npm run dev
```
Starts the Vite development server with hot module replacement (HMR).
Access at: `http://localhost:5173`

### Build
```bash
npm run build
```
Creates an optimized production build in the `dist/` folder.

### Preview
```bash
npm run preview
```
Preview the production build locally before deployment.

### Linting
```bash
npm run lint
```
Run ESLint to check code quality and identify issues.

---

## ⚙️ Configuration

### Vite Configuration
The project uses Vite with React and Tailwind CSS plugins configured in [vite.config.js](vite.config.js).

### ESLint
Code quality rules are defined in [eslint.config.js](eslint.config.js) with support for React and React Hooks.

### Tailwind CSS
Tailwind CSS is integrated via the `@tailwindcss/vite` plugin for optimal performance.

---

## 🚀 Deployment

### Netlify (Recommended)

The project is pre-configured for Netlify deployment with [netlify.toml](netlify.toml).

#### Automatic Deployment (Git Integration)

1. **Push to GitHub:**
   ```bash
   git push origin main
   ```

2. **Connect to Netlify:**
   - Go to [Netlify Dashboard](https://app.netlify.com)
   - Click "New site from Git"
   - Select GitHub and authorize
   - Choose your repository
   - Netlify automatically detects `package.json`

3. **Configure Build Settings:**
   - Build Command: `npm run build`
   - Publish Directory: `dist`

#### Manual Deployment

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Build the project
npm run build

# Deploy to Netlify
netlify deploy --prod --dir=dist
```

#### SPA Routing Configuration
The `netlify.toml` file enables SPA routing:
```toml
[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

