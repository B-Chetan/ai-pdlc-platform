'use client';

import React from 'react';
import { Github, Database, Code, Zap } from 'lucide-react';

const ArchitectureDiagram: React.FC = () => {
  return (
    <div className="w-full">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Side - System Components */}
        <div className="glass-effect rounded-lg p-6">
          <h3 className="text-xl font-bold text-white mb-6 flex items-center space-x-2">
            <Code className="w-5 h-5 text-accent-orange" />
            <span>System Architecture</span>
          </h3>
          <div className="space-y-4">
            {[
              {
                icon: '🧠',
                title: 'AI Agent Layer',
                description: 'Multi-agent orchestration engine',
                color: 'border-accent-purple',
              },
              {
                icon: '🔧',
                title: 'Tool Integration Layer',
                description: 'External tools & simulators',
                color: 'border-accent-orange',
              },
              {
                icon: '💾',
                title: 'Data Management',
                description: 'Requirements, designs, simulations',
                color: 'border-accent-blue',
              },
              {
                icon: '🌐',
                title: 'API & Communication',
                description: 'RESTful interfaces & webhooks',
                color: 'border-accent-cyan',
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className={`border-l-4 ${item.color} pl-4 py-2 glass-effect rounded-r-lg p-3 hover:bg-slate-700/20 transition-colors`}
              >
                <div className="flex items-center space-x-2 mb-1">
                  <span className="text-2xl">{item.icon}</span>
                  <h4 className="text-white font-semibold">{item.title}</h4>
                </div>
                <p className="text-slate-400 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side - Data Flow */}
        <div className="glass-effect rounded-lg p-6">
          <h3 className="text-xl font-bold text-white mb-6 flex items-center space-x-2">
            <Zap className="w-5 h-5 text-accent-yellow" />
            <span>Data Flow & Integration</span>
          </h3>
          <div className="space-y-4">
            {[
              {
                icon: '📥',
                title: 'Input Sources',
                items: ['User Specifications', 'Standards & References', 'Project Requirements'],
                color: 'from-blue-600 to-blue-900',
              },
              {
                icon: '⚙️',
                title: 'Processing',
                items: ['Requirement Analysis', 'Design Generation', 'Simulation & Validation'],
                color: 'from-orange-600 to-orange-900',
              },
              {
                icon: '📤',
                title: 'Output Artifacts',
                items: ['Design Documents', 'Simulation Reports', 'Compliance Status'],
                color: 'from-green-600 to-green-900',
              },
            ].map((section, idx) => (
              <div key={idx} className={`bg-gradient-to-r ${section.color} rounded-lg p-4`}>
                <div className="flex items-center space-x-2 mb-3">
                  <span className="text-2xl">{section.icon}</span>
                  <h4 className="text-white font-bold text-lg">{section.title}</h4>
                </div>
                <ul className="space-y-1">
                  {section.items.map((item, i) => (
                    <li key={i} className="text-white/80 text-sm flex items-center">
                      <span className="w-2 h-2 bg-white/50 rounded-full mr-2" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArchitectureDiagram;
