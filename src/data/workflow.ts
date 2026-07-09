export interface WorkflowActivity {
  id: string;
  title: string;
  timestamp: string;
  status: 'success' | 'warning' | 'error' | 'info';
  agent: string;
  details?: string;
  icon: string;
}

export const recentActivities: WorkflowActivity[] = [
  {
    id: '1',
    title: 'Requirements extracted successfully',
    timestamp: '10:30 AM',
    status: 'success',
    agent: 'Requirement Agent',
    details: 'Automotive Brake Control System',
    icon: '📋',
  },
  {
    id: '2',
    title: 'Design artifacts generated',
    timestamp: '10:45 AM',
    status: 'success',
    agent: 'Design Agent',
    details: 'Block Diagram, HLD, LLD',
    icon: '🎨',
  },
  {
    id: '3',
    title: 'Simulation completed (MATLAB)',
    timestamp: '11:15 AM',
    status: 'success',
    agent: 'Simulation Agent',
    details: 'Model: Brake_Control.slx',
    icon: '📊',
  },
  {
    id: '4',
    title: 'Code analysis completed (SonarQube)',
    timestamp: '11:35 AM',
    status: 'warning',
    agent: 'Review Agent',
    details: 'Issues: 2, Vulnerabilities: 0',
    icon: '⚠️',
  },
  {
    id: '5',
    title: 'Workflow orchestration completed',
    timestamp: '11:50 AM',
    status: 'success',
    agent: 'Orchestration Agent',
    details: 'Subsystem ready for implementation',
    icon: '✅',
  },
];

export const workflowStats = {
  completed: 78,
  inProgress: 15,
  pending: 7,
  completionRate: 78,
};
