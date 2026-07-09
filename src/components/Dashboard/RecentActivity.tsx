'use client';

import React from 'react';
import { CheckCircle, AlertCircle, Clock } from 'lucide-react';
import { WorkflowActivity } from '@/data/workflow';

interface RecentActivityProps {
  activities: WorkflowActivity[];
}

const RecentActivity: React.FC<RecentActivityProps> = ({ activities }) => {
  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'success':
        return <CheckCircle className="w-5 h-5 text-success-green" />;
      case 'warning':
        return <AlertCircle className="w-5 h-5 text-warning-yellow" />;
      case 'error':
        return <AlertCircle className="w-5 h-5 text-danger-red" />;
      default:
        return <Clock className="w-5 h-5 text-accent-blue" />;
    }
  };

  return (
    <div className="glass-effect rounded-lg p-6 h-full">
      <h3 className="text-xl font-bold text-white mb-4">Recent Activity</h3>
      <div className="space-y-3 max-h-96 overflow-y-auto">
        {activities.map((activity) => (
          <div
            key={activity.id}
            className="flex items-start space-x-4 p-3 rounded-lg hover:bg-slate-700/20 transition-colors"
          >
            <div className="flex-shrink-0 mt-1">
              {getStatusIcon(activity.status)}
            </div>
            <div className="flex-grow">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-white font-medium">{activity.title}</p>
                  <p className="text-slate-400 text-sm mt-1">{activity.agent}</p>
                  {activity.details && (
                    <p className="text-slate-500 text-xs mt-1">{activity.details}</p>
                  )}
                </div>
              </div>
            </div>
            <div className="text-slate-400 text-xs whitespace-nowrap">
              {activity.timestamp}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentActivity;
