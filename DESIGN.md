# System Design Document

## Component Overview

### Frontend Components

```typescript
// Dashboard Components
- Dashboard/
  ├── WorkflowStatus.tsx      // Workflow completion chart
  ├── RecentActivity.tsx      // Activity log display
  └── StatsCard.tsx           // Metric cards

// Agent Components
- Agents/
  ├── AgentCard.tsx           // Individual agent display
  ├── AgentStatus.tsx         // Status indicator
  └── AgentTimeline.tsx       // Workflow timeline

// Tool Components
- Tools/
  ├── ToolButton.tsx          // Tool launcher button
  ├── ToolsSection.tsx        // Grouped tool display
  └── ToolIntegration.tsx     // Integration status

// Workflow Components
- Workflow/
  ├── WorkflowDiagram.tsx     // Visual workflow
  ├── ArchitectureDiagram.tsx // System architecture
  └── ProcessFlow.tsx         // Step-by-step flow

// Common Components
- Common/
  ├── Header.tsx              // Navigation header
  ├── Footer.tsx              // Footer section
  ├── Button.tsx              // Custom buttons
  └── Modal.tsx               // Modal dialogs
```

### Data Models

```typescript
// Agent Model
interface Agent {
  id: string;
  name: string;
  icon: string;
  description: string;
  color: string;
  responsibilities: string[];
  tools: string[];
  status: 'idle' | 'active' | 'completed' | 'error';
  stage: number;
}

// Tool Model
interface Tool {
  id: string;
  name: string;
  category: 'simulation' | 'review' | 'orchestration';
  icon: string;
  description: string;
  link: string;
  color: string;
  isExternal: boolean;
}

// Workflow Activity Model
interface WorkflowActivity {
  id: string;
  title: string;
  timestamp: string;
  status: 'success' | 'warning' | 'error' | 'info';
  agent: string;
  details?: string;
  icon: string;
}
```

## API Endpoints (Future Implementation)

```
GET    /api/agents              # List all agents
GET    /api/agents/:id          # Get agent details
GET    /api/tools               # List all tools
GET    /api/workflow/status     # Get workflow status
GET    /api/workflow/activities # Get recent activities
POST   /api/workflow/start      # Start new workflow
GET    /api/projects            # List projects
POST   /api/projects            # Create new project
GET    /api/reports             # Get reports
```

## Styling System

```
COLOR PALETTE:
- Primary Dark: #0f172a
- Primary Light: #1e293b
- Accent Orange: #f97316
- Accent Blue: #0ea5e9
- Accent Cyan: #06b6d4
- Accent Purple: #a855f7
- Success Green: #22c55e
- Warning Yellow: #eab308
- Danger Red: #ef4444

TYPOGRAPHY:
- Font Family: System fonts
- Headings: Bold
- Body: Regular
- Captions: Light

SPACING:
- Base unit: 4px (tw-1)
- Common: 4px, 8px, 12px, 16px, 24px, 32px

BREAKPOINTS:
- sm: 640px
- md: 768px
- lg: 1024px
- xl: 1280px
- 2xl: 1536px
```

## State Management (Future)

```typescript
// Recommended: Redux or Zustand
store/
├── slices/
│   ├── agents.ts
│   ├── workflow.ts
│   ├── tools.ts
│   └── ui.ts
├── hooks/
│   └── useStore.ts
└── types/
    └── store.ts
```
