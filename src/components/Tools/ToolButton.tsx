'use client';

import React from 'react';
import { Tool } from '@/data/tools';
import { ExternalLink } from 'lucide-react';

interface ToolButtonProps {
  tool: Tool;
}

const ToolButton: React.FC<ToolButtonProps> = ({ tool }) => {
  return (
    <a
      href={tool.link}
      target={tool.isExternal ? '_blank' : '_self'}
      rel={tool.isExternal ? 'noopener noreferrer' : ''}
      className="tool-button group"
    >
      <div className={`bg-gradient-to-br ${tool.color} rounded-lg p-6 h-full flex flex-col items-center justify-center text-center hover:shadow-xl transition-all`}>
        <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">
          {tool.icon}
        </div>
        <h3 className="text-white font-semibold text-sm mb-2">{tool.name}</h3>
        <p className="text-white/80 text-xs mb-3">{tool.description}</p>
        {tool.isExternal && (
          <ExternalLink className="w-4 h-4 text-white/60 group-hover:text-white transition-colors" />
        )}
      </div>
    </a>
  );
};

export default ToolButton;
