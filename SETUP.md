# AI-PDLC Platform - Project Setup & Run Guide

## Quick Start

### Prerequisites
- Node.js 18 or higher
- npm or yarn
- Git
- Docker (optional)

### Installation

```bash
# Clone the repository
git clone https://github.com/B-Chetan/ai-pdlc-platform.git
cd ai-pdlc-platform

# Install dependencies
npm install

# Run development server
npm run dev

# Open browser
# Navigate to http://localhost:3000
```

## Available Scripts

```bash
# Development
npm run dev         # Start dev server (localhost:3000)

# Production
npm run build       # Build optimized production bundle
npm run start       # Start production server

# Quality
npm run lint        # Run ESLint

# Testing (future)
npm run test        # Run tests
```

## Docker Setup

### Build and Run with Docker

```bash
# Build image
docker build -t ai-pdlc-platform:latest .

# Run container
docker run -p 3000:3000 ai-pdlc-platform:latest

# Or use Docker Compose
docker-compose up -d

# View logs
docker logs -f ai-pdlc-platform

# Stop container
docker-compose down
```

## Project Structure

```
ai-pdlc-platform/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout
│   │   ├── page.tsx            # Home page
│   │   └── globals.css         # Global styles
│   ├── components/
│   │   ├── Dashboard/          # Dashboard components
│   │   ├── Agents/             # Agent components
│   │   ├── Tools/              # Tool components
│   │   ├── Workflow/           # Workflow components
│   │   └── Common/             # Shared components
│   ├── data/
│   │   ├── agents.ts           # Agent data
│   │   ├── tools.ts            # Tool data
│   │   └── workflow.ts         # Workflow data
│   └── styles/
│       └── globals.css         # Global styling
├── public/                     # Static assets
├── package.json
├── tsconfig.json
├── tailwind.config.ts
├── next.config.js
├── Dockerfile
├── docker-compose.yml
├── README.md
├── ARCHITECTURE.md
├── DESIGN.md
├── DEPLOYMENT.md
└── CONTRIBUTING.md
```

## Customization

### Adding New Agents

1. Update `src/data/agents.ts`:
```typescript
export const agents: Agent[] = [
  {
    id: 'new-agent',
    name: 'New Agent',
    // ... other properties
  },
];
```

2. Update `src/components/Agents/AgentCard.tsx` if needed

### Adding New Tools

1. Update `src/data/tools.ts`:
```typescript
export const tools: Tool[] = [
  {
    id: 'new-tool',
    name: 'New Tool',
    category: 'simulation',
    // ... other properties
  },
];
```

### Modifying Colors

Edit `tailwind.config.ts`:
```typescript
theme: {
  extend: {
    colors: {
      'custom-color': '#hexcode',
    },
  },
},
```

## Troubleshooting

### Port 3000 Already in Use
```bash
# Kill process on port 3000
lsof -ti:3000 | xargs kill -9

# Or specify different port
npm run dev -- -p 3001
```

### Node Modules Issues
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

### TypeScript Errors
```bash
# Type checking
npx tsc --noEmit
```

## Environment Setup

No environment variables required for basic setup.

Future API integration example:
```bash
# .env.local
NEXT_PUBLIC_API_URL=http://localhost:8000
NEXT_PUBLIC_GITHUB_API_TOKEN=your_token
```

## Performance Optimization

- Images are optimized by Next.js
- Code splitting is automatic
- CSS is minified by Tailwind
- Components use React.memo for optimization

## Security

- TypeScript for type safety
- No sensitive data in frontend
- XSS protection via React
- CSRF tokens for future POST requests

## Browser Support

- Chrome/Edge (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Next Steps

1. ✅ Start development server
2. 📝 Customize components and data
3. 🚀 Deploy to Vercel or Docker
4. 🔌 Integrate backend APIs
5. 🧪 Add testing suite
6. 📊 Implement analytics
