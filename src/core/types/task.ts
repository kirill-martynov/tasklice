export type Task = {
  id: number;
  name: string;
  description: string;
  files: string[];
  priority: 'low' | 'normal' | 'high';
  type: 'bug' | 'feature' | 'improvement';
  status: string;
};
