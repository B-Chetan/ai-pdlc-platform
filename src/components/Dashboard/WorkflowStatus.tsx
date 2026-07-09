'use client';

import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';

interface WorkflowStatusProps {
  completed: number;
  inProgress: number;
  pending: number;
}

const WorkflowStatus: React.FC<WorkflowStatusProps> = ({
  completed,
  inProgress,
  pending,
}) => {
  const total = completed + inProgress + pending;
  const completionRate = Math.round((completed / total) * 100);

  const data = [
    { name: 'Completed', value: completed, fill: '#22c55e' },
    { name: 'In Progress', value: inProgress, fill: '#f59e0b' },
    { name: 'Pending', value: pending, fill: '#ef4444' },
  ];

  return (
    <div className="glass-effect rounded-lg p-6 h-full">
      <h3 className="text-xl font-bold text-white mb-4">Workflow Status</h3>
      <div className="flex flex-col items-center">
        <ResponsiveContainer width="100%" height={250}>
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={90}
              paddingAngle={2}
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.fill} />
              ))}
            </Pie>
            <Tooltip
              contentStyle={{
                backgroundColor: 'rgba(15, 23, 42, 0.9)',
                border: '1px solid rgba(148, 163, 184, 0.2)',
                borderRadius: '8px',
              }}
            />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
        <div className="mt-4 text-center">
          <p className="text-4xl font-bold text-accent-blue">{completionRate}%</p>
          <p className="text-slate-400 text-sm mt-1">Completed</p>
        </div>
      </div>
    </div>
  );
};

export default WorkflowStatus;
