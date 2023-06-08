import { create } from 'zustand'

import { Task } from "../model/task"

interface TaskState {
    tasks: Task[];
    deletedTasks: Task[];
}

const initialState: TaskState = {
    tasks: [],
    deletedTasks: [],
}

interface ITaskStoreState extends TaskState {
    updateState: (...args: any[]) => any;
}

const useTaskStore = create<ITaskStoreState>()((set) => ({
    ...initialState,
    updateState: (updatedState: any) => {
        console.log("%c  iN sTORE ", "color: hotpink", updatedState)
        return set(state => ({tasks: [ ...state.tasks, ...updatedState ]}))
    },
}))

export default useTaskStore;