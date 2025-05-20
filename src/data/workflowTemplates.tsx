import { Workflow } from '../types/Workflow';

export const workflowTemplates: Workflow[] = [
  {
    id: 'node-ci',
    name: 'Node.js CI Pipeline',
    description: 'Complete CI workflow for Node.js projects with testing, linting, and building',
    language: 'JavaScript',
    stars: 245,
    forks: 89,
    tags: ['CI', 'Testing', 'Linting', 'Node.js'],
    filePath: 'workflows/node-ci.yml',
    content: `name: Node.js CI

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
      
      - name: Use Node.js \${{ matrix.node-version }}
        uses: actions/setup-node@v3
        with:
          node-version: \${{ matrix.node-version }}
          cache: 'npm'
      
      - name: Install dependencies
        run: npm ci
      
      - name: Lint
        run: npm run lint
      
      - name: Test
        run: npm test
        
      - name: Build
        run: npm run build`
  },
  {
    id: 'python-ci',
    name: 'Python CI Pipeline',
    description: 'CI workflow for Python projects with pytest, tox, and flake8',
    language: 'Python',
    stars: 189,
    forks: 63,
    tags: ['CI', 'Testing', 'Linting', 'Python'],
    filePath: 'workflows/python-ci.yml',
    content: ''
  },
  {
    id: 'go-ci',
    name: 'Go Build & Test',
    description: 'Comprehensive CI workflow for Go projects with testing, linting, and security checks',
    language: 'Go',
    stars: 156,
    forks: 42,
    tags: ['CI', 'Testing', 'Go', 'Security'],
    filePath: 'workflows/go-ci.yml',
    content: ''
  },
  {
    id: 'rust-ci',
    name: 'Rust CI Pipeline',
    description: 'CI workflow for Rust projects with cargo test, clippy, and cross-compilation',
    language: 'Rust',
    stars: 127,
    forks: 38,
    tags: ['CI', 'Testing', 'Rust', 'Cross-compilation'],
    filePath: 'workflows/rust-ci.yml',
    content: ''
  },
  {
    id: 'node-deploy',
    name: 'Node.js AWS Deployment',
    description: 'Deploy Node.js applications to AWS with staging and production environments',
    language: 'JavaScript',
    stars: 178,
    forks: 54,
    tags: ['Deployment', 'AWS', 'Node.js', 'Production'],
    filePath: 'workflows/node-aws-deploy.yml',
    content: ''
  },
  {
    id: 'docker-build',
    name: 'Docker Build & Push',
    description: 'Build and push Docker images to container registries with caching',
    language: 'JavaScript',
    stars: 212,
    forks: 71,
    tags: ['Docker', 'Container', 'Registry', 'CI'],
    filePath: 'workflows/docker-build.yml',
    content: ''
  },
  {
    id: 'python-package',
    name: 'Python Package Publishing',
    description: 'Build and publish Python packages to PyPI with version bumping',
    language: 'Python',
    stars: 142,
    forks: 47,
    tags: ['Publishing', 'PyPI', 'Package', 'Python'],
    filePath: 'workflows/python-package.yml',
    content: ''
  },
  {
    id: 'go-release',
    name: 'Go Release Builder',
    description: 'Build and release Go binaries for multiple platforms',
    language: 'Go',
    stars: 168,
    forks: 52,
    tags: ['Release', 'Binary', 'Cross-platform', 'Go'],
    filePath: 'workflows/go-release.yml',
    content: ''
  },
  {
    id: 'rust-security',
    name: 'Rust Security Scanner',
    description: 'Security scanning for Rust projects using cargo-audit and other tools',
    language: 'Rust',
    stars: 115,
    forks: 34,
    tags: ['Security', 'Scanning', 'Rust', 'Audit'],
    filePath: 'workflows/rust-security.yml',
    content: ''
  }
];