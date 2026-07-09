# Step-by-Step Guide: Running AI-PDLC Platform Locally

## Complete Beginner-Friendly Tutorial

---

## Prerequisites (What You Need First)

Before starting, make sure you have:

1. **Node.js installed** (includes npm)
   - Download from: https://nodejs.org/
   - Choose "LTS" (Long Term Support) version
   - Version 18 or higher recommended

2. **A Code Editor** (optional but helpful)
   - VS Code: https://code.visualstudio.com/
   - Sublime Text, Atom, or any text editor

3. **Git installed** (for cloning)
   - Download from: https://git-scm.com/
   - Or use GitHub Desktop for GUI

4. **A Terminal/Command Prompt**
   - Windows: CMD or PowerShell
   - Mac/Linux: Terminal

---

## Step 1: Check Prerequisites

### Verify Node.js & npm Installation

**On Windows (CMD or PowerShell):**
```bash
node --version
npm --version
```

**On Mac/Linux (Terminal):**
```bash
node --version
npm --version
```

**Expected Output:**
```
v18.17.0  (Node version)
9.6.7     (npm version)
```

If you see version numbers, you're ready! ✅
If you see "command not found", install Node.js from https://nodejs.org/

---

## Step 2: Clone the Repository

### What is Cloning?
Cloning means downloading the entire project from GitHub to your computer.

### Method 1: Using Command Line (Recommended)

**Step 2.1: Open Terminal/Command Prompt**

- **Windows:** 
  - Press `Win + R`
  - Type `cmd`
  - Press Enter

- **Mac:**
  - Press `Cmd + Space`
  - Type `terminal`
  - Press Enter

- **Linux:**
  - Right-click on desktop → Open Terminal
  - Or press `Ctrl + Alt + T`

**Step 2.2: Navigate to Where You Want the Project**

```bash
# Go to your Desktop or Documents folder
# Windows:
cd Desktop

# Mac/Linux:
cd ~/Desktop
```

**Step 2.3: Clone the Repository**

```bash
git clone https://github.com/B-Chetan/ai-pdlc-platform.git
```

**What happens:**
```
Cloning into 'ai-pdlc-platform'...
remote: Counting objects: 100% (50/50)
remote: Compressing objects: 100% (40/40)
remote: Receiving objects: 100% (50/50)
receiving objects: 100% (50/50), 250.00 KiB | 500 KiB/s
Receiving objects: 100% (50/50), done.
```

✅ **Repository is now on your computer!**

### Method 2: Using GitHub Desktop (Visual Alternative)

1. Install GitHub Desktop from https://desktop.github.com/
2. Click "File" → "Clone Repository"
3. Paste: `https://github.com/B-Chetan/ai-pdlc-platform.git`
4. Choose where to save
5. Click "Clone"

---

## Step 3: Enter the Project Directory

**Step 3.1: Navigate into the project folder**

```bash
cd ai-pdlc-platform
```

**Step 3.2: Verify you're in the right place**

```bash
# List files in the directory
ls    # Mac/Linux
dir   # Windows
```

**Expected files you should see:**
```
src/
public/
package.json
tailwind.config.ts
tsconfig.json
DOCKERFILE
...
```

✅ **You're now in the project directory!**

---

## Step 4: Install Dependencies

### What are Dependencies?
Dependencies are external libraries and packages that the project needs to run. They're listed in `package.json`.

**Step 4.1: Run npm install**

```bash
npm install
```

**This command:**
- Reads `package.json` file
- Downloads all required packages
- Creates `node_modules/` folder
- Generates `package-lock.json` file

**Expected output:**
```
up to date, audited 250 packages in 5s
25 packages are looking for funding
run `npm fund` for details
```

**Time:** ~2-5 minutes (depends on internet speed)

⏳ **Wait while npm installs packages...**

✅ **Dependencies installed successfully!**

### Packages Being Installed:

```
next          - React framework for web apps
react         - UI library
tailwindcss   - CSS styling
typescript    - JavaScript with types
lucide-react  - Icons library
recharts      - Charts library
framer-motion - Animations
```

---

## Step 5: Start the Development Server

### What is a Development Server?
It's a local web server on your computer that serves your website for testing.

**Step 5.1: Run the development server**

```bash
npm run dev
```

**Expected output:**
```
> next dev

  ▲ Next.js 14.0.0
  - Local:        http://localhost:3000
  - Environments: .env.local

✓ Ready in 2.5s
```

