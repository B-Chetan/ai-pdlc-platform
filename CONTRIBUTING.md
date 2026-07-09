# Contributing Guide

We welcome contributions! Please follow these steps:

## Setup
```bash
npm install
npm run dev
```

## Before Submitting
1. Create a new branch: `git checkout -b feature/your-feature`
2. Make your changes
3. Test thoroughly: `npm run dev`
4. Commit: `git commit -am 'Add your feature'`
5. Push: `git push origin feature/your-feature`
6. Create a Pull Request

## Code Style
- Use TypeScript
- Follow React best practices
- Use Tailwind CSS for styling
- Add proper TypeScript types

## Components
Place new components in appropriate folders:
- Dashboard components → `src/components/Dashboard/`
- Agent-related → `src/components/Agents/`
- Tool-related → `src/components/Tools/`
- Workflow-related → `src/components/Workflow/`
- Common components → `src/components/Common/`

## Commit Messages
Use clear, descriptive commit messages:
- `feat: Add new feature`
- `fix: Fix bug in component`
- `docs: Update documentation`
- `style: Format code`
