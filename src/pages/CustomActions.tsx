import React, { useState } from 'react';
import ActionCard from '../components/ActionCard';
import { customActions } from '../data/customActions';
import { Filter, Search, Package } from 'lucide-react';
import CodeBlock from '../components/CodeBlock';

const CustomActions: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categoryFilters = ['all', 'PR Automation', 'Issue Management', 'Deployment', 'Documentation'];
  
  const filteredActions = customActions.filter(action => {
    const matchesCategory = activeFilter === 'all' || action.tags.includes(activeFilter);
    const matchesSearch = action.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         action.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         action.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    return matchesCategory && matchesSearch;
  });

  const exampleUsage = `name: Use Custom Action
on: [push, pull_request]

jobs:
  auto-label:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Auto Label PR
        uses: workflow-library/auto-label-action@v1
        with:
          github-token: \${{ secrets.GITHUB_TOKEN }}
          config-path: '.github/labels.yml'`;

  return (
    <div className="fade-in">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Custom GitHub Actions</h1>
        <p className="text-gray-600">
          Browse our collection of reusable GitHub Actions for common automation tasks
        </p>
      </div>
      
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-8">
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 mb-6">
          <div className="flex-1">
            <h2 className="text-lg font-semibold text-gray-900 mb-2">How to Use Custom Actions</h2>
            <p className="text-gray-600 mb-4">
              Custom actions can be easily incorporated into your workflows by referencing them in your workflow file.
            </p>
            <CodeBlock 
              code={exampleUsage} 
              language="yaml" 
              title="Example Usage"
            />
          </div>
        </div>
      </div>
      
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0 mb-6">
          <div className="flex items-center space-x-2">
            <Filter size={20} className="text-gray-500" />
            <span className="text-sm font-medium text-gray-700">Filter by category:</span>
            <div className="flex flex-wrap gap-2">
              {categoryFilters.map(filter => (
                <button
                  key={filter}
                  className={`px-3 py-1 text-sm rounded-full ${
                    activeFilter === filter
                      ? 'bg-green-100 text-green-800 font-medium'
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
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md text-sm placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-green-500"
              placeholder="Search actions..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredActions.map((action, index) => (
            <ActionCard key={index} action={action} />
          ))}
        </div>
        
        {filteredActions.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No actions match your filters.</p>
            <button
              className="mt-4 text-green-600 hover:text-green-800"
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

export default CustomActions;