✅ **Development server is running!**

### Important Notes:
- The server is now running locally
- DO NOT close the terminal (this keeps the server running)
- To stop the server later: Press `Ctrl + C`

---

## Step 6: Open in Your Browser

**Step 6.1: Open your web browser**
- Chrome, Firefox, Safari, Edge - any browser works

**Step 6.2: Visit the local website**

Click this link or type in address bar:
```
http://localhost:3000
```

**Or copy-paste this:**
```
localhost:3000
```

✅ **Website is now open! You should see:**

```
┌─────────────────────────────────────────────┐
│                                             │
│   🧠 AI-PDLC Platform                      │
│   ─────────────────────────                │
│                                             │
│   Hero Section with title                  │
│   Navigation menu at top                   │
│   Multiple sections below                  │
│   Beautiful dark theme                     │
│                                             │
└─────────────────────────────────────────────┘
```

---

## Step 7: Explore the Website

### What to See:

1. **Header/Navigation** 🧭
   - Logo and branding
   - Navigation links
   - Get Started button

2. **Hero Section** 🎯
   - Main title
   - Description
   - Call-to-action buttons

3. **Features Section** ⭐
   - 4 key features
   - Colorful cards

4. **Dashboard Preview** 📊
   - Workflow status chart
   - Recent activity list

5. **Workflow Diagram** 🔄
   - 5-stage PDLC process
   - Visual flow

6. **AI Agents Section** 🤖
   - 5 agent cards
   - Agent details

7. **Tools Section** 🔧
   - Integration tools
   - Categorized buttons

8. **Architecture Section** 🏗️
   - System design
   - Data flow

9. **Demo Use Case** 💡
   - Soil Moisture Sensor example
   - Complete workflow

10. **Footer** 👇
    - Links
    - Social media

---

## Step 8: Testing the Website

### Interactive Features to Try:

1. **Scroll through the page**
   - Notice smooth animations
   - Responsive design

2. **Hover over buttons**
   - See color changes
   - Watch animations

3. **Click links**
   - Navigate sections
   - Test responsiveness

4. **Resize browser window**
   - Watch mobile responsiveness
   - Breakpoints at different sizes

---

## Step 9: Making Changes (Optional)

### Edit the Website

**Step 9.1: Open code editor**
- Open VS Code or your editor
- Open the project folder: `ai-pdlc-platform`

**Step 9.2: Edit a file**
- Open: `src/app/page.tsx`
- Find: `<h1 className="text-5xl md:text-7xl">...`
- Change text

**Step 9.3: Save the file**
- Press `Ctrl + S`
- Browser automatically refreshes! (Hot reload)
- See changes instantly

---

## Step 10: Stop the Server

### When You're Done:

**In the terminal where server is running:**

```bash
Ctrl + C
```

**Expected output:**
```
^C

(Terminal goes back to normal)
```

✅ **Server is stopped!**

---

## Troubleshooting Common Issues

### Issue 1: "npm: command not found"

**Solution:**
- Install Node.js from https://nodejs.org/
- Restart your computer
- Try again

### Issue 2: "Port 3000 already in use"

**Solution:**
```bash
# Use different port
PORT=3001 npm run dev

# Then visit: http://localhost:3001
```

### Issue 3: "Module not found"

**Solution:**
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
npm run dev
```

### Issue 4: "Git is not recognized"

**Solution:**
- Install Git from https://git-scm.com/
- Restart terminal
- Try cloning again

### Issue 5: Website doesn't load

**Solution:**
- Make sure terminal is showing "Ready in..."
- Check URL is: `http://localhost:3000`
- Hard refresh: `Ctrl + Shift + R`
- Check for errors in terminal

---

## Complete Command Reference

### Basic Commands:

```bash
# Clone repository
git clone https://github.com/B-Chetan/ai-pdlc-platform.git

# Enter directory
cd ai-pdlc-platform

# Install dependencies
npm install

# Start development server
npm run dev

# Stop server
Ctrl + C

# Build for production
npm run build

# Start production server
npm run start

# Run linting
npm run lint
```

---

## File Structure Explanation

