import React, { useState } from 'react';
import { ChevronDown, Book, FileText, FileCode, PenTool as Tool, Check } from 'lucide-react';
import CodeBlock from '../components/CodeBlock';

const Documentation: React.FC = () => {
  const [activeTab, setActiveTab] = useState('getting-started');
  const [expandedItems, setExpandedItems] = useState<Record<string, boolean>>({
    'intro': true,
    'setup': false,
    'usage': false,
    'advanced': false
  });

  const toggleItem = (item: string) => {
    setExpandedItems(prev => ({
      ...prev,
      [item]: !prev[item]
    }));
  };

  const basicWorkflowExample = `name: Basic CI

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Set up Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '16'
      - name: Install dependencies
        run: npm ci
      - name: Run tests
        run: npm test`;

  return (
    <div className="fade-in">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Documentation</h1>
        <p className="text-gray-600">
          Comprehensive guides and reference documentation for using the GitHub Actions Workflow Library
        </p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 sticky top-4">
            <h3 className="font-medium text-gray-900 mb-4">Documentation</h3>
            
            <nav className="space-y-1">
              <button
                className={`w-full flex items-center px-3 py-2 text-sm rounded-md ${
                  activeTab === 'getting-started'
                    ? 'bg-blue-50 text-blue-700 font-medium'
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
                onClick={() => setActiveTab('getting-started')}
              >
                <Book size={18} className="mr-2" />
                Getting Started
              </button>
              <button
                className={`w-full flex items-center px-3 py-2 text-sm rounded-md ${
                  activeTab === 'workflows'
                    ? 'bg-blue-50 text-blue-700 font-medium'
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
                onClick={() => setActiveTab('workflows')}
              >
                <FileText size={18} className="mr-2" />
                Workflow Templates
              </button>
              <button
                className={`w-full flex items-center px-3 py-2 text-sm rounded-md ${
                  activeTab === 'actions'
                    ? 'bg-blue-50 text-blue-700 font-medium'
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
                onClick={() => setActiveTab('actions')}
              >
                <FileCode size={18} className="mr-2" />
                Custom Actions
              </button>
              <button
                className={`w-full flex items-center px-3 py-2 text-sm rounded-md ${
                  activeTab === 'cli'
                    ? 'bg-blue-50 text-blue-700 font-medium'
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
                onClick={() => setActiveTab('cli')}
              >
                <Tool size={18} className="mr-2" />
                CLI Tool
              </button>
            </nav>
            
            <hr className="my-4 border-gray-200" />
            
            <div className="space-y-4">
              <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Resources</h4>
              <a href="#" className="block text-sm text-blue-600 hover:text-blue-800">
                GitHub Actions Documentation
              </a>
              <a href="#" className="block text-sm text-blue-600 hover:text-blue-800">
                Workflow Syntax Reference
              </a>
              <a href="#" className="block text-sm text-blue-600 hover:text-blue-800">
                GitHub Marketplace
              </a>
            </div>
          </div>
        </div>
        
        <div className="lg:col-span-3">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            {activeTab === 'getting-started' && (
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-4">Getting Started with GitHub Actions</h2>
                
                <div className="mb-6">
                  <button
                    className="flex items-center justify-between w-full text-left px-4 py-3 bg-gray-50 rounded-lg hover:bg-gray-100"
                    onClick={() => toggleItem('intro')}
                  >
                    <span className="font-medium text-gray-900">Introduction to GitHub Actions</span>
                    <ChevronDown
                      size={20}
                      className={`text-gray-500 transform transition-transform duration-200 ${
                        expandedItems['intro'] ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  
                  {expandedItems['intro'] && (
                    <div className="mt-4 px-4">
                      <p className="text-gray-700 mb-4">
                        GitHub Actions is a powerful automation platform that allows you to automate your software development workflows right in your GitHub repository. With GitHub Actions, you can build, test, and deploy your code, as well as automate other tasks related to your GitHub workflow.
                      </p>
                      <h3 className="font-medium text-gray-900 mb-2">Key concepts:</h3>
                      <ul className="list-disc pl-5 space-y-2 text-gray-700 mb-4">
                        <li>
                          <strong>Workflows:</strong> Automated procedures that you add to your repository.
                        </li>
                        <li>
                          <strong>Events:</strong> Specific activities that trigger a workflow run.
                        </li>
                        <li>
                          <strong>Jobs:</strong> A set of steps that execute on the same runner.
                        </li>
                        <li>
                          <strong>Steps:</strong> Individual tasks that can run commands or actions.
                        </li>
                        <li>
                          <strong>Actions:</strong> Reusable units of code that can be used in workflows.
                        </li>
                        <li>
                          <strong>Runners:</strong> Servers that run your workflows when they're triggered.
                        </li>
                      </ul>
                    </div>
                  )}
                </div>
                
                <div className="mb-6">
                  <button
                    className="flex items-center justify-between w-full text-left px-4 py-3 bg-gray-50 rounded-lg hover:bg-gray-100"
                    onClick={() => toggleItem('setup')}
                  >
                    <span className="font-medium text-gray-900">Setting Up Your First Workflow</span>
                    <ChevronDown
                      size={20}
                      className={`text-gray-500 transform transition-transform duration-200 ${
                        expandedItems['setup'] ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  
                  {expandedItems['setup'] && (
                    <div className="mt-4 px-4">
                      <p className="text-gray-700 mb-4">
                        To create your first GitHub Actions workflow, you need to create a YAML file in the <code>.github/workflows</code> directory of your repository. Here's a step-by-step guide:
                      </p>
                      
                      <div className="space-y-4 mb-4">
                        <div className="flex items-start">
                          <div className="bg-blue-100 text-blue-800 rounded-full h-6 w-6 flex items-center justify-center mt-0.5 mr-3 flex-shrink-0">
                            <span className="text-sm font-medium">1</span>
                          </div>
                          <div>
                            <p className="text-gray-700">
                              Create a <code>.github/workflows</code> directory in your repository if it doesn't already exist.
                            </p>
                          </div>
                        </div>
                        
                        <div className="flex items-start">
                          <div className="bg-blue-100 text-blue-800 rounded-full h-6 w-6 flex items-center justify-center mt-0.5 mr-3 flex-shrink-0">
                            <span className="text-sm font-medium">2</span>
                          </div>
                          <div>
                            <p className="text-gray-700">
                              Create a new file, e.g., <code>ci.yml</code>, in the workflows directory.
                            </p>
                          </div>
                        </div>
                        
                        <div className="flex items-start">
                          <div className="bg-blue-100 text-blue-800 rounded-full h-6 w-6 flex items-center justify-center mt-0.5 mr-3 flex-shrink-0">
                            <span className="text-sm font-medium">3</span>
                          </div>
                          <div>
                            <p className="text-gray-700 mb-3">
                              Add the following YAML configuration to define a basic workflow:
                            </p>
                            <CodeBlock 
                              code={basicWorkflowExample} 
                              language="yaml"
                            />
                          </div>
                        </div>
                        
                        <div className="flex items-start">
                          <div className="bg-blue-100 text-blue-800 rounded-full h-6 w-6 flex items-center justify-center mt-0.5 mr-3 flex-shrink-0">
                            <span className="text-sm font-medium">4</span>
                          </div>
                          <div>
                            <p className="text-gray-700">
                              Commit and push the file to your repository. GitHub will automatically detect the workflow file and start running it based on the defined triggers.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                
                <div className="mb-6">
                  <button
                    className="flex items-center justify-between w-full text-left px-4 py-3 bg-gray-50 rounded-lg hover:bg-gray-100"
                    onClick={() => toggleItem('usage')}
                  >
                    <span className="font-medium text-gray-900">Using Workflow Templates</span>
                    <ChevronDown
                      size={20}
                      className={`text-gray-500 transform transition-transform duration-200 ${
                        expandedItems['usage'] ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  
                  {expandedItems['usage'] && (
                    <div className="mt-4 px-4">
                      <p className="text-gray-700 mb-4">
                        Our workflow library provides templates for common CI/CD scenarios that you can easily adapt to your projects. Here's how to use them:
                      </p>
                      
                      <div className="space-y-4">
                        <div className="flex items-start">
                          <div className="bg-green-100 text-green-800 rounded-full p-1 mt-0.5 mr-3 flex-shrink-0">
                            <Check size={16} />
                          </div>
                          <div>
                            <p className="text-gray-700">
                              Browse the <a href="/workflows" className="text-blue-600 hover:text-blue-800">Workflow Templates</a> section to find a template that matches your needs.
                            </p>
                          </div>
                        </div>
                        
                        <div className="flex items-start">
                          <div className="bg-green-100 text-green-800 rounded-full p-1 mt-0.5 mr-3 flex-shrink-0">
                            <Check size={16} />
                          </div>
                          <div>
                            <p className="text-gray-700">
                              Copy the template YAML to your <code>.github/workflows</code> directory.
                            </p>
                          </div>
                        </div>
                        
                        <div className="flex items-start">
                          <div className="bg-green-100 text-green-800 rounded-full p-1 mt-0.5 mr-3 flex-shrink-0">
                            <Check size={16} />
                          </div>
                          <div>
                            <p className="text-gray-700">
                              Customize the template to match your project's specific requirements.
                            </p>
                          </div>
                        </div>
                        
                        <div className="flex items-start">
                          <div className="bg-green-100 text-green-800 rounded-full p-1 mt-0.5 mr-3 flex-shrink-0">
                            <Check size={16} />
                          </div>
                          <div>
                            <p className="text-gray-700">
                              Commit and push the workflow file to your repository.
                            </p>
                          </div>
                        </div>
                        
                        <div className="flex items-start">
                          <div className="bg-green-100 text-green-800 rounded-full p-1 mt-0.5 mr-3 flex-shrink-0">
                            <Check size={16} />
                          </div>
                          <div>
                            <p className="text-gray-700">
                              Monitor the workflow runs in the Actions tab of your GitHub repository.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                
                <div className="mb-6">
                  <button
                    className="flex items-center justify-between w-full text-left px-4 py-3 bg-gray-50 rounded-lg hover:bg-gray-100"
                    onClick={() => toggleItem('advanced')}
                  >
                    <span className="font-medium text-gray-900">Advanced Workflow Concepts</span>
                    <ChevronDown
                      size={20}
                      className={`text-gray-500 transform transition-transform duration-200 ${
                        expandedItems['advanced'] ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  
                  {expandedItems['advanced'] && (
                    <div className="mt-4 px-4">
                      <p className="text-gray-700 mb-4">
                        Once you're comfortable with basic workflows, you can explore more advanced GitHub Actions features:
                      </p>
                      
                      <div className="space-y-6">
                        <div>
                          <h3 className="font-medium text-gray-900 mb-2">Matrix Builds</h3>
                          <p className="text-gray-700">
                            Test your code against multiple versions of languages, operating systems, or dependencies.
                          </p>
                        </div>
                        
                        <div>
                          <h3 className="font-medium text-gray-900 mb-2">Workflow Reuse</h3>
                          <p className="text-gray-700">
                            Use reusable workflows to share common job configurations across multiple workflows.
                          </p>
                        </div>
                        
                        <div>
                          <h3 className="font-medium text-gray-900 mb-2">Environment Secrets</h3>
                          <p className="text-gray-700">
                            Securely store and use sensitive information like API keys and credentials.
                          </p>
                        </div>
                        
                        <div>
                          <h3 className="font-medium text-gray-900 mb-2">Workflow Artifacts</h3>
                          <p className="text-gray-700">
                            Share data between jobs and persist build outputs for later use.
                          </p>
                        </div>
                        
                        <div>
                          <h3 className="font-medium text-gray-900 mb-2">Custom Actions</h3>
                          <p className="text-gray-700">
                            Create your own actions to encapsulate common functionality and share across repositories.
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}
            
            {activeTab === 'workflows' && (
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-4">Workflow Templates Documentation</h2>
                <p className="text-gray-700 mb-6">
                  Detailed documentation for each workflow template in our library, including usage instructions and customization options.
                </p>
                
                {/* Content for Workflow Templates tab */}
                <div className="bg-blue-50 rounded-lg p-6 mb-6">
                  <h3 className="text-lg font-semibold text-blue-800 mb-3">Template Categories</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-white rounded-lg p-4 border border-blue-100">
                      <h4 className="font-medium text-gray-900 mb-2">Testing Pipelines</h4>
                      <p className="text-sm text-gray-600">
                        Workflows for unit testing, integration testing, and end-to-end testing.
                      </p>
                    </div>
                    <div className="bg-white rounded-lg p-4 border border-blue-100">
                      <h4 className="font-medium text-gray-900 mb-2">Code Quality</h4>
                      <p className="text-sm text-gray-600">
                        Workflows for linting, code formatting, and security scanning.
                      </p>
                    </div>
                    <div className="bg-white rounded-lg p-4 border border-blue-100">
                      <h4 className="font-medium text-gray-900 mb-2">Deployment</h4>
                      <p className="text-sm text-gray-600">
                        Workflows for continuous deployment to various environments.
                      </p>
                    </div>
                    <div className="bg-white rounded-lg p-4 border border-blue-100">
                      <h4 className="font-medium text-gray-900 mb-2">Release Management</h4>
                      <p className="text-sm text-gray-600">
                        Workflows for versioning, changelogs, and release automation.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="prose max-w-none">
                  <h3>Documentation Structure</h3>
                  <p>
                    Each workflow template in our library includes the following documentation:
                  </p>
                  <ul>
                    <li><strong>Overview:</strong> A brief description of what the workflow does.</li>
                    <li><strong>Use Cases:</strong> Common scenarios where the workflow is useful.</li>
                    <li><strong>Requirements:</strong> Prerequisites for using the workflow.</li>
                    <li><strong>Configuration:</strong> Available configuration options.</li>
                    <li><strong>Examples:</strong> Sample implementations for different scenarios.</li>
                    <li><strong>Troubleshooting:</strong> Common issues and their solutions.</li>
                  </ul>
                  
                  <h3>Language-Specific Templates</h3>
                  <p>
                    Our library includes workflow templates optimized for the following languages:
                  </p>
                  <ul>
                    <li><strong>JavaScript/TypeScript:</strong> Including Node.js, React, Vue, and other JS frameworks.</li>
                    <li><strong>Python:</strong> Supporting various versions and popular frameworks like Django and Flask.</li>
                    <li><strong>Go:</strong> With support for different Go versions and testing frameworks.</li>
                    <li><strong>Rust:</strong> Including cargo-based workflows and cross-compilation.</li>
                  </ul>
                </div>
              </div>
            )}
            
            {activeTab === 'actions' && (
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-4">Custom Actions Documentation</h2>
                <p className="text-gray-700 mb-6">
                  Documentation for our custom GitHub Actions, including usage instructions and configuration options.
                </p>
                
                {/* Content for Custom Actions tab */}
                <div className="space-y-6">
                  <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Types of Custom Actions</h3>
                    <p className="text-gray-700 mb-4">
                      GitHub Actions can be implemented in different ways:
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="bg-white p-4 rounded-lg border border-gray-200">
                        <h4 className="font-medium text-gray-900 mb-2">JavaScript Actions</h4>
                        <p className="text-sm text-gray-600">
                          Written in JavaScript/TypeScript and run directly on the GitHub Actions runner.
                        </p>
                      </div>
                      <div className="bg-white p-4 rounded-lg border border-gray-200">
                        <h4 className="font-medium text-gray-900 mb-2">Docker Container Actions</h4>
                        <p className="text-sm text-gray-600">
                          Packaged in Docker containers, allowing for complex dependencies.
                        </p>
                      </div>
                      <div className="bg-white p-4 rounded-lg border border-gray-200">
                        <h4 className="font-medium text-gray-900 mb-2">Composite Actions</h4>
                        <p className="text-sm text-gray-600">
                          Combine multiple workflow steps into a single action.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="prose max-w-none">
                    <h3>Action Documentation Structure</h3>
                    <p>
                      Each custom action in our library includes the following documentation:
                    </p>
                    <ul>
                      <li><strong>Description:</strong> What the action does.</li>
                      <li><strong>Inputs:</strong> Required and optional inputs with descriptions.</li>
                      <li><strong>Outputs:</strong> Values that the action produces.</li>
                      <li><strong>Usage Examples:</strong> Code snippets showing how to use the action.</li>
                      <li><strong>Implementation Details:</strong> How the action works internally.</li>
                    </ul>
                    
                    <h3>Creating Your Own Actions</h3>
                    <p>
                      To create your own custom GitHub Actions:
                    </p>
                    <ol>
                      <li>Create a new repository for your action.</li>
                      <li>Add the necessary files (action.yml, source code).</li>
                      <li>Write thorough documentation.</li>
                      <li>Publish the action to the GitHub Marketplace (optional).</li>
                      <li>Use semantic versioning for releases.</li>
                    </ol>
                    
                    <h3>Testing Custom Actions</h3>
                    <p>
                      Before publishing your action, ensure it's thoroughly tested:
                    </p>
                    <ul>
                      <li>Write unit tests for your action's code.</li>
                      <li>Create integration tests that use your action in workflows.</li>
                      <li>Test with different input combinations.</li>
                      <li>Verify outputs are as expected.</li>
                    </ul>
                  </div>
                </div>
              </div>
            )}
            
            {activeTab === 'cli' && (
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-4">CLI Tool Documentation</h2>
                <p className="text-gray-700 mb-6">
                  Documentation for our workflow generation CLI tool, installation instructions, and usage examples.
                </p>
                
                {/* Content for CLI Tool tab */}
                <div className="space-y-6">
                  <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Installation</h3>
                    <CodeBlock 
                      code="npm install -g @workflow-library/cli" 
                      language="bash"
                      title="Install via npm"
                    />
                    <div className="mt-4">
                      <p className="text-sm text-gray-600">
                        Alternatively, you can install using pip:
                      </p>
                      <CodeBlock 
                        code="pip install workflow-library-cli" 
                        language="bash"
                        title="Install via pip"
                      />
                    </div>
                  </div>
                  
                  <div className="prose max-w-none">
                    <h3>CLI Commands</h3>
                    <p>
                      The CLI tool provides the following commands:
                    </p>
                    
                    <div className="bg-white p-4 rounded-lg border border-gray-200 mb-4">
                      <h4 className="font-medium text-gray-900 mb-2">Initialize a Project</h4>
                      <CodeBlock 
                        code="workflow-lib init [project-type]" 
                        language="bash"
                      />
                      <p className="text-sm text-gray-600 mt-2">
                        Creates a basic workflow configuration for your project based on the project type.
                      </p>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg border border-gray-200 mb-4">
                      <h4 className="font-medium text-gray-900 mb-2">Add a Workflow</h4>
                      <CodeBlock 
                        code="workflow-lib add [workflow-name]" 
                        language="bash"
                      />
                      <p className="text-sm text-gray-600 mt-2">
                        Adds a specific workflow template to your project.
                      </p>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg border border-gray-200 mb-4">
                      <h4 className="font-medium text-gray-900 mb-2">Validate Workflows</h4>
                      <CodeBlock 
                        code="workflow-lib validate" 
                        language="bash"
                      />
                      <p className="text-sm text-gray-600 mt-2">
                        Validates your workflow files against best practices and checks for errors.
                      </p>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg border border-gray-200 mb-4">
                      <h4 className="font-medium text-gray-900 mb-2">Update Workflows</h4>
                      <CodeBlock 
                        code="workflow-lib update" 
                        language="bash"
                      />
                      <p className="text-sm text-gray-600 mt-2">
                        Updates your workflows to the latest versions from the library.
                      </p>
                    </div>
                    
                    <h3>Configuration</h3>
                    <p>
                      The CLI tool uses a configuration file (<code>workflow-lib.config.js</code>) to customize its behavior. Here's an example configuration:
                    </p>
                    
                    <CodeBlock 
                      code={`module.exports = {
  project: {
    type: 'node',
    framework: 'express',
    test: 'jest'
  },
  workflows: {
    ci: {
      branches: ['main', 'develop'],
      nodeVersions: ['14', '16']
    },
    deploy: {
      environments: ['staging', 'production'],
      provider: 'aws'
    }
  }
}`} 
                      language="javascript"
                      title="workflow-lib.config.js"
                    />
                    
                    <h3>VS Code Extension</h3>
                    <p>
                      Our VS Code extension provides a graphical interface for the CLI tool, making it easier to:
                    </p>
                    <ul>
                      <li>Browse available workflow templates</li>
                      <li>Add workflows to your project</li>
                      <li>Edit workflow configurations</li>
                      <li>Validate workflows</li>
                      <li>View workflow run results</li>
                    </ul>
                    <p>
                      Install the extension from the <a href="#" className="text-blue-600 hover:text-blue-800">VS Code Marketplace</a>.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Documentation;