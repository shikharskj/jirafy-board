import useTaskStore from "../store/store";
import { shallow } from "zustand/shallow";
import { Task as TaskComponent } from "./Task";
import { Task as TaskType } from "../model/task";
import { Box } from "@mui/material";
import { applyFilters } from "../utils/filterhelper";
import { useEditTask } from "../services/taskService";

export const Column = ({ status }: any) => {
  const { searchText, filters } = useTaskStore();
  const { mutateAsync: updateTask, isLoading: updateLoading } = useEditTask();

  const tasks = useTaskStore(
    (state) =>
      applyFilters(state.tasks, filters)?.filter(
        (task) => task.status === status
      ),
    shallow
  );

  const allowDrop = (e: React.DragEvent<HTMLDivElement>): void => {
    e.preventDefault();
  };

  const dragDropped = (e: React.DragEvent<HTMLDivElement>): void => {
    let draggedTask = JSON.parse(e.dataTransfer.getData("draggedTask"));
    updateTask({
      id: draggedTask.id,
      status,
      priority: draggedTask.priority,
      sp: draggedTask.sp,
      asignee: draggedTask.asignee,
      title: draggedTask.title
    });
  };

  return (
    <div
      className="column"
      onDragOver={(e) => allowDrop(e)}
      onDrop={(e) => dragDropped(e)}
    >
      <Box sx={{ ml: 1 }}>
        {status} - {tasks?.length}
      </Box>

      {tasks
        ?.filter((item) =>
          searchText === ""
            ? item
            : item.title.toLowerCase().includes(searchText)
        )
        ?.map((taskItem: TaskType) => {
          return <TaskComponent taskItem={taskItem} />;
        })}
    </div>
  );
};
