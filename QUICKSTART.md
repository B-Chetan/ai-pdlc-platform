# Quick Start Guide

## Prerequisites
- **Node.js** 18+ ([Download](https://nodejs.org/))
- **npm** or **yarn**
- Git

## Installation & Running Locally

### 1. Clone the Repository
```bash
git clone https://github.com/B-Chetan/ai-pdlc-platform.git
cd ai-pdlc-platform
```

### 2. Install Dependencies
```bash
npm install
# or
yarn install
```

### 3. Run Development Server
```bash
npm run dev
# or
yarn dev
```

### 4. Open in Browser
Visit [http://localhost:3000](http://localhost:3000)

You should see the AI-PDLC Platform dashboard with:
- Hero section with platform overview
- Dashboard with workflow status
- 5 AI Agents cards
- Integrated tools sections
- System architecture diagrams
- Demo use case (Soil Moisture Sensor)

## Building for Production

### Build
```bash
npm run build
```

### Start Production Server
```bash
npm run start
```

## Using Docker

### Build Docker Image
```bash
docker build -t ai-pdlc-platform .
```

### Run Docker Container
```bash
docker run -p 3000:3000 ai-pdlc-platform
```

### Using Docker Compose
```bash
docker-compose up
```

Access the application at [http://localhost:3000](http://localhost:3000)

## Project Structure

```
ai-pdlc-platform/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout
│   │   ├── page.tsx            # Main dashboard page
│   │   └── globals.css         # Global styles
│   ├── components/
│   │   ├── Common/
│   │   │   ├── Header.tsx      # Navigation header
│   │   │   └── Footer.tsx      # Footer component
│   │   ├── Dashboard/
│   │   │   ├── WorkflowStatus.tsx  # Status pie chart
│   │   │   └── RecentActivity.tsx  # Activity feed
│   │   ├── Agents/
│   │   │   └── AgentCard.tsx   # Individual agent card
│   │   ├── Tools/
│   │   │   ├── ToolButton.tsx      # Single tool button
│   │   │   └── ToolsSection.tsx    # Tools category section
│   │   └── Workflow/
│   │       ├── WorkflowDiagram.tsx     # 5-stage workflow
│   │       └── ArchitectureDiagram.tsx # System architecture
│   ├── data/
│   │   ├── agents.ts           # Agent definitions
│   │   ├── tools.ts            # Tool definitions
│   │   └── workflow.ts         # Workflow data
│   └── styles/
│       └── globals.css         # Custom styles
├── public/                     # Static assets
├── package.json               # Dependencies
├── tsconfig.json              # TypeScript config
├── tailwind.config.ts         # Tailwind configuration
├── next.config.js             # Next.js configuration
├── Dockerfile                 # Docker configuration
├── docker-compose.yml         # Docker Compose
└── README.md                  # Project documentation
```

## Key Technologies

- **Framework**: Next.js 14 (React 18)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Charts**: Recharts
- **Icons**: React Icons & Lucide React
- **Animations**: Framer Motion
- **Containerization**: Docker

## Features Included

✅ **Responsive Dashboard** - Works on desktop, tablet, and mobile
✅ **5 AI Agents** - Requirement, Design, Simulation, Review, Orchestration
✅ **10+ Integrated Tools** - MATLAB, ANSYS, LTspice, SonarQube, GitHub, Jenkins, etc.
✅ **Workflow Visualization** - 5-stage PDLC process diagram
✅ **System Architecture** - Component and data flow diagrams
✅ **Demo Use Case** - Soil Moisture Sensor + Pump Controller example
✅ **Glass Morphism UI** - Modern aesthetic with animations
✅ **Dark Theme** - Easy on the eyes for engineering work

## Customization

### Adding New Agents
Edit `src/data/agents.ts`:
```typescript
export const agents: Agent[] = [
  {
    id: 'new-agent',
    name: 'New Agent',
    icon: '📌',
    description: 'Description',
    color: 'from-color-600 to-color-900',
    responsibilities: [...],
    tools: [...],
    status: 'idle',
    stage: 6,
  },
];
```

### Adding New Tools
Edit `src/data/tools.ts`:
```typescript
export const tools: Tool[] = [
  {
    id: 'new-tool',
    name: 'New Tool',
    category: 'simulation', // or 'review', 'orchestration'
    icon: '🔧',
    description: 'Description',
    link: 'https://example.com',
    color: 'from-color-500 to-color-700',
    isExternal: true,
  },
];
```

### Styling
- Colors are defined in `tailwind.config.ts`
- Global styles in `src/styles/globals.css`
- Component-specific styles use Tailwind classes

## Troubleshooting

### Port 3000 Already in Use
```bash
# Specify different port
NPM_PORT=3001 npm run dev
```

### Dependencies Not Installing
```bash
rm -rf node_modules package-lock.json
npm install
```

### Build Errors
```bash
npm run lint
# Check TypeScript errors
```

## Deployment Options

### Vercel (Recommended)
1. Push to GitHub
2. Go to [Vercel](https://vercel.com)
3. Connect your GitHub repository
4. Deploy with one click

### Other Platforms
- **Netlify**: Supports Next.js
- **AWS**: Using EC2 or ECS
- **Google Cloud**: Cloud Run or App Engine
- **Azure**: App Service

## Environment Variables

Create a `.env.local` file if needed:
```bash
NEXT_PUBLIC_API_URL=http://localhost:3000
```

## Support & Documentation

- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [React Docs](https://react.dev)
- [TypeScript Docs](https://www.typescriptlang.org/docs/)

## License

MIT License - Feel free to use this project for personal or commercial purposes.

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines.

## Questions?

Open an issue on GitHub or reach out to the team!
