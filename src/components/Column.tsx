import useTaskStore from "../store/store";
import { shallow } from "zustand/shallow";
import { Task as TaskComponent } from "./Task";
import { Task as TaskType } from "../model/task";
import { Box } from "@mui/material";

export const Column = ({ status }: any) => {

  const tasks = useTaskStore(
    (state) => state.tasks?.filter((task) => task.status === status),
    shallow
  );

  return (
    <div className="column">
      <Box sx={{ ml: 1}}>
        {status} - {tasks?.length}
      </Box>

      {tasks?.map((taskItem: TaskType) => {
        return <TaskComponent taskItem={taskItem} />;
      })}
    </div>
  );
};
