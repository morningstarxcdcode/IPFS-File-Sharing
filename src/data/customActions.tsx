import React from 'react';
import { GitPullRequest, Tag, Shield, GitMerge, PenTool as Tool, FileText, Server, GitBranch } from 'lucide-react';
import { Action } from '../types/Action';

export const customActions: Action[] = [
  {
    id: 'auto-label',
    name: 'Auto Label Action',
    description: 'Automatically label pull requests based on file changes',
    icon: <Tag size={24} className="text-green-500" />,
    stars: 178,
    downloads: 12453,
    tags: ['PR Automation', 'Labeling'],
    filePath: 'actions/auto-label/action.yml',
    content: ''
  },
  {
    id: 'auto-assign',
    name: 'Auto Assign Reviewers',
    description: 'Automatically assign reviewers to pull requests based on file paths',
    icon: <GitPullRequest size={24} className="text-blue-500" />,
    stars: 156,
    downloads: 10872,
    tags: ['PR Automation', 'Code Review'],
    filePath: 'actions/auto-assign/action.yml',
    content: ''
  },
  {
    id: 'security-scan',
    name: 'Security Scanner',
    description: 'Run security scans on your code and dependencies',
    icon: <Shield size={24} className="text-red-500" />,
    stars: 203,
    downloads: 15678,
    tags: ['Security', 'Scanning'],
    filePath: 'actions/security-scan/action.yml',
    content: ''
  },
  {
    id: 'auto-merge',
    name: 'Auto Merge Action',
    description: 'Automatically merge pull requests when all checks pass',
    icon: <GitMerge size={24} className="text-purple-500" />,
    stars: 142,
    downloads: 9254,
    tags: ['PR Automation', 'Merging'],
    filePath: 'actions/auto-merge/action.yml',
    content: ''
  },
  {
    id: 'dependency-update',
    name: 'Dependency Updater',
    description: 'Automatically update dependencies and create pull requests',
    icon: <Tool size={24} className="text-orange-500" />,
    stars: 189,
    downloads: 13452,
    tags: ['Dependencies', 'Maintenance'],
    filePath: 'actions/dependency-update/action.yml',
    content: ''
  },
  {
    id: 'docs-generator',
    name: 'Documentation Generator',
    description: 'Generate documentation from code and comments',
    icon: <FileText size={24} className="text-teal-500" />,
    stars: 112,
    downloads: 7859,
    tags: ['Documentation', 'Generation'],
    filePath: 'actions/docs-generator/action.yml',
    content: ''
  },
  {
    id: 'deploy-notifier',
    name: 'Deployment Notifier',
    description: 'Send notifications to Slack, Teams, or Discord after deployments',
    icon: <Server size={24} className="text-green-500" />,
    stars: 167,
    downloads: 11234,
    tags: ['Deployment', 'Notification'],
    filePath: 'actions/deploy-notifier/action.yml',
    content: ''
  },
  {
    id: 'branch-cleanup',
    name: 'Branch Cleanup',
    description: 'Automatically delete branches after they\'ve been merged',
    icon: <GitBranch size={24} className="text-blue-500" />,
    stars: 138,
    downloads: 9876,
    tags: ['Maintenance', 'Git'],
    filePath: 'actions/branch-cleanup/action.yml',
    content: ''
  },
  {
    id: 'issue-labeler',
    name: 'Issue Labeler',
    description: 'Automatically label issues based on content and keywords',
    icon: <Tag size={24} className="text-yellow-500" />,
    stars: 121,
    downloads: 8543,
    tags: ['Issue Management', 'Labeling'],
    filePath: 'actions/issue-labeler/action.yml',
    content: ''
  }
];