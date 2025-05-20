import React, { useState } from 'react';
import WorkflowCard from '../components/WorkflowCard';
import { workflowTemplates } from '../data/workflowTemplates';
import { Filter, Search } from 'lucide-react';

const WorkflowTemplates: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const languageFilters = ['all', 'JavaScript', 'Python', 'Go', 'Rust'];
  
  const filteredWorkflows = workflowTemplates.filter(workflow => {
    const matchesLanguage = activeFilter === 'all' || workflow.language === activeFilter;
    const matchesSearch = workflow.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         workflow.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         workflow.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    return matchesLanguage && matchesSearch;
  });

  return (
    <div className="fade-in">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Workflow Templates</h1>
        <p className="text-gray-600">
          Browse our collection of production-ready GitHub Actions workflow templates
        </p>
      </div>
      
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0 mb-6">
          <div className="flex items-center space-x-2">
            <Filter size={20} className="text-gray-500" />
            <span className="text-sm font-medium text-gray-700">Filter by language:</span>
            <div className="flex space-x-2">
              {languageFilters.map(filter => (
                <button
                  key={filter}
                  className={`px-3 py-1 text-sm rounded-full ${
                    activeFilter === filter
                      ? 'bg-blue-100 text-blue-800 font-medium'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                  onClick={() => setActiveFilter(filter)}
                >
                  {filter === 'all' ? 'All' : filter}
                </button>
              ))}
            </div>
          </div>
          
          <div className="relative max-w-xs w-full">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search size={18} className="text-gray-400" />
            </div>
            <input
              type="text"
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md text-sm placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Search workflows..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredWorkflows.map((workflow, index) => (
            <WorkflowCard key={index} workflow={workflow} />
          ))}
        </div>
        
        {filteredWorkflows.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No workflows match your filters.</p>
            <button
              className="mt-4 text-blue-600 hover:text-blue-800"
              onClick={() => {
                setActiveFilter('all');
                setSearchQuery('');
              }}
            >
              Clear filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default WorkflowTemplates;