```
ai-pdlc-platform/
├── src/
│   ├── app/
│   │   ├── layout.tsx        ← Main page layout
│   │   ├── page.tsx          ← Homepage (what you see)
│   │   ├── globals.css       ← Global styles
│   │   └── jokes/            ← Joke generator pages
│   │
│   ├── components/           ← Reusable React components
│   │   ├── Common/           ← Header, Footer
│   │   ├── Dashboard/        ← Charts, Activity
│   │   ├── Agents/           ← Agent cards
│   │   ├── Tools/            ← Tool buttons
│   │   └── Workflow/         ← Diagrams
│   │
│   ├── data/                 ← Static data
│   │   ├── agents.ts         ← Agent definitions
│   │   ├── tools.ts          ← Tool definitions
│   │   └── workflow.ts       ← Workflow data
│   │
│   └── styles/
│       └── globals.css       ← Custom styles
│
├── public/                   ← Static files (images, etc.)
├── package.json              ← Dependencies & scripts
├── tsconfig.json             ← TypeScript config
├── tailwind.config.ts        ← Tailwind CSS config
├── next.config.js            ← Next.js config
├── Dockerfile                ← Docker setup
└── README.md                 ← Documentation
```

---

## What Happens Behind the Scenes

### When You Run `npm install`:

```
1. npm reads package.json
2. Downloads packages from npm registry
3. Saves to node_modules/ folder
4. Verifies dependencies
5. Creates package-lock.json
```

### When You Run `npm run dev`:

```
1. Starts Next.js development server
2. Compiles TypeScript to JavaScript
3. Loads Tailwind CSS
4. Sets up hot reload (auto-refresh)
5. Listens on http://localhost:3000
```

### When You Visit http://localhost:3000:

```
1. Browser requests from http://localhost:3000
2. Next.js server processes request
3. React renders components
4. CSS is applied
5. Page loads in browser
```

---

## Next Steps After Setup

### 1. **Explore the Code**
   - Open `src/app/page.tsx`
   - See React components
   - Understand structure

### 2. **Make Changes**
   - Edit colors in `tailwind.config.ts`
   - Change text content
   - Add new sections

### 3. **Build for Production**
   ```bash
   npm run build
   npm run start
   ```

### 4. **Deploy Online**
   - Push to GitHub
   - Connect to Vercel
   - Auto-deploy on push

### 5. **Add Features**
   - Create new pages
   - Add API endpoints
   - Integrate databases

---

## Quick Reference: Common Tasks

| Task | Command | Time |
|------|---------|------|
| First setup | `npm install && npm run dev` | 2-5 min |
| Start again | `npm run dev` | 2-3 sec |
| Stop server | `Ctrl + C` | Instant |
| Build prod | `npm run build` | 30-60 sec |
| Update code | Save file | Auto-refresh |
| Check errors | Look at terminal | Real-time |

---

## System Requirements

### Minimum:
- **CPU:** Dual-core processor
- **RAM:** 2GB
- **Disk:** 500MB free space
- **Internet:** Required for first setup

### Recommended:
- **CPU:** Quad-core processor
- **RAM:** 4GB+
- **Disk:** 1GB+ free space
- **Internet:** For npm packages

---

## Additional Resources

### Learning Resources:
- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [npm Documentation](https://docs.npmjs.com/)

### Getting Help:
- Check terminal for error messages
- Read the error carefully
- Search the error on Google/Stack Overflow
- Check GitHub Issues
- Ask in communities

---

## Video Tutorial Summary

If you prefer video, this is what each step does:

1. **Prerequisites** (0:00) - Install Node.js
2. **Clone** (1:00) - Download project
3. **Navigate** (1:30) - Enter folder
4. **Install** (2:00) - npm install (takes 2-5 min)
5. **Start Server** (7:00) - npm run dev
6. **Open Browser** (7:30) - localhost:3000
7. **Explore** (7:45) - See website
8. **Edit Code** (8:30) - Make changes
9. **Test** (9:00) - See live updates
10. **Stop** (9:30) - Ctrl + C

---

## Congratulations! 🎉

You've successfully:
- ✅ Set up the project
- ✅ Installed dependencies
- ✅ Started development server
- ✅ Viewed website locally
- ✅ Understand the structure

### You're ready to:
- 🚀 Make changes to the code
- 🎨 Customize the website
- 📱 Test on different devices
- 🌐 Deploy to the internet
- 📚 Learn more about Next.js/React

---

## Summary

```
1. npm install
   └─ Downloads all packages needed

2. npm run dev
   └─ Starts local web server

3. http://localhost:3000
   └─ Visit in browser to see website

4. Make changes
   └─ Browser auto-refreshes

5. Ctrl + C
   └─ Stop when done
```

**That's it! You're now a web developer! 🚀**

Enjoy building! 💻✨
