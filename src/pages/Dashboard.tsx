import React from 'react';
import { GitPullRequest, Package, FileText, PenTool as Tool, Code, ArrowRight, Github, Clock, BarChart } from 'lucide-react';

const Dashboard: React.FC = () => {
  const stats = [
    { name: 'Workflow Templates', value: '42', icon: <GitPullRequest size={20} className="text-blue-500" /> },
    { name: 'Custom Actions', value: '28', icon: <Package size={20} className="text-green-500" /> },
    { name: 'Languages Supported', value: '4', icon: <Code size={20} className="text-purple-500" /> },
    { name: 'Developer Tools', value: '12', icon: <Tool size={20} className="text-orange-500" /> },
  ];

  const recentActivity = [
    { action: 'Added new Python test workflow', time: '2 hours ago', user: 'sarah_dev' },
    { action: 'Updated Node.js deployment flow', time: '5 hours ago', user: 'mike_ops' },
    { action: 'Fixed Go linting workflow', time: '1 day ago', user: 'alex_code' },
    { action: 'Added Rust security scanning', time: '2 days ago', user: 'jen_security' },
  ];

  return (
    <div className="fade-in">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">GitHub Actions Workflow Library</h1>
        <p className="text-gray-600">
          A curated collection of production-ready CI/CD templates and automation workflows
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <div 
            key={index} 
            className="bg-white rounded-lg shadow-sm p-6 border border-gray-200 slide-in"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-sm font-medium text-gray-500">{stat.name}</h3>
              {stat.icon}
            </div>
            <p className="text-3xl font-semibold text-gray-900">{stat.value}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <div className="lg:col-span-2 bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold text-gray-900">Popular Workflows</h2>
            <a href="/workflows" className="text-sm text-blue-600 hover:text-blue-800 flex items-center">
              View all <ArrowRight size={16} className="ml-1" />
            </a>
          </div>
          
          <div className="space-y-4">
            {['Node.js CI', 'Python Testing', 'Go Build & Test', 'Rust Security Scanner'].map((workflow, index) => (
              <div 
                key={index} 
                className="workflow-card flex items-center p-4 rounded-md border border-gray-100 hover:border-blue-200 bg-gray-50"
              >
                <div className="mr-4">
                  <div className="w-10 h-10 rounded-md bg-blue-100 flex items-center justify-center">
                    <GitPullRequest size={20} className="text-blue-600" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="font-medium text-gray-900">{workflow}</h3>
                  <p className="text-sm text-gray-500">Complete CI/CD workflow template</p>
                </div>
                <div>
                  <button className="text-blue-600 hover:text-blue-800">
                    <ArrowRight size={18} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold text-gray-900">Recent Activity</h2>
            <Clock size={18} className="text-gray-400" />
          </div>
          
          <div className="space-y-4">
            {recentActivity.map((activity, index) => (
              <div key={index} className="border-b border-gray-100 pb-3 last:border-0 last:pb-0">
                <p className="text-sm font-medium text-gray-900">{activity.action}</p>
                <div className="flex items-center mt-1 text-xs text-gray-500">
                  <span className="mr-2">{activity.time}</span>
                  <span className="flex items-center">
                    <Github size={12} className="mr-1" />
                    {activity.user}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg shadow-lg p-6 text-white">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-4 md:mb-0">
            <h2 className="text-xl font-bold mb-2">Ready to supercharge your CI/CD?</h2>
            <p className="text-blue-100">
              Get started with our CLI tool to generate custom workflows for your projects.
            </p>
          </div>
          <div className="flex space-x-4">
            <button className="bg-white text-blue-600 hover:bg-blue-50 px-4 py-2 rounded-md font-medium text-sm">
              Install CLI
            </button>
            <button className="bg-blue-700 hover:bg-blue-800 text-white px-4 py-2 rounded-md font-medium text-sm">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;