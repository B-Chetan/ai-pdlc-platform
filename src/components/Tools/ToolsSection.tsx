'use client';

import React from 'react';
import { Tool } from '@/data/tools';
import ToolButton from './ToolButton';

interface ToolsSectionProps {
  category: 'simulation' | 'review' | 'orchestration';
  tools: Tool[];
  title: string;
  icon: string;
}

const ToolsSection: React.FC<ToolsSectionProps> = ({
  category,
  tools,
  title,
  icon,
}) => {
  const categoryTools = tools.filter((tool) => tool.category === category);

  return (
    <div className="mb-12">
      <div className="flex items-center space-x-3 mb-6">
        <div className="text-3xl">{icon}</div>
        <div>
          <h2 className="text-2xl font-bold text-white">{title}</h2>
          <p className="text-slate-400 text-sm">
            {categoryTools.length} tools available
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {categoryTools.map((tool) => (
          <ToolButton key={tool.id} tool={tool} />
        ))}
      </div>
    </div>
  );
};

export default ToolsSection;
