import { ReactNode } from 'react';

export interface Action {
  id: string;
  name: string;
  description: string;
  icon: ReactNode;
  stars: number;
  downloads: number;
  tags: string[];
  filePath: string;
  content: string;
}