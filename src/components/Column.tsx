import useTaskStore from "../store/store";
import { shallow } from "zustand/shallow";
import { Task as TaskComponent } from "./Task";
import { Task as TaskType } from "../model/task";

export const Column = ({ status }: any) => {

  const tasks = useTaskStore(
    (state) => state.tasks?.filter((task) => task.status === status),
    shallow
  );

  return (
    <div className="column">
      <div>
        {status} - {tasks?.length}
      </div>

      {tasks?.map((taskItem: TaskType) => {
        return <TaskComponent taskItem={taskItem} />;
      })}
    </div>
  );
};
