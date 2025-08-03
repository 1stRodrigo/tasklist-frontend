//Define a type Tag
export type Tag = {
    id: string;
    name: string;
    userId: string;
}

//Define a type task with all fields of API
export type Task = {
    id: string;
    title: string;
    description: string;
    status: 'PENDING' | 'IN_PROGRESS' | 'COMPLETED';
    priority: 'LOW' | 'MEDIUM' | 'HIGH';
    due_date: string;
    created_at: string;
    update_at: string;
    authorId: string;
    tags: {
        taskId: string;
        tagId: string;
        tag: Tag;
    }[];
};

//Define a shape of state of  our tasks module, now with a type 'Task' completed
export interface TaskState {
    task: Task[];
    isLoading: boolean;
    error: string | null;
}
