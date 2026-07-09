# Deployment Guide

## Deploy to Vercel

### Prerequisites
- Vercel account
- GitHub repository connected

### Steps
1. Go to [Vercel Dashboard](https://vercel.com)
2. Click "New Project"
3. Import the `ai-pdlc-platform` repository
4. Leave default settings and click "Deploy"

## Deploy to Docker

### Build Docker Image
```bash
docker build -t ai-pdlc-platform .
```

### Run Container
```bash
docker run -p 3000:3000 ai-pdlc-platform
```

## Environment Variables
None required for the basic setup. External tool links can be customized in `src/data/tools.ts`.
