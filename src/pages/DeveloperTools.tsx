import React, { useState } from 'react';
import { Terminal, Download, ExternalLink, Code } from 'lucide-react';
import CodeBlock from '../components/CodeBlock';

const DeveloperTools: React.FC = () => {
  const [activeTab, setActiveTab] = useState('cli');
  
  const cliInstallCode = `# Install via npm
npm install -g @workflow-library/cli

# Install via pip (for Python users)
pip install workflow-library-cli`;

  const cliUsageCode = `# Initialize a new project
workflow-lib init node

# Add a testing workflow
workflow-lib add test-node

# Validate your workflows
workflow-lib validate`;

  const vsCodeExtensionFeatures = [
    'Workflow template browsing and previewing',
    'One-click workflow addition to your project',
    'Syntax highlighting for workflow files',
    'Inline validation and error checking',
    'Quick access to documentation',
    'Run and debug workflows locally',
  ];

  const localTestingCode = `# Run a workflow locally
workflow-lib run test-workflow

# Debug a workflow step by step
workflow-lib debug deploy-workflow

# Validate a workflow against GitHub Actions schema
workflow-lib validate workflow.yml`;

  return (
    <div className="fade-in">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Developer Tools</h1>
        <p className="text-gray-600">
          Productivity tools to help you work more efficiently with GitHub Actions workflows
        </p>
      </div>
      
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 mb-8">
        <div className="tabs-container border-b border-gray-200">
          <div className="flex">
            <button
              className={`tab py-3 px-6 font-medium text-sm ${
                activeTab === 'cli' ? 'active text-blue-600' : 'text-gray-500 hover:text-gray-700'
              }`}
              onClick={() => setActiveTab('cli')}
            >
              CLI Tool
            </button>
            <button
              className={`tab py-3 px-6 font-medium text-sm ${
                activeTab === 'vscode' ? 'active text-blue-600' : 'text-gray-500 hover:text-gray-700'
              }`}
              onClick={() => setActiveTab('vscode')}
            >
              VS Code Extension
            </button>
            <button
              className={`tab py-3 px-6 font-medium text-sm ${
                activeTab === 'testing' ? 'active text-blue-600' : 'text-gray-500 hover:text-gray-700'
              }`}
              onClick={() => setActiveTab('testing')}
            >
              Local Testing
            </button>
            <button
              className={`tab py-3 px-6 font-medium text-sm ${
                activeTab === 'config' ? 'active text-blue-600' : 'text-gray-500 hover:text-gray-700'
              }`}
              onClick={() => setActiveTab('config')}
            >
              Configuration Validators
            </button>
          </div>
        </div>
        
        <div className="p-6">
          {activeTab === 'cli' && (
            <div>
              <div className="flex items-center mb-4">
                <div className="bg-blue-100 p-2 rounded-md mr-4">
                  <Terminal size={24} className="text-blue-600" />
                </div>
                <h2 className="text-xl font-bold text-gray-900">Workflow Library CLI</h2>
              </div>
              
              <p className="text-gray-700 mb-6">
                Our Command Line Interface (CLI) tool allows you to generate, validate, and manage GitHub Actions workflows directly from your terminal.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div>
                  <h3 className="font-medium text-gray-900 mb-3">Installation</h3>
                  <CodeBlock
                    code={cliInstallCode}
                    language="bash"
                  />
                </div>
                
                <div>
                  <h3 className="font-medium text-gray-900 mb-3">Basic Usage</h3>
                  <CodeBlock
                    code={cliUsageCode}
                    language="bash"
                  />
                </div>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-6 border border-gray-200 mb-6">
                <h3 className="font-medium text-gray-900 mb-4">Key Features</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-start">
                    <div className="bg-blue-100 rounded-full p-1 mr-3 flex-shrink-0">
                      <div className="bg-blue-600 rounded-full w-2 h-2"></div>
                    </div>
                    <p className="text-gray-700">Generate workflow templates for any project type</p>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-blue-100 rounded-full p-1 mr-3 flex-shrink-0">
                      <div className="bg-blue-600 rounded-full w-2 h-2"></div>
                    </div>
                    <p className="text-gray-700">Validate workflows against best practices</p>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-blue-100 rounded-full p-1 mr-3 flex-shrink-0">
                      <div className="bg-blue-600 rounded-full w-2 h-2"></div>
                    </div>
                    <p className="text-gray-700">Customize workflows with interactive prompts</p>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-blue-100 rounded-full p-1 mr-3 flex-shrink-0">
                      <div className="bg-blue-600 rounded-full w-2 h-2"></div>
                    </div>
                    <p className="text-gray-700">Update existing workflows to latest versions</p>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-blue-100 rounded-full p-1 mr-3 flex-shrink-0">
                      <div className="bg-blue-600 rounded-full w-2 h-2"></div>
                    </div>
                    <p className="text-gray-700">Run workflows locally for testing</p>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-blue-100 rounded-full p-1 mr-3 flex-shrink-0">
                      <div className="bg-blue-600 rounded-full w-2 h-2"></div>
                    </div>
                    <p className="text-gray-700">Share configurations across projects</p>
                  </div>
                </div>
              </div>
              
              <div className="flex justify-center">
                <button className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none">
                  <Download size={18} className="mr-2" />
                  Download CLI Tool
                </button>
              </div>
            </div>
          )}
          
          {activeTab === 'vscode' && (
            <div>
              <div className="flex items-center mb-4">
                <div className="bg-blue-100 p-2 rounded-md mr-4">
                  <Code size={24} className="text-blue-600" />
                </div>
                <h2 className="text-xl font-bold text-gray-900">VS Code Extension</h2>
              </div>
              
              <p className="text-gray-700 mb-6">
                Our Visual Studio Code extension provides a graphical interface for working with GitHub Actions workflows, making it easier to create, edit, and manage your CI/CD pipelines.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div>
                  <img 
                    src="https://images.pexels.com/photos/1181271/pexels-photo-1181271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                    alt="VS Code Extension Screenshot" 
                    className="rounded-lg shadow-md border border-gray-200 w-full h-auto"
                  />
                </div>
                
                <div>
                  <h3 className="font-medium text-gray-900 mb-3">Extension Features</h3>
                  <ul className="space-y-3">
                    {vsCodeExtensionFeatures.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <div className="bg-green-100 rounded-full p-1 mr-3 flex-shrink-0 mt-0.5">
                          <div className="bg-green-600 rounded-full w-2 h-2"></div>
                        </div>
                        <p className="text-gray-700">{feature}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-6 border border-gray-200 mb-6">
                <h3 className="font-medium text-gray-900 mb-4">Installation</h3>
                <ol className="space-y-4">
                  <li className="flex items-start">
                    <div className="bg-blue-100 text-blue-800 rounded-full h-6 w-6 flex items-center justify-center mt-0.5 mr-3 flex-shrink-0">
                      <span className="text-sm font-medium">1</span>
                    </div>
                    <div>
                      <p className="text-gray-700">
                        Open VS Code and navigate to the Extensions view by clicking on the Extensions icon in the Activity Bar.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-blue-100 text-blue-800 rounded-full h-6 w-6 flex items-center justify-center mt-0.5 mr-3 flex-shrink-0">
                      <span className="text-sm font-medium">2</span>
                    </div>
                    <div>
                      <p className="text-gray-700">
                        Search for "GitHub Actions Workflow Library" in the Extensions view search box.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-blue-100 text-blue-800 rounded-full h-6 w-6 flex items-center justify-center mt-0.5 mr-3 flex-shrink-0">
                      <span className="text-sm font-medium">3</span>
                    </div>
                    <div>
                      <p className="text-gray-700">
                        Click the Install button on the GitHub Actions Workflow Library extension.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-blue-100 text-blue-800 rounded-full h-6 w-6 flex items-center justify-center mt-0.5 mr-3 flex-shrink-0">
                      <span className="text-sm font-medium">4</span>
                    </div>
                    <div>
                      <p className="text-gray-700">
                        After installation, you can access the extension features from the GitHub Actions icon in the Activity Bar.
                      </p>
                    </div>
                  </li>
                </ol>
              </div>
              
              <div className="flex justify-center">
                <button className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none">
                  <ExternalLink size={18} className="mr-2" />
                  View in VS Code Marketplace
                </button>
              </div>
            </div>
          )}
          
          {activeTab === 'testing' && (
            <div>
              <div className="flex items-center mb-4">
                <div className="bg-blue-100 p-2 rounded-md mr-4">
                  <Terminal size={24} className="text-blue-600" />
                </div>
                <h2 className="text-xl font-bold text-gray-900">Local Workflow Testing</h2>
              </div>
              
              <p className="text-gray-700 mb-6">
                Test your GitHub Actions workflows locally before pushing them to your repository, saving time and reducing the number of failed workflow runs.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div>
                  <h3 className="font-medium text-gray-900 mb-3">Testing Commands</h3>
                  <CodeBlock
                    code={localTestingCode}
                    language="bash"
                  />
                </div>
                
                <div>
                  <h3 className="font-medium text-gray-900 mb-3">Benefits of Local Testing</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <div className="bg-purple-100 rounded-full p-1 mr-3 flex-shrink-0 mt-0.5">
                        <div className="bg-purple-600 rounded-full w-2 h-2"></div>
                      </div>
                      <p className="text-gray-700">Faster feedback loop during development</p>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-purple-100 rounded-full p-1 mr-3 flex-shrink-0 mt-0.5">
                        <div className="bg-purple-600 rounded-full w-2 h-2"></div>
                      </div>
                      <p className="text-gray-700">Identify issues before committing to GitHub</p>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-purple-100 rounded-full p-1 mr-3 flex-shrink-0 mt-0.5">
                        <div className="bg-purple-600 rounded-full w-2 h-2"></div>
                      </div>
                      <p className="text-gray-700">Test with different inputs and environments</p>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-purple-100 rounded-full p-1 mr-3 flex-shrink-0 mt-0.5">
                        <div className="bg-purple-600 rounded-full w-2 h-2"></div>
                      </div>
                      <p className="text-gray-700">Debug workflow steps interactively</p>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-purple-100 rounded-full p-1 mr-3 flex-shrink-0 mt-0.5">
                        <div className="bg-purple-600 rounded-full w-2 h-2"></div>
                      </div>
                      <p className="text-gray-700">Reduce GitHub Actions usage minutes</p>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-6 border border-gray-200 mb-6">
                <h3 className="font-medium text-gray-900 mb-4">How It Works</h3>
                <p className="text-gray-700 mb-4">
                  Our local testing utility uses Docker to simulate the GitHub Actions runner environment, allowing you to run your workflows locally with the same conditions as on GitHub.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <h4 className="font-medium text-gray-900 mb-2">1. Setup</h4>
                    <p className="text-sm text-gray-600">
                      The tool creates a Docker container with the appropriate runner environment.
                    </p>
                  </div>
                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <h4 className="font-medium text-gray-900 mb-2">2. Execution</h4>
                    <p className="text-sm text-gray-600">
                      Your workflow is executed step by step in the containerized environment.
                    </p>
                  </div>
                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <h4 className="font-medium text-gray-900 mb-2">3. Feedback</h4>
                    <p className="text-sm text-gray-600">
                      You receive detailed logs and can interact with the workflow as it runs.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="flex justify-center">
                <button className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none">
                  <Download size={18} className="mr-2" />
                  Download Testing Utilities
                </button>
              </div>
            </div>
          )}
          
          {activeTab === 'config' && (
            <div>
              <div className="flex items-center mb-4">
                <div className="bg-blue-100 p-2 rounded-md mr-4">
                  <Code size={24} className="text-blue-600" />
                </div>
                <h2 className="text-xl font-bold text-gray-900">Configuration Validators</h2>
              </div>
              
              <p className="text-gray-700 mb-6">
                Ensure your GitHub Actions workflows follow best practices and are free of common errors with our configuration validation tools.
              </p>
              
              <div className="bg-gray-50 rounded-lg p-6 border border-gray-200 mb-8">
                <h3 className="font-medium text-gray-900 mb-4">What We Validate</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-start">
                    <div className="bg-blue-100 rounded-full p-1 mr-3 flex-shrink-0 mt-0.5">
                      <div className="bg-blue-600 rounded-full w-2 h-2"></div>
                    </div>
                    <p className="text-gray-700">Syntax and schema validation</p>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-blue-100 rounded-full p-1 mr-3 flex-shrink-0 mt-0.5">
                      <div className="bg-blue-600 rounded-full w-2 h-2"></div>
                    </div>
                    <p className="text-gray-700">Security best practices</p>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-blue-100 rounded-full p-1 mr-3 flex-shrink-0 mt-0.5">
                      <div className="bg-blue-600 rounded-full w-2 h-2"></div>
                    </div>
                    <p className="text-gray-700">Performance optimizations</p>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-blue-100 rounded-full p-1 mr-3 flex-shrink-0 mt-0.5">
                      <div className="bg-blue-600 rounded-full w-2 h-2"></div>
                    </div>
                    <p className="text-gray-700">Compatibility with GitHub Actions versions</p>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-blue-100 rounded-full p-1 mr-3 flex-shrink-0 mt-0.5">
                      <div className="bg-blue-600 rounded-full w-2 h-2"></div>
                    </div>
                    <p className="text-gray-700">Action input/output validation</p>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-blue-100 rounded-full p-1 mr-3 flex-shrink-0 mt-0.5">
                      <div className="bg-blue-600 rounded-full w-2 h-2"></div>
                    </div>
                    <p className="text-gray-700">Environment and secret usage</p>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div>
                  <h3 className="font-medium text-gray-900 mb-3">Integration Options</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <div className="bg-green-100 rounded-full p-1 mr-3 flex-shrink-0 mt-0.5">
                        <div className="bg-green-600 rounded-full w-2 h-2"></div>
                      </div>
                      <p className="text-gray-700">Command line validation</p>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-green-100 rounded-full p-1 mr-3 flex-shrink-0 mt-0.5">
                        <div className="bg-green-600 rounded-full w-2 h-2"></div>
                      </div>
                      <p className="text-gray-700">VS Code extension integration</p>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-green-100 rounded-full p-1 mr-3 flex-shrink-0 mt-0.5">
                        <div className="bg-green-600 rounded-full w-2 h-2"></div>
                      </div>
                      <p className="text-gray-700">Pre-commit hook integration</p>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-green-100 rounded-full p-1 mr-3 flex-shrink-0 mt-0.5">
                        <div className="bg-green-600 rounded-full w-2 h-2"></div>
                      </div>
                      <p className="text-gray-700">CI/CD pipeline integration</p>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-green-100 rounded-full p-1 mr-3 flex-shrink-0 mt-0.5">
                        <div className="bg-green-600 rounded-full w-2 h-2"></div>
                      </div>
                      <p className="text-gray-700">GitHub App for automated PR checks</p>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-medium text-gray-900 mb-3">Custom Validation Rules</h3>
                  <p className="text-gray-700 mb-4">
                    Create custom validation rules specific to your organization's requirements:
                  </p>
                  <CodeBlock
                    code={`module.exports = {
  rules: {
    'require-timeout': {
      description: 'All jobs must have a timeout specified',
      severity: 'warning',
      test: (workflow) => {
        const jobs = workflow.jobs || {};
        return Object.values(jobs).every(job => job.timeout-minutes);
      }
    }
  }
}`}
                    language="javascript"
                    title="custom-rules.js"
                  />
                </div>
              </div>
              
              <div className="flex justify-center">
                <button className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none">
                  <Download size={18} className="mr-2" />
                  Download Validator Package
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DeveloperTools;