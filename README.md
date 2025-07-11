# William Gross - Personal Portfolio

A modern, responsive portfolio website built with React, TypeScript, and Vite.

## 🚀 Live Site
Visit: [williamgross.dev](https://williamgross.dev)

## 🛠️ Tech Stack
- **Frontend**: React 18 + TypeScript
- **Build Tool**: Vite
- **Styling**: Inline CSS with modern gradients and animations
- **Deployment**: Vercel
- **Domain**: williamgross.dev

## 📦 Local Development

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation
```bash
# Clone the repository
git clone <your-repo-url>
cd PersonalWebsite

# Install dependencies
npm install

# Start development server
npm run dev
```

The site will be available at `http://localhost:5173`

### Build for Production
```bash
npm run build
```

## 🌐 Deployment to Vercel

### Step 1: Push to GitHub
```bash
# Initialize git if not already done
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin <your-github-repo-url>
git push -u origin main
```

### Step 2: Deploy to Vercel
1. Go to [vercel.com](https://vercel.com) and sign in with your GitHub account
2. Click "New Project"
3. Import your GitHub repository
4. Vercel will automatically detect it's a Vite project
5. Click "Deploy"

### Step 3: Configure Custom Domain
1. In your Vercel dashboard, go to your project
2. Click on "Settings" → "Domains"
3. Add your domain: `williamgross.dev`
4. Vercel will provide DNS records to configure

### Step 4: Configure DNS (in Squarespace)
Since you bought the domain through Squarespace, you'll need to configure the DNS records:

1. Log into your Squarespace account
2. Go to "Settings" → "Domains"
3. Find `williamgross.dev` and click "DNS Settings"
4. Add these DNS records:

**A Record:**
- Name: `@`
- Value: `76.76.19.19`

**CNAME Record:**
- Name: `www`
- Value: `cname.vercel-dns.com`

**Additional A Records (for www subdomain):**
- Name: `www`
- Value: `76.76.19.19`

### Step 5: SSL Certificate
Vercel will automatically provision an SSL certificate for your domain once the DNS is properly configured.

## 🔧 Configuration Files

- `vercel.json` - Vercel deployment configuration
- `vite.config.ts` - Vite build configuration
- `tsconfig.json` - TypeScript configuration

## 📁 Project Structure
```
PersonalWebsite/
├── src/
│   ├── App.tsx          # Main application component
│   └── main.tsx         # Application entry point
├── public/              # Static assets
├── dist/                # Build output (generated)
├── vercel.json          # Vercel configuration
├── vite.config.ts       # Vite configuration
└── package.json         # Dependencies and scripts
```

## 🎨 Features
- Responsive design
- Smooth scrolling navigation
- Interactive hover effects
- Modern gradient backgrounds
- Contact information
- Social media links
- Project showcase

## 📞 Contact
- Email: william.gross.prof@gmail.com
- Phone: (816) 325-0933
- GitHub: [WilliamGrossKC](https://github.com/WilliamGrossKC)
- LinkedIn: [William Gross](https://www.linkedin.com/in/william-gross-42ab061a0/)

## 📄 License
This project is private and proprietary. 