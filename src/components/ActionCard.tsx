import React from 'react';
import { Action } from '../types/Action';
import { ArrowRight, Star, Download } from 'lucide-react';

interface ActionCardProps {
  action: Action;
}

const ActionCard: React.FC<ActionCardProps> = ({ action }) => {
  return (
    <div className="workflow-card bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 hover:border-green-300">
      <div className="px-6 py-4">
        <div className="flex items-center mb-2">
          <div className="w-8 h-8 rounded bg-gray-100 flex items-center justify-center mr-3">
            {action.icon}
          </div>
          <h3 className="text-lg font-semibold text-gray-900">{action.name}</h3>
        </div>
        
        <p className="text-gray-600 text-sm mt-2 mb-4">{action.description}</p>
        
        <div className="space-y-2 mb-4">
          {action.tags.map((tag, index) => (
            <span 
              key={index} 
              className="tag inline-block bg-gray-100 rounded-full px-3 py-1 text-xs font-medium text-gray-700 mr-2 mb-2"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
      
      <div className="bg-gray-50 px-6 py-3 flex items-center justify-between">
        <div className="flex items-center space-x-4 text-sm text-gray-600">
          <div className="flex items-center">
            <Star size={16} className="mr-1 text-gray-500" />
            <span>{action.stars}</span>
          </div>
          <div className="flex items-center">
            <Download size={16} className="mr-1 text-gray-500" />
            <span>{action.downloads}</span>
          </div>
        </div>
        
        <button className="action-button inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-green-700 bg-green-100 hover:bg-green-200">
          View Action
          <ArrowRight size={16} className="ml-2" />
        </button>
      </div>
    </div>
  );
};

export default ActionCard;