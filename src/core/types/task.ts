export type Task = {
  id: number;
  name: string;
  description: string;
  files: any[];
  priority: 'low' | 'normal' | 'high';
  type: 'bug' | 'feature' | 'improvement';
  status: string;
};
