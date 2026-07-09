# Architecture Reference

## System Overview

```
┌─────────────────────────────────────────────────────────────────┐
│                     AI-PDLC Platform                            │
│                                                                 │
│  ┌────────────────────────────────────────────────────────┐   │
│  │           User Interface (React/Next.js)              │   │
│  │  - Dashboard  - Agents  - Tools  - Workflow           │   │
│  └────────────────────────────────────────────────────────┘   │
│                            ↓                                    │
│  ┌────────────────────────────────────────────────────────┐   │
│  │        AI Agent Orchestration Layer                   │   │
│  │  ┌──────────────┐  ┌──────────────┐  ┌───────────┐  │   │
│  │  │ Requirement  │  │   Design     │  │Simulation │  │   │
│  │  │    Agent     │→ │    Agent     │→ │  Agent    │→ │   │
│  │  └──────────────┘  └──────────────┘  └───────────┘  │   │
│  │                           ↓                           │   │
│  │                   ┌──────────────────┐              │   │
│  │                   │  Review Agent    │              │   │
│  │                   └──────────────────┘              │   │
│  │                           ↓                           │   │
│  │              ┌────────────────────────┐             │   │
│  │              │ Orchestration Agent    │             │   │
│  │              └────────────────────────┘             │   │
│  └────────────────────────────────────────────────────────┘   │
│                            ↓                                    │
│  ┌────────────────────────────────────────────────────────┐   │
│  │         Tool Integration Layer                        │   │
│  │  Simulation: MATLAB, ANSYS, LTspice, Proteus, CANoe  │   │
│  │  Review: SonarQube, MISRA-C, Checkpath               │   │
│  │  Orchestration: Jenkins, GitHub, Docker              │   │
│  └────────────────────────────────────────────────────────┘   │
│                            ↓                                    │
│  ┌────────────────────────────────────────────────────────┐   │
│  │          Data & Knowledge Management                  │   │
│  │  - Requirements Database                              │   │
│  │  - Design Repository                                  │   │
│  │  - Simulation Results                                 │   │
│  │  - Standards & References                             │   │
│  └────────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────────┘
```

## Agent Workflow

```
Input (User Specifications + Standards)
         ↓
    ┌────────────────────────────┐
    │  1. REQUIREMENT AGENT      │
    │  Analyze & Extract         │
    │  Requirements              │
    └────────────────────────────┘
         ↓
    ┌────────────────────────────┐
    │  2. DESIGN AGENT           │
    │  Generate HLD/LLD          │
    │  & Design Artifacts        │
    └────────────────────────────┘
         ↓
    ┌────────────────────────────┐
    │  3. SIMULATION AGENT       │
    │  Run Simulations           │
    │  Predict Performance       │
    └────────────────────────────┘
         ↓
    ┌────────────────────────────┐
    │  4. REVIEW AGENT           │
    │  Validate & Check          │
    │  Compliance                │
    └────────────────────────────┘
         ↓
    ┌─────────────────────────────────────┐
    │  5. ORCHESTRATION AGENT             │
    │  Coordinates & Manages Iterations   │
    └─────────────────────────────────────┘
         ↓
    Final Subsystem (Ready for Implementation)
```

## Data Flow

```
┌──────────────────┐
│  Requirements    │
│  Specifications  │
└────────┬─────────┘
         │
         ↓
    ┌──────────────┐
    │ Requirement  │
    │   Analysis   │
    └──────┬───────┘
           │
           ↓
      ┌──────────────┐
      │  Design      │
      │ Generation   │
      └──────┬───────┘
             │
             ↓
        ┌──────────────┐
        │ Simulation   │
        │  & Testing   │
        └──────┬───────┘
               │
               ↓
          ┌──────────────┐
          │ Review &     │
          │ Validation   │
          └──────┬───────┘
                 │
         ┌───────┴────────┐
         │                │
         ↓                ↓
    PASS?            Issues Found?
    YES              ↓ ITERATE
    ↓                │
    ┌────────────────┴────────────┐
    │ Orchestration & Refinement  │
    └────────────────┬────────────┘
                     │
                     ↓
        FINAL SUBSYSTEM READY
```

## Communication Protocol

