import { create } from 'zustand'

import { Task } from "../model/task"

interface TaskState {
    tasks: Task[];
    deletedTasks: Task[];
    isEdit: boolean,
    dataToBeUpdated: Task | null,
}

const initialState: TaskState = {
    tasks: [],
    deletedTasks: [],
    isEdit: false,
    dataToBeUpdated: null,
}

interface ITaskStoreState extends TaskState {
    updateState: (...args: any[]) => any;
    setIsEdit: (...args: any[]) => any;
    setDeletedTask: (...args: any[]) => any;
}

const useTaskStore = create<ITaskStoreState>()((set) => ({
    ...initialState,
    updateState: (updatedState: any) => {
        console.log("%c  iN sTORE ", "color: hotpink", updatedState)
        return set(state => ({tasks: [ ...updatedState ]}))
    },
    setIsEdit: (isEdit: boolean, data: Task | null) => {
        return set(state => ({...state, isEdit, dataToBeUpdated: data && {...data }}))
    },
    setDeletedTask: (deletedTask: Task) => {
        return set(state => ({...state, deletedTasks: [...state.deletedTasks, {...deletedTask}]}))
    } 
}))

export default useTaskStore;