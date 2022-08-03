export type Task = {
  id: string;
  name: string;
  description: string;
  files: string[];
  priority: 'low' | 'normal' | 'high';
  type: 'task' | 'bug' | 'feature' | 'improvement';
  status: string;
};
