
export interface Task {
    id: number;
    title: string;
    asignee: string;
    sp: number;
    priority: string;
    status: "todo" | "in-progress" | "done"; // should be an ENUM
}