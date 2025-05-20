import React, { useState } from 'react';
import { Code, Copy, Check, ExternalLink } from 'lucide-react';
import CodeBlock from '../components/CodeBlock';

const Examples: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('ci-pipelines');
  
  const categories = [
    { id: 'ci-pipelines', name: 'CI Pipelines' },
    { id: 'deployment', name: 'Deployment' },
    { id: 'pr-automation', name: 'PR Automation' },
    { id: 'releases', name: 'Release Management' },
    { id: 'monorepo', name: 'Monorepo Workflows' },
  ];
  
  const nodeCIExample = `name: Node.js CI

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  test:
    runs-on: ubuntu-latest
    strategy:
      matrix:
        node-version: [14.x, 16.x, 18.x]
    
    steps:
      - uses: actions/checkout@v3
      
      - name: Use Node.js \${matrix.node-version}
        uses: actions/setup-node@v3
        with:
          node-version: \${matrix.node-version}
          cache: 'npm'
      
      - name: Install dependencies
        run: npm ci
      
      - name: Lint
        run: npm run lint
      
      - name: Test
        run: npm test
        
      - name: Build
        run: npm run build`;
  
  const deploymentExample = `name: Deploy to Production

on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    environment: production
    
    steps:
      - uses: actions/checkout@v3
      
      - name: Set up Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '16'
          cache: 'npm'
      
      - name: Install dependencies
        run: npm ci
      
      - name: Build
        run: npm run build
      
      - name: Deploy to AWS
        uses: workflow-library/aws-s3-deploy@v1
        with:
          aws-access-key-id: \${{ secrets.AWS_ACCESS_KEY_ID }}
          aws-secret-access-key: \${{ secrets.AWS_SECRET_ACCESS_KEY }}
          aws-region: us-west-2
          s3-bucket: my-app-production
          source-dir: ./build`;
  
  const prAutomationExample = `name: PR Automation

on:
  pull_request:
    types: [opened, synchronize, reopened, labeled, unlabeled]

jobs:
  triage:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Auto Label
        uses: workflow-library/auto-label-action@v1
        with:
          github-token: \${{ secrets.GITHUB_TOKEN }}
          config-path: '.github/labeler.yml'
      
      - name: Assign Reviewers
        uses: workflow-library/auto-assign-action@v1
        with:
          github-token: \${{ secrets.GITHUB_TOKEN }}
          config-path: '.github/reviewers.yml'
      
      - name: Size Check
        uses: workflow-library/pr-size-checker@v1
        with:
          github-token: \${{ secrets.GITHUB_TOKEN }}
          max-lines-changed: 500`;
  
  const releaseExample = `name: Release Management

on:
  push:
    branches: [ main ]

jobs:
  release:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
        with:
          fetch-depth: 0
      
      - name: Set up Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '16'
          cache: 'npm'
      
      - name: Install dependencies
        run: npm ci
      
      - name: Build
        run: npm run build
      
      - name: Generate Release Notes
        id: release_notes
        uses: workflow-library/changelog-generator@v1
        with:
          github-token: \${{ secrets.GITHUB_TOKEN }}
      
      - name: Create Release
        uses: actions/create-release@v1
        env:
          GITHUB_TOKEN: \${{ secrets.GITHUB_TOKEN }}
        with:
          tag_name: v\${{ steps.release_notes.outputs.version }}
          release_name: Release v\${{ steps.release_notes.outputs.version }}
          body: \${{ steps.release_notes.outputs.changelog }}
          draft: false
          prerelease: false`;
  
  const monorepoExample = `name: Monorepo CI

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  changes:
    runs-on: ubuntu-latest
    outputs:
      packages: \${{ steps.filter.outputs.changes }}
    steps:
      - uses: actions/checkout@v3
      
      - name: Filter changes
        id: filter
        uses: workflow-library/monorepo-changes@v1
        with:
          config-path: '.github/monorepo.yml'
  
  build:
    needs: changes
    if: \${{ needs.changes.outputs.packages != '[]' }}
    runs-on: ubuntu-latest
    strategy:
      matrix:
        package: \${{ fromJson(needs.changes.outputs.packages) }}
    
    steps:
      - uses: actions/checkout@v3
      
      - name: Set up Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '16'
          cache: 'npm'
      
      - name: Install dependencies
        run: cd packages/\${{ matrix.package }} && npm ci
      
      - name: Test
        run: cd packages/\${{ matrix.package }} && npm test
      
      - name: Build
        run: cd packages/\${{ matrix.package }} && npm run build`;

  return (
    <div className="fade-in">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Advanced Workflow Examples</h1>
        <p className="text-gray-600">
          Explore real-world examples of GitHub Actions workflows for various use cases
        </p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 sticky top-4">
            <h3 className="font-medium text-gray-900 mb-4">Examples by Category</h3>
            
            <nav className="space-y-1">
              {categories.map((category) => (
                <button
                  key={category.id}
                  className={`w-full flex items-center px-3 py-2 text-sm rounded-md ${
                    activeCategory === category.id
                      ? 'bg-blue-50 text-blue-700 font-medium'
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                  onClick={() => setActiveCategory(category.id)}
                >
                  {category.name}
                </button>
              ))}
            </nav>
            
            <hr className="my-4 border-gray-200" />
            
            <div className="bg-blue-50 rounded-lg p-4">
              <h4 className="text-sm font-medium text-blue-800 mb-2">Need Help?</h4>
              <p className="text-xs text-blue-700 mb-3">
                Our team can help you customize these examples for your specific use case.
              </p>
              <button className="text-xs font-medium text-white bg-blue-600 hover:bg-blue-700 px-3 py-1 rounded">
                Contact Support
              </button>
            </div>
          </div>
        </div>
        
        <div className="lg:col-span-3">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            {activeCategory === 'ci-pipelines' && (
              <div>
                <div className="flex items-center mb-4">
                  <div className="bg-blue-100 p-2 rounded-md mr-4">
                    <Code size={24} className="text-blue-600" />
                  </div>
                  <h2 className="text-xl font-bold text-gray-900">CI Pipeline Examples</h2>
                </div>
                
                <p className="text-gray-700 mb-6">
                  Continuous Integration (CI) pipelines are essential for ensuring code quality and preventing integration issues. Here are some examples of CI pipelines for different languages and frameworks.
                </p>
                
                <div className="mb-8">
                  <h3 className="font-medium text-gray-900 mb-3">Node.js CI Pipeline</h3>
                  <CodeBlock
                    code={nodeCIExample}
                    language="yaml"
                    title="node-ci.yml"
                  />
                  <div className="mt-2 flex justify-end">
                    <button className="inline-flex items-center px-3 py-1 border border-transparent text-sm font-medium rounded-md text-blue-700 bg-blue-100 hover:bg-blue-200">
                      <ExternalLink size={14} className="mr-1" />
                      View More Details
                    </button>
                  </div>
                </div>
                
                <div className="bg-gray-50 rounded-lg p-6 border border-gray-200 mb-6">
                  <h3 className="font-medium text-gray-900 mb-4">Key Features</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <div className="bg-blue-100 rounded-full p-1 mr-3 flex-shrink-0 mt-0.5">
                        <div className="bg-blue-600 rounded-full w-2 h-2"></div>
                      </div>
                      <p className="text-gray-700"><strong>Matrix testing</strong> across multiple Node.js versions</p>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-blue-100 rounded-full p-1 mr-3 flex-shrink-0 mt-0.5">
                        <div className="bg-blue-600 rounded-full w-2 h-2"></div>
                      </div>
                      <p className="text-gray-700"><strong>Dependency caching</strong> for faster builds</p>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-blue-100 rounded-full p-1 mr-3 flex-shrink-0 mt-0.5">
                        <div className="bg-blue-600 rounded-full w-2 h-2"></div>
                      </div>
                      <p className="text-gray-700">Comprehensive <strong>lint, test, and build</strong> steps</p>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-blue-100 rounded-full p-1 mr-3 flex-shrink-0 mt-0.5">
                        <div className="bg-blue-600 rounded-full w-2 h-2"></div>
                      </div>
                      <p className="text-gray-700">Runs on both <strong>push to main</strong> and <strong>pull requests</strong></p>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-medium text-gray-900 mb-3">Additional CI Examples</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-white p-4 rounded-lg border border-gray-200 hover:border-blue-300 transition-colors cursor-pointer">
                      <h4 className="font-medium text-gray-900 mb-1">Python CI Pipeline</h4>
                      <p className="text-sm text-gray-600">
                        CI workflow for Python projects using pytest and tox.
                      </p>
                    </div>
                    <div className="bg-white p-4 rounded-lg border border-gray-200 hover:border-blue-300 transition-colors cursor-pointer">
                      <h4 className="font-medium text-gray-900 mb-1">Go CI Pipeline</h4>
                      <p className="text-sm text-gray-600">
                        CI workflow for Go projects with testing and linting.
                      </p>
                    </div>
                    <div className="bg-white p-4 rounded-lg border border-gray-200 hover:border-blue-300 transition-colors cursor-pointer">
                      <h4 className="font-medium text-gray-900 mb-1">Rust CI Pipeline</h4>
                      <p className="text-sm text-gray-600">
                        CI workflow for Rust projects using cargo test and clippy.
                      </p>
                    </div>
                    <div className="bg-white p-4 rounded-lg border border-gray-200 hover:border-blue-300 transition-colors cursor-pointer">
                      <h4 className="font-medium text-gray-900 mb-1">Frontend CI Pipeline</h4>
                      <p className="text-sm text-gray-600">
                        CI workflow for React/Vue projects with component testing.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            {activeCategory === 'deployment' && (
              <div>
                <div className="flex items-center mb-4">
                  <div className="bg-green-100 p-2 rounded-md mr-4">
                    <Code size={24} className="text-green-600" />
                  </div>
                  <h2 className="text-xl font-bold text-gray-900">Deployment Workflow Examples</h2>
                </div>
                
                <p className="text-gray-700 mb-6">
                  Automate your application deployments to various environments with these GitHub Actions workflow examples.
                </p>
                
                <div className="mb-8">
                  <h3 className="font-medium text-gray-900 mb-3">AWS S3 Deployment</h3>
                  <CodeBlock
                    code={deploymentExample}
                    language="yaml"
                    title="aws-deploy.yml"
                  />
                  <div className="mt-2 flex justify-end">
                    <button className="inline-flex items-center px-3 py-1 border border-transparent text-sm font-medium rounded-md text-green-700 bg-green-100 hover:bg-green-200">
                      <ExternalLink size={14} className="mr-1" />
                      View More Details
                    </button>
                  </div>
                </div>
                
                <div className="bg-gray-50 rounded-lg p-6 border border-gray-200 mb-6">
                  <h3 className="font-medium text-gray-900 mb-4">Best Practices</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <div className="bg-green-100 rounded-full p-1 mr-3 flex-shrink-0 mt-0.5">
                        <div className="bg-green-600 rounded-full w-2 h-2"></div>
                      </div>
                      <p className="text-gray-700">Use <strong>environment protection rules</strong> for production deployments</p>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-green-100 rounded-full p-1 mr-3 flex-shrink-0 mt-0.5">
                        <div className="bg-green-600 rounded-full w-2 h-2"></div>
                      </div>
                      <p className="text-gray-700">Store sensitive credentials in <strong>GitHub Secrets</strong></p>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-green-100 rounded-full p-1 mr-3 flex-shrink-0 mt-0.5">
                        <div className="bg-green-600 rounded-full w-2 h-2"></div>
                      </div>
                      <p className="text-gray-700">Implement <strong>staged deployments</strong> (dev → staging → production)</p>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-green-100 rounded-full p-1 mr-3 flex-shrink-0 mt-0.5">
                        <div className="bg-green-600 rounded-full w-2 h-2"></div>
                      </div>
                      <p className="text-gray-700">Add <strong>post-deployment checks</strong> to verify successful deployments</p>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-medium text-gray-900 mb-3">More Deployment Examples</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-white p-4 rounded-lg border border-gray-200 hover:border-green-300 transition-colors cursor-pointer">
                      <h4 className="font-medium text-gray-900 mb-1">Netlify Deployment</h4>
                      <p className="text-sm text-gray-600">
                        Deploy static sites to Netlify automatically.
                      </p>
                    </div>
                    <div className="bg-white p-4 rounded-lg border border-gray-200 hover:border-green-300 transition-colors cursor-pointer">
                      <h4 className="font-medium text-gray-900 mb-1">Kubernetes Deployment</h4>
                      <p className="text-sm text-gray-600">
                        Deploy containers to Kubernetes clusters.
                      </p>
                    </div>
                    <div className="bg-white p-4 rounded-lg border border-gray-200 hover:border-green-300 transition-colors cursor-pointer">
                      <h4 className="font-medium text-gray-900 mb-1">Heroku Deployment</h4>
                      <p className="text-sm text-gray-600">
                        Deploy applications to Heroku with review apps.
                      </p>
                    </div>
                    <div className="bg-white p-4 rounded-lg border border-gray-200 hover:border-green-300 transition-colors cursor-pointer">
                      <h4 className="font-medium text-gray-900 mb-1">Firebase Deployment</h4>
                      <p className="text-sm text-gray-600">
                        Deploy web apps and functions to Firebase.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            {activeCategory === 'pr-automation' && (
              <div>
                <div className="flex items-center mb-4">
                  <div className="bg-purple-100 p-2 rounded-md mr-4">
                    <Code size={24} className="text-purple-600" />
                  </div>
                  <h2 className="text-xl font-bold text-gray-900">Pull Request Automation</h2>
                </div>
                
                <p className="text-gray-700 mb-6">
                  Streamline your pull request workflow with these automation examples that handle labeling, reviewing, and quality checks.
                </p>
                
                <div className="mb-8">
                  <h3 className="font-medium text-gray-900 mb-3">PR Automation Workflow</h3>
                  <CodeBlock
                    code={prAutomationExample}
                    language="yaml"
                    title="pr-automation.yml"
                  />
                  <div className="mt-2 flex justify-end">
                    <button className="inline-flex items-center px-3 py-1 border border-transparent text-sm font-medium rounded-md text-purple-700 bg-purple-100 hover:bg-purple-200">
                      <ExternalLink size={14} className="mr-1" />
                      View More Details
                    </button>
                  </div>
                </div>
                
                <div className="mb-6">
                  <h3 className="font-medium text-gray-900 mb-3">Labeler Configuration</h3>
                  <CodeBlock
                    code={`# .github/labeler.yml
documentation:
  - changed-files:
    - any-glob-to-any-file: ['docs/**/*', '**/*.md']

frontend:
  - changed-files:
    - any-glob-to-any-file: ['src/components/**/*', 'src/pages/**/*']

backend:
  - changed-files:
    - any-glob-to-any-file: ['server/**/*', 'api/**/*']

dependencies:
  - changed-files:
    - any-glob-to-any-file: ['package.json', 'yarn.lock', 'go.mod']

tests:
  - changed-files:
    - any-glob-to-any-file: ['**/*.test.js', '**/*.spec.ts', 'tests/**/*']`}
                    language="yaml"
                    title=".github/labeler.yml"
                  />
                </div>
                
                <div className="bg-gray-50 rounded-lg p-6 border border-gray-200 mb-6">
                  <h3 className="font-medium text-gray-900 mb-4">PR Automation Benefits</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-white p-4 rounded-lg border border-gray-200">
                      <h4 className="font-medium text-gray-900 mb-2">Reduced Manual Work</h4>
                      <p className="text-sm text-gray-600">
                        Automate repetitive tasks like labeling, assigning, and initial reviews.
                      </p>
                    </div>
                    <div className="bg-white p-4 rounded-lg border border-gray-200">
                      <h4 className="font-medium text-gray-900 mb-2">Consistent Process</h4>
                      <p className="text-sm text-gray-600">
                        Ensure all PRs follow the same workflow and meet quality standards.
                      </p>
                    </div>
                    <div className="bg-white p-4 rounded-lg border border-gray-200">
                      <h4 className="font-medium text-gray-900 mb-2">Faster Reviews</h4>
                      <p className="text-sm text-gray-600">
                        Route PRs to the right reviewers based on content changes.
                      </p>
                    </div>
                    <div className="bg-white p-4 rounded-lg border border-gray-200">
                      <h4 className="font-medium text-gray-900 mb-2">Better Organization</h4>
                      <p className="text-sm text-gray-600">
                        Categorize PRs with labels for better tracking and filtering.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="font-medium text-gray-900 mb-3">Additional PR Automation Examples</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-white p-4 rounded-lg border border-gray-200 hover:border-purple-300 transition-colors cursor-pointer">
                      <h4 className="font-medium text-gray-900 mb-1">Stale PR Handling</h4>
                      <p className="text-sm text-gray-600">
                        Automatically flag and manage inactive pull requests.
                      </p>
                    </div>
                    <div className="bg-white p-4 rounded-lg border border-gray-200 hover:border-purple-300 transition-colors cursor-pointer">
                      <h4 className="font-medium text-gray-900 mb-1">PR Quality Gates</h4>
                      <p className="text-sm text-gray-600">
                        Enforce quality standards like test coverage and lint rules.
                      </p>
                    </div>
                    <div className="bg-white p-4 rounded-lg border border-gray-200 hover:border-purple-300 transition-colors cursor-pointer">
                      <h4 className="font-medium text-gray-900 mb-1">Auto-Generated Screenshots</h4>
                      <p className="text-sm text-gray-600">
                        Generate and attach UI screenshots to frontend PRs.
                      </p>
                    </div>
                    <div className="bg-white p-4 rounded-lg border border-gray-200 hover:border-purple-300 transition-colors cursor-pointer">
                      <h4 className="font-medium text-gray-900 mb-1">Comment Templates</h4>
                      <p className="text-sm text-gray-600">
                        Add structured comment templates to new PRs.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            {activeCategory === 'releases' && (
              <div>
                <div className="flex items-center mb-4">
                  <div className="bg-yellow-100 p-2 rounded-md mr-4">
                    <Code size={24} className="text-yellow-600" />
                  </div>
                  <h2 className="text-xl font-bold text-gray-900">Release Management</h2>
                </div>
                
                <p className="text-gray-700 mb-6">
                  Automate your release process with these workflows that handle versioning, changelogs, and publishing.
                </p>
                
                <div className="mb-8">
                  <h3 className="font-medium text-gray-900 mb-3">Automated Release Workflow</h3>
                  <CodeBlock
                    code={releaseExample}
                    language="yaml"
                    title="release-management.yml"
                  />
                  <div className="mt-2 flex justify-end">
                    <button className="inline-flex items-center px-3 py-1 border border-transparent text-sm font-medium rounded-md text-yellow-700 bg-yellow-100 hover:bg-yellow-200">
                      <ExternalLink size={14} className="mr-1" />
                      View More Details
                    </button>
                  </div>
                </div>
                
                <div className="bg-gray-50 rounded-lg p-6 border border-gray-200 mb-6">
                  <h3 className="font-medium text-gray-900 mb-4">Release Workflow Features</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <div className="bg-yellow-100 rounded-full p-1 mr-3 flex-shrink-0 mt-0.5">
                        <div className="bg-yellow-600 rounded-full w-2 h-2"></div>
                      </div>
                      <p className="text-gray-700"><strong>Automated version increments</strong> based on commit messages</p>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-yellow-100 rounded-full p-1 mr-3 flex-shrink-0 mt-0.5">
                        <div className="bg-yellow-600 rounded-full w-2 h-2"></div>
                      </div>
                      <p className="text-gray-700"><strong>Generated changelogs</strong> from commit history</p>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-yellow-100 rounded-full p-1 mr-3 flex-shrink-0 mt-0.5">
                        <div className="bg-yellow-600 rounded-full w-2 h-2"></div>
                      </div>
                      <p className="text-gray-700"><strong>GitHub Releases</strong> creation with proper tagging</p>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-yellow-100 rounded-full p-1 mr-3 flex-shrink-0 mt-0.5">
                        <div className="bg-yellow-600 rounded-full w-2 h-2"></div>
                      </div>
                      <p className="text-gray-700"><strong>Asset bundling</strong> for release attachments</p>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-medium text-gray-900 mb-3">Additional Release Examples</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-white p-4 rounded-lg border border-gray-200 hover:border-yellow-300 transition-colors cursor-pointer">
                      <h4 className="font-medium text-gray-900 mb-1">Semantic Versioning</h4>
                      <p className="text-sm text-gray-600">
                        Automate semantic versioning based on commit types.
                      </p>
                    </div>
                    <div className="bg-white p-4 rounded-lg border border-gray-200 hover:border-yellow-300 transition-colors cursor-pointer">
                      <h4 className="font-medium text-gray-900 mb-1">NPM Package Publishing</h4>
                      <p className="text-sm text-gray-600">
                        Publish packages to npm registry on release.
                      </p>
                    </div>
                    <div className="bg-white p-4 rounded-lg border border-gray-200 hover:border-yellow-300 transition-colors cursor-pointer">
                      <h4 className="font-medium text-gray-900 mb-1">Docker Image Publishing</h4>
                      <p className="text-sm text-gray-600">
                        Build and publish Docker images with release tags.
                      </p>
                    </div>
                    <div className="bg-white p-4 rounded-lg border border-gray-200 hover:border-yellow-300 transition-colors cursor-pointer">
                      <h4 className="font-medium text-gray-900 mb-1">Release Announcements</h4>
                      <p className="text-sm text-gray-600">
                        Publish release notes to Slack, Twitter, or other platforms.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            {activeCategory === 'monorepo' && (
              <div>
                <div className="flex items-center mb-4">
                  <div className="bg-indigo-100 p-2 rounded-md mr-4">
                    <Code size={24} className="text-indigo-600" />
                  </div>
                  <h2 className="text-xl font-bold text-gray-900">Monorepo Workflows</h2>
                </div>
                
                <p className="text-gray-700 mb-6">
                  Optimize CI/CD for monorepo projects with these specialized workflows that handle package-specific changes and dependencies.
                </p>
                
                <div className="mb-8">
                  <h3 className="font-medium text-gray-900 mb-3">Monorepo CI Workflow</h3>
                  <CodeBlock
                    code={monorepoExample}
                    language="yaml"
                    title="monorepo-ci.yml"
                  />
                  <div className="mt-2 flex justify-end">
                    <button className="inline-flex items-center px-3 py-1 border border-transparent text-sm font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200">
                      <ExternalLink size={14} className="mr-1" />
                      View More Details
                    </button>
                  </div>
                </div>
                
                <div className="mb-6">
                  <h3 className="font-medium text-gray-900 mb-3">Monorepo Configuration</h3>
                  <CodeBlock
                    code={`# .github/monorepo.yml
packages:
  - name: api
    path: packages/api
    dependencies:
      - common
    triggers:
      - packages/api/**
      - packages/common/**

  - name: web
    path: packages/web
    dependencies:
      - common
      - ui-components
    triggers:
      - packages/web/**
      - packages/common/**
      - packages/ui-components/**

  - name: mobile
    path: packages/mobile
    dependencies:
      - common
      - ui-components
    triggers:
      - packages/mobile/**
      - packages/common/**
      - packages/ui-components/**

  - name: common
    path: packages/common
    triggers:
      - packages/common/**

  - name: ui-components
    path: packages/ui-components
    dependencies:
      - common
    triggers:
      - packages/ui-components/**
      - packages/common/**`}
                    language="yaml"
                    title=".github/monorepo.yml"
                  />
                </div>
                
                <div className="bg-gray-50 rounded-lg p-6 border border-gray-200 mb-6">
                  <h3 className="font-medium text-gray-900 mb-4">Monorepo Workflow Benefits</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-white p-4 rounded-lg border border-gray-200">
                      <h4 className="font-medium text-gray-900 mb-2">Efficient CI Runs</h4>
                      <p className="text-sm text-gray-600">
                        Only build and test packages affected by changes, saving CI time and resources.
                      </p>
                    </div>
                    <div className="bg-white p-4 rounded-lg border border-gray-200">
                      <h4 className="font-medium text-gray-900 mb-2">Dependency Awareness</h4>
                      <p className="text-sm text-gray-600">
                        Automatically detect and process dependent packages when dependencies change.
                      </p>
                    </div>
                    <div className="bg-white p-4 rounded-lg border border-gray-200">
                      <h4 className="font-medium text-gray-900 mb-2">Parallel Processing</h4>
                      <p className="text-sm text-gray-600">
                        Run builds for multiple packages simultaneously when they're independent.
                      </p>
                    </div>
                    <div className="bg-white p-4 rounded-lg border border-gray-200">
                      <h4 className="font-medium text-gray-900 mb-2">Targeted Deployments</h4>
                      <p className="text-sm text-gray-600">
                        Deploy only the packages that have been updated, rather than the entire repository.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="font-medium text-gray-900 mb-3">Additional Monorepo Examples</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-white p-4 rounded-lg border border-gray-200 hover:border-indigo-300 transition-colors cursor-pointer">
                      <h4 className="font-medium text-gray-900 mb-1">Lerna Integration</h4>
                      <p className="text-sm text-gray-600">
                        Workflows that integrate with Lerna for JavaScript monorepos.
                      </p>
                    </div>
                    <div className="bg-white p-4 rounded-lg border border-gray-200 hover:border-indigo-300 transition-colors cursor-pointer">
                      <h4 className="font-medium text-gray-900 mb-1">Nx Workspace CI</h4>
                      <p className="text-sm text-gray-600">
                        Optimized CI/CD for Nx-based monorepos with caching.
                      </p>
                    </div>
                    <div className="bg-white p-4 rounded-lg border border-gray-200 hover:border-indigo-300 transition-colors cursor-pointer">
                      <h4 className="font-medium text-gray-900 mb-1">Gradle Multi-Project</h4>
                      <p className="text-sm text-gray-600">
                        Workflows for Java/Kotlin monorepos using Gradle.
                      </p>
                    </div>
                    <div className="bg-white p-4 rounded-lg border border-gray-200 hover:border-indigo-300 transition-colors cursor-pointer">
                      <h4 className="font-medium text-gray-900 mb-1">Monorepo Versioning</h4>
                      <p className="text-sm text-gray-600">
                        Manage versioning across multiple packages in a monorepo.
                      </p>
                    </div>
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

export default Examples;