'use client';

import React from 'react';
import { Agent } from '@/data/agents';
import { Activity, CheckCircle, Loader, AlertCircle } from 'lucide-react';

interface AgentCardProps {
  agent: Agent;
}

const AgentCard: React.FC<AgentCardProps> = ({ agent }) => {
  const getStatusIcon = () => {
    switch (agent.status) {
      case 'active':
        return <Loader className="w-5 h-5 text-accent-orange animate-spin" />;
      case 'completed':
        return <CheckCircle className="w-5 h-5 text-success-green" />;
      case 'error':
        return <AlertCircle className="w-5 h-5 text-danger-red" />;
      default:
        return <Activity className="w-5 h-5 text-slate-400" />;
    }
  };

  const getStatusColor = () => {
    switch (agent.status) {
      case 'active':
        return 'text-accent-orange';
      case 'completed':
        return 'text-success-green';
      case 'error':
        return 'text-danger-red';
      default:
        return 'text-slate-400';
    }
  };

  return (
    <div className="agent-card glass-effect rounded-lg p-6 relative overflow-hidden">
      {/* Stage Badge */}
      <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-gradient-to-r from-accent-orange to-accent-blue text-white text-xs font-semibold">
        Stage {agent.stage}
      </div>

      {/* Header */}
      <div className="flex items-start space-x-4 mb-4">
        <div className="text-4xl">{agent.icon}</div>
        <div className="flex-grow">
          <h3 className="text-lg font-bold text-white">{agent.name}</h3>
          <p className="text-slate-400 text-sm mt-1">{agent.description}</p>
        </div>
      </div>

      {/* Status */}
      <div className="flex items-center space-x-2 mb-4">
        {getStatusIcon()}
        <span className={`text-sm font-semibold ${getStatusColor()}`}>
          {agent.status.charAt(0).toUpperCase() + agent.status.slice(1)}
        </span>
      </div>

      {/* Responsibilities */}
      <div className="mb-4">
        <h4 className="text-white text-sm font-semibold mb-2">Responsibilities:</h4>
        <ul className="space-y-1">
          {agent.responsibilities.slice(0, 2).map((resp, idx) => (
            <li key={idx} className="text-slate-400 text-xs flex items-start">
              <span className="text-accent-orange mr-2">•</span>
              <span>{resp}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Tools */}
      <div>
        <h4 className="text-white text-sm font-semibold mb-2">Tools:</h4>
        <div className="flex flex-wrap gap-2">
          {agent.tools.map((tool) => (
            <span
              key={tool}
              className="px-3 py-1 rounded-full bg-slate-700/50 text-slate-300 text-xs"
            >
              {tool}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AgentCard;
