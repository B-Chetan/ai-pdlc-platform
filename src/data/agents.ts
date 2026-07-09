export interface Agent {
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

export const agents: Agent[] = [
  {
    id: 'requirement-agent',
    name: 'Requirement Agent',
    icon: '📋',
    description: 'Extracts & analyzes subsystem requirements',
    color: 'from-purple-600 to-purple-900',
    responsibilities: [
      'Extract requirements from user specifications',
      'Analyze against industry standards',
      'Define subsystem parameters',
      'Generate requirement documentation',
    ],
    tools: ['GitHub', 'SonarQube'],
    status: 'completed',
    stage: 1,
  },
  {
    id: 'design-agent',
    name: 'Design Agent',
    icon: '🎨',
    description: 'Generates HLD/LLD diagrams and design artifacts',
    color: 'from-green-600 to-green-900',
    responsibilities: [
      'Generate High-Level Design (HLD)',
      'Generate Low-Level Design (LLD)',
      'Select appropriate components',
      'Produce code/design artifacts',
    ],
    tools: ['MATLAB', 'Proteus'],
    status: 'completed',
    stage: 2,
  },
  {
    id: 'simulation-agent',
    name: 'Simulation Agent',
    icon: '📊',
    description: 'Runs simulations to predict performance',
    color: 'from-orange-600 to-orange-900',
    responsibilities: [
      'Execute system simulations',
      'Predict performance metrics',
      'Identify potential failures',
      'Generate simulation reports',
    ],
    tools: ['LTspice', 'MATLAB', 'ANSYS', 'Proteus', 'CANoe'],
    status: 'active',
    stage: 3,
  },
  {
    id: 'review-agent',
    name: 'Review Agent',
    icon: '✅',
    description: 'Validates safety and compliance standards',
    color: 'from-blue-600 to-blue-900',
    responsibilities: [
      'Validate safety requirements',
      'Check compliance with standards',
      'Flag potential risks',
      'Review design issues',
    ],
    tools: ['SonarQube', 'MISRA-C Checker', 'Checkpath'],
    status: 'idle',
    stage: 4,
  },
  {
    id: 'orchestration-agent',
    name: 'Orchestration Agent',
    icon: '🔄',
    description: 'Coordinates agents and manages workflow',
    color: 'from-cyan-600 to-cyan-900',
    responsibilities: [
      'Coordinate all agents',
      'Manage workflow execution',
      'Handle iterations',
      'Ensure subsystem readiness',
    ],
    tools: ['Jenkins', 'GitHub', 'Docker'],
    status: 'idle',
    stage: 5,
  },
];
