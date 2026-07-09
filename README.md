# AI-Driven Product Development Life Cycle (PDLC) Platform

## Overview
An intelligent, multi-agent AI system for autonomous orchestration of subsystem design, simulation, and review throughout the PDLC.

## Features
- **5 Specialized AI Agents**: Requirement, Design, Simulation, Review, Orchestration
- **Multi-Tool Integration**: MATLAB, ANSYS, LTspice, Proteus, CANoe, SonarQube, GitHub, Jenkins
- **Automated Workflow**: Complete PDLC automation from requirements to implementation
- **Real-time Dashboard**: Monitor workflow status and recent activities
- **Compliance-First**: Built-in safety and standards validation

## Tech Stack
- **Frontend**: Next.js 14, React 18, TypeScript, Tailwind CSS
- **Charts**: Recharts for data visualization
- **Animations**: Framer Motion for smooth interactions
- **Icons**: React Icons & Lucide React

## Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation
```bash
npm install
```

### Development
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) to view in browser.

### Build
```bash
npm run build
npm run start
```

## Project Structure
```
src/
├── app/
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── Dashboard/
│   ├── Workflow/
│   ├── Agents/
│   ├── Tools/
│   └── Common/
├── data/
│   ├── agents.ts
│   ├── tools.ts
│   └── workflow.ts
└── styles/
    └── globals.css
```

## License
MIT
