'use client';

import React from 'react';
import { ArrowRight } from 'lucide-react';

const WorkflowDiagram: React.FC = () => {
  const stages = [
    {
      number: 1,
      title: 'Requirements',
      description: 'Capture & analyze needs',
      color: 'from-purple-600 to-purple-900',
      icon: '📋',
    },
    {
      number: 2,
      title: 'Design',
      description: 'Generate design & code',
      color: 'from-green-600 to-green-900',
      icon: '🎨',
    },
    {
      number: 3,
      title: 'Simulation',
      description: 'Test & predict performance',
      color: 'from-orange-600 to-orange-900',
      icon: '📊',
    },
    {
      number: 4,
      title: 'Review',
      description: 'Validate & ensure compliance',
      color: 'from-blue-600 to-blue-900',
      icon: '✅',
    },
    {
      number: 5,
      title: 'Iteration/Approval',
      description: 'Refine until subsystem passes',
      color: 'from-cyan-600 to-cyan-900',
      icon: '🔄',
    },
  ];

  return (
    <div className="w-full">
      {/* Desktop View */}
      <div className="hidden lg:flex items-center justify-between gap-2 mb-8">
        {stages.map((stage, index) => (
          <React.Fragment key={stage.number}>
            <div className="flex-1">
              <div
                className={`bg-gradient-to-br ${stage.color} rounded-lg p-6 text-center transform transition-all hover:scale-105`}
              >
                <div className="text-4xl mb-2">{stage.icon}</div>
                <div className="inline-block px-3 py-1 rounded-full bg-white/20 text-white text-xs font-bold mb-2">
                  Stage {stage.number}
                </div>
                <h3 className="text-white font-bold text-lg mb-1">{stage.title}</h3>
                <p className="text-white/80 text-sm">{stage.description}</p>
              </div>
            </div>
            {index < stages.length - 1 && (
              <div className="flex-shrink-0 text-accent-orange animate-pulse">
                <ArrowRight className="w-8 h-8" />
              </div>
            )}
          </React.Fragment>
        ))}
      </div>

      {/* Mobile View */}
      <div className="lg:hidden space-y-4">
        {stages.map((stage) => (
          <div
            key={stage.number}
            className={`bg-gradient-to-br ${stage.color} rounded-lg p-6 flex items-center space-x-4`}
          >
            <div className="flex-shrink-0 text-4xl">{stage.icon}</div>
            <div className="flex-grow">
              <div className="inline-block px-3 py-1 rounded-full bg-white/20 text-white text-xs font-bold mb-2">
                Stage {stage.number}
              </div>
              <h3 className="text-white font-bold text-lg">{stage.title}</h3>
              <p className="text-white/80 text-sm">{stage.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkflowDiagram;
