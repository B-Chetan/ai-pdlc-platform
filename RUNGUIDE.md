# Running AI-PDLC Platform - Complete Guide

## 🚀 Quick Start (5 minutes)

### Option 1: Run Locally with npm

```bash
# 1. Clone the repository
git clone https://github.com/B-Chetan/ai-pdlc-platform.git
cd ai-pdlc-platform

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev

# 4. Open in browser
# Visit: http://localhost:3000
```

✅ You should see the AI-PDLC Platform dashboard!

---

## 🐳 Option 2: Run with Docker

### Prerequisites
- Install [Docker](https://www.docker.com/products/docker-desktop)

### Steps

```bash
# 1. Clone the repository
git clone https://github.com/B-Chetan/ai-pdlc-platform.git
cd ai-pdlc-platform

# 2. Build Docker image
docker build -t ai-pdlc-platform .

# 3. Run container
docker run -p 3000:3000 ai-pdlc-platform

# 4. Open in browser
# Visit: http://localhost:3000
```

### Using Docker Compose (Simpler)

```bash
# From project directory
docker-compose up

# Open: http://localhost:3000
```

✅ Container is running!

---

## ☁️ Option 3: Deploy Online (Free)

### Deploy to Vercel (Easiest)

1. **Fork the repository on GitHub**
   - Go to https://github.com/B-Chetan/ai-pdlc-platform
   - Click "Fork" button

2. **Create Vercel Account**
   - Go to https://vercel.com
   - Click "Sign Up" (use GitHub)

3. **Deploy**
   - Click "New Project"
   - Select your forked repository
   - Click "Deploy"
   - Wait 2-3 minutes
   - Get your live URL! 🎉

**Result**: Your website is live on the internet!

### Alternative: Deploy to Netlify

1. Go to https://netlify.com
2. Click "Add new site" → "Import an existing project"
3. Connect your GitHub repository
4. Click "Deploy"
5. Get your live URL in ~2 minutes

---

## 📊 What You'll See

After running the project, the website includes:

### 1. **Hero Section**
- Eye-catching title and description
- "Get Started" call-to-action buttons

### 2. **Features Section**
- 4 key features with icons
- Multi-Agent AI
- Faster Cycles
- Compliance-First
- Scalable

### 3. **Dashboard Preview**
- Workflow Status pie chart (78% completed)
- Recent Activity feed with timestamps

### 4. **PDLC Workflow Diagram**
- 5-stage workflow visualization:
  1. Requirements 📋
  2. Design 🎨
  3. Simulation 📊
  4. Review ✅
  5. Iteration/Approval 🔄

### 5. **AI Agents Section**
- **Requirement Agent** 📋 - Extracts requirements
- **Design Agent** 🎨 - Generates designs
- **Simulation Agent** 📊 - Runs simulations
- **Review Agent** ✅ - Validates compliance
- **Orchestration Agent** 🔄 - Coordinates workflow

### 6. **Integrated Tools Section**

**Simulation Tools** 🎛️
- LTspice (Circuit simulation)
- MATLAB (Numerical computing)
- ANSYS (Engineering simulation)
- Proteus (Schematic capture)
- CANoe (CAN bus simulation)

**Review & Analysis Tools** 🔍
- SonarQube (Code quality)
- MISRA-C Checker (Compliance)
- Checkpath (Design verification)

**Orchestration Tools** ⚙️
- Jenkins (CI/CD)
- GitHub (Version control)
- Docker (Containerization)

### 7. **System Architecture**
- Component diagrams
- Data flow visualization

### 8. **Demo Use Case**
- Soil Moisture Sensor + Pump Controller example
- Shows full workflow process
- Block diagram

---

## 🔧 Production Build

### Build for Production

```bash
# Create optimized build
npm run build

# Start production server
npm run start
```

### Performance
- ⚡ Next.js optimized
- 🎯 Minimal bundle size
- 🚀 Fast page loads

---

## 📱 Browser Compatibility

✅ Works on:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

---

## 🎨 Customization

### Change Platform Name
Edit `src/components/Common/Header.tsx`
```tsx
<h1 className="text-xl font-bold gradient-text">Your Company Name</h1>
```

### Add More Agents
Edit `src/data/agents.ts`
```typescript
export const agents: Agent[] = [
  // Add your agents here
];
```

### Add More Tools
Edit `src/data/tools.ts`
```typescript
export const tools: Tool[] = [
  // Add your tools here
];
```

### Change Colors
Edit `tailwind.config.ts`
```typescript
colors: {
  'accent-orange': '#your-color',
  // More colors
}
```

---

## 📝 Project Structure

```
ai-pdlc-platform/
├── src/
│   ├── app/
│   │   ├── layout.tsx       # Main layout
│   │   ├── page.tsx         # Homepage
│   │   └── globals.css      # Global styles
│   ├── components/
│   │   ├── Common/          # Header, Footer
│   │   ├── Dashboard/       # Charts, Activity
│   │   ├── Agents/          # Agent cards
│   │   ├── Tools/           # Tool buttons
│   │   └── Workflow/        # Diagrams
│   ├── data/
│   │   ├── agents.ts        # Agent data
│   │   ├── tools.ts         # Tool data
│   │   └── workflow.ts      # Workflow data
│   └── styles/
│       └── globals.css      # Custom CSS
├── public/                  # Static files
├── Dockerfile               # Docker config
├── docker-compose.yml       # Docker Compose
├── package.json             # Dependencies
├── tsconfig.json            # TypeScript
├── tailwind.config.ts       # Tailwind
└── next.config.js           # Next.js
```

---

## 🚨 Troubleshooting

### Problem: "Port 3000 already in use"
```bash
# Use different port
PORT=3001 npm run dev
```

### Problem: "Module not found"
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Problem: "npm command not found"
- Install Node.js from https://nodejs.org/
- Restart terminal after installation

### Problem: Docker won't start
- Ensure Docker Desktop is running
- Check ports aren't blocked: `docker ps`

---

## 📊 Technology Stack

| Tech | Purpose |
|------|----------|
| **Next.js 14** | Web framework |
| **React 18** | UI library |
| **TypeScript** | Type safety |
| **Tailwind CSS** | Styling |
| **Recharts** | Charts/graphs |
| **Lucide React** | Icons |
| **Docker** | Containerization |

---

## 🌐 Live Demo Deployment

### Recommended: Vercel
1. Easiest setup
2. Free tier available
3. Automatic deployments on git push
4. Custom domains supported

### Steps:
```bash
# 1. Push to GitHub
git push origin main

# 2. Go to Vercel
# https://vercel.com

# 3. Import repository
# Select your ai-pdlc-platform repo

# 4. Deploy!
# Automatic deployment on push
```

---

## 📈 Performance Tips

- ✅ Uses Next.js for fast page loads
- ✅ Optimized images and assets
- ✅ Lazy loading components
- ✅ CSS modules for styling
- ✅ TypeScript for error prevention

---

## 🔐 Security

- ✅ No API keys exposed
- ✅ External links verified
- ✅ XSS protection via React
- ✅ CSRF tokens (when needed)

---

## 📞 Support

- GitHub Issues: Report bugs
- GitHub Discussions: Ask questions
- Check CONTRIBUTING.md for guidelines

---

## 📄 License

MIT License - Free for personal and commercial use

---

## ✨ Summary

**Quickest Way to Run (30 seconds):**
```bash
git clone https://github.com/B-Chetan/ai-pdlc-platform.git
cd ai-pdlc-platform
npm install
npm run dev
# Open http://localhost:3000
```

**Easiest Way to Deploy (5 minutes):**
1. Fork on GitHub
2. Connect to Vercel
3. Deploy
4. Share your live URL!

Enjoy your AI-PDLC Platform! 🚀
