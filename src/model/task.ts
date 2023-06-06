
export interface Task {
    id: number;
    title: string;
    desc: string;
    storyPoints: number;
    status: string; // should be an ENUM
}