```
┌─────────────────────────────────────────────────────────┐
│            Agent Communication Layer                   │
├─────────────────────────────────────────────────────────┤
│                                                         │
│  Agent A ←→ Message Queue ←→ Agent B                  │
│                                                         │
│  Message Format:                                       │
│  {                                                     │
│    "id": "msg-uuid",                                  │
│    "from_agent": "requirement-agent",                │
│    "to_agent": "design-agent",                       │
│    "type": "requirement_output",                      │
│    "payload": { ... },                               │
│    "timestamp": "ISO-8601",                           │
│    "status": "pending|processing|completed"          │
│  }                                                     │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

## Tool Integration Points

```
┌─────────────────────────────────────────────────────────┐
│          External Tool Integration                     │
├─────────────────────────────────────────────────────────┤
│                                                         │
│  SIMULATION TOOLS:                                     │
│  ┌──────────┐  ┌────────┐  ┌───────┐  ┌────────┐    │
│  │ LTspice  │  │ MATLAB │  │ ANSYS │  │Proteus │    │
│  └──────────┘  └────────┘  └───────┘  └────────┘    │
│       ↑             ↑            ↑           ↑        │
│       └─────────────┴────────────┴───────────┘        │
│             Simulation Agent                           │
│                                                         │
│  REVIEW TOOLS:                                         │
│  ┌──────────┐  ┌─────────────┐  ┌──────────┐         │
│  │SonarQube │  │  MISRA-C    │  │Checkpath │         │
│  └──────────┘  └─────────────┘  └──────────┘         │
│       ↑              ↑                ↑                │
│       └──────────────┴────────────────┘                │
│          Review Agent                                  │
│                                                         │
│  ORCHESTRATION TOOLS:                                 │
│  ┌────────┐  ┌───────┐  ┌────────┐                   │
│  │Jenkins │  │GitHub │  │ Docker │                   │
│  └────────┘  └───────┘  └────────┘                   │
│       ↑           ↑          ↑                        │
│       └───────────┴──────────┘                        │
│      Orchestration Agent                               │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

## Demo Case: Soil Moisture Sensor System

```
REQUIREMENT:
  Input: Soil moisture < 30% → Activate pump
         Soil moisture ≥ 30% → Deactivate pump

DESIGN:
  ┌─────────────────────────────────────┐
  │     Soil Moisture Sensor            │
  │     (Analog Input)                  │
  └────────────┬────────────────────────┘
               │
               ↓
  ┌─────────────────────────────────────┐
  │  MCU (Microcontroller Unit)         │
  │  - ADC Conversion                   │
  │  - Threshold Comparison             │
  │  - Decision Logic                   │
  │  IF (ADC_VALUE < THRESHOLD)         │
  │    GPIO_HIGH(PUMP_PIN)              │
  │  ELSE                               │
  │    GPIO_LOW(PUMP_PIN)               │
  └────────────┬────────────────────────┘
               │
               ↓
  ┌─────────────────────────────────────┐
  │     Water Pump (Digital Output)     │
  │     (ON/OFF)                        │
  └─────────────────────────────────────┘

SIMULATION TEST CASE:
  moisture_level = 25%
  Expected: pump = ON ✓
  
REVIEW CHECKS:
  ✓ Safety: No electrical hazards
  ✓ Standards: Meets embedded system guidelines
  ✓ Compliance: Code review passed
  
OUTPUT:
  - Circuit Diagram (SCH)
  - PCB Layout (PCB)
  - Firmware Code (C)
  - Test Report (PDF)
  - BOM (CSV)
```

## Technology Stack

```
FRONTEND:
  ├── Framework: Next.js 14
  ├── Library: React 18
  ├── Language: TypeScript
  ├── Styling: Tailwind CSS
  ├── Charts: Recharts
  ├── Animations: Framer Motion
  └── Icons: Lucide React + React Icons

BACKEND (Future):
  ├── Framework: Node.js + Express/FastAPI
  ├── Database: PostgreSQL
  ├── Message Queue: RabbitMQ/Kafka
  ├── Orchestration: Docker + Kubernetes
  └── APIs: REST + GraphQL

DEPLOYMENT:
  ├── Containerization: Docker
  ├── Orchestration: Docker Compose
  ├── Cloud: Vercel / AWS / GCP
  └── CI/CD: GitHub Actions
```

## Performance Metrics

```
WORKFLOW METRICS:
  - Total PDLC Time: ~2-4 hours (vs 2-4 weeks manual)
  - Agent Processing Time: <5 min per stage
  - Tool Execution: Parallel processing
  - Iteration Cycles: Automated (no manual intervention)
  - Success Rate: >95% first-time design passes

COMPLIANCE CHECKS:
  - Safety Validation: 100% coverage
  - Standards Compliance: Automated verification
  - Code Quality: Real-time analysis
  - Risk Assessment: AI-powered prediction
```
