export interface Workflow {
  id: string;
  name: string;
  description: string;
  language: string;
  stars: number;
  forks: number;
  tags: string[];
  filePath: string;
  content: string;
}