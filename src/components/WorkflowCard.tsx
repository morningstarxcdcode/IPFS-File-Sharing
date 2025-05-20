import React from 'react';
import { Workflow } from '../types/Workflow';
import { ArrowRight, Star, GitFork } from 'lucide-react';

interface WorkflowCardProps {
  workflow: Workflow;
}

const WorkflowCard: React.FC<WorkflowCardProps> = ({ workflow }) => {
  return (
    <div className="workflow-card bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 hover:border-blue-300">
      <div className="px-6 py-4">
        <div className="flex items-center mb-2">
          <div className={`w-2 h-2 rounded-full mr-2 ${workflow.language === 'JavaScript' ? 'bg-yellow-400' : workflow.language === 'Python' ? 'bg-blue-500' : workflow.language === 'Go' ? 'bg-cyan-500' : 'bg-red-500'}`}></div>
          <span className="text-sm text-gray-600">{workflow.language}</span>
        </div>
        <h3 className="text-lg font-semibold text-gray-900 mb-1">{workflow.name}</h3>
        <p className="text-gray-600 text-sm mb-4">{workflow.description}</p>
        
        <div className="space-y-2 mb-4">
          {workflow.tags.map((tag, index) => (
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
            <span>{workflow.stars}</span>
          </div>
          <div className="flex items-center">
            <GitFork size={16} className="mr-1 text-gray-500" />
            <span>{workflow.forks}</span>
          </div>
        </div>
        
        <button className="action-button inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-blue-700 bg-blue-100 hover:bg-blue-200">
          View Details
          <ArrowRight size={16} className="ml-2" />
        </button>
      </div>
    </div>
  );
};

export default WorkflowCard;