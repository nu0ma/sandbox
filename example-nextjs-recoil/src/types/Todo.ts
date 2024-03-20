export type Todo = {
  id: number;
  text: string;
  isComplete: boolean;
};

export type Filter = 'Show All' | 'Show Completed' | 'Show Uncompleted';
