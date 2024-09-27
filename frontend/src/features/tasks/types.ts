import { User } from '../users/types';
import { Project } from '../projects/types';

export {};

export interface Task {
    id: number;
    title: string;
    description: string;
    dueDate: Date;
    status: 'new' | 'pending' | 'in_progress' | 'completed' | 'discarded';
    assignedTo: User;
    project: Project;
}
  