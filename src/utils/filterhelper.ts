import { IFilterState, Task } from "../model/task";

export const applyFilters = (tasks: Task[], filters: IFilterState) => {
  return tasks
    ?.filter((rawTask) =>
      filters.status ? rawTask.status === filters.status : rawTask
    )
    ?.filter((filteredTask) =>
      filters.asignee ? filteredTask.asignee === filters.asignee : filteredTask
    );
};
