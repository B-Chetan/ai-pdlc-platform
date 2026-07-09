export interface Tool {
  id: string;
  name: string;
  category: 'simulation' | 'review' | 'orchestration';
  icon: string;
  description: string;
  link: string;
  color: string;
  isExternal: boolean;
}

export const tools: Tool[] = [
  // Simulation Tools
  {
    id: 'ltspice',
    name: 'LTspice',
    category: 'simulation',
    icon: '⚡',
    description: 'Circuit simulation and analysis',
    link: 'https://www.analog.com/en/resources/design-tools-and-calculators/ltspice-simulator.html',
    color: 'from-red-500 to-red-700',
    isExternal: true,
  },
  {
    id: 'matlab',
    name: 'MATLAB',
    category: 'simulation',
    icon: '🧮',
    description: 'Numerical computing and visualization',
    link: 'https://www.mathworks.com/products/matlab.html',
    color: 'from-orange-500 to-orange-700',
    isExternal: true,
  },
  {
    id: 'ansys',
    name: 'ANSYS',
    category: 'simulation',
    icon: '🔬',
    description: 'Engineering simulation software',
    link: 'https://www.ansys.com/',
    color: 'from-yellow-500 to-yellow-700',
    isExternal: true,
  },
  {
    id: 'proteus',
    name: 'Proteus',
    category: 'simulation',
    icon: '🎯',
    description: 'Schematic capture and simulation',
    link: 'https://www.labcenter.com/proteus/',
    color: 'from-blue-500 to-blue-700',
    isExternal: true,
  },
  {
    id: 'canoe',
    name: 'CANoe',
    category: 'simulation',
    icon: '🚗',
    description: 'CAN bus simulation and analysis',
    link: 'https://www.vector.com/en/products/products-a-z/software/canoe/',
    color: 'from-green-500 to-green-700',
    isExternal: true,
  },
  // Review Tools
  {
    id: 'sonarqube',
    name: 'SonarQube',
    category: 'review',
    icon: '🔍',
    description: 'Code quality and security analysis',
    link: 'https://www.sonarqube.org/',
    color: 'from-blue-500 to-blue-700',
    isExternal: true,
  },
  {
    id: 'misra-checker',
    name: 'MISRA-C Checker',
    category: 'review',
    icon: '✔️',
    description: 'MISRA-C compliance checking',
    link: '#',
    color: 'from-purple-500 to-purple-700',
    isExternal: false,
  },
  {
    id: 'checkpath',
    name: 'Checkpath',
    category: 'review',
    icon: '📐',
    description: 'Design path verification',
    link: '#',
    color: 'from-pink-500 to-pink-700',
    isExternal: false,
  },
  // Orchestration Tools
  {
    id: 'jenkins',
    name: 'Jenkins',
    category: 'orchestration',
    icon: '🤖',
    description: 'CI/CD automation and orchestration',
    link: 'https://www.jenkins.io/',
    color: 'from-red-500 to-red-700',
    isExternal: true,
  },
  {
    id: 'github',
    name: 'GitHub',
    category: 'orchestration',
    icon: '🐙',
    description: 'Version control and collaboration',
    link: 'https://github.com/',
    color: 'from-gray-600 to-gray-800',
    isExternal: true,
  },
  {
    id: 'docker',
    name: 'Docker',
    category: 'orchestration',
    icon: '🐳',
    description: 'Containerization and deployment',
    link: 'https://www.docker.com/',
    color: 'from-blue-500 to-blue-700',
    isExternal: true,
  },
];
