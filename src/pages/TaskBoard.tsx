import { Box } from "@mui/material";
import Button from "@mui/material/Button";
import { useGetTasks } from "../services/taskService";
import { useEffect, useState } from "react";
import { SearchBar } from "../components/SearchBar";
import { Column } from "../components/Column";
import { AddEditTaskModal } from "../components/AddEditTaskModal";
import useTaskStore from "../store/store";
import { Link } from "react-router-dom";
import Filters from "../components/Filters";

const TaskBoard = () => {
  const { data, isLoading: dataLoading } = useGetTasks();
  const { updateState, isEdit, dataToBeUpdated, setIsEdit } = useTaskStore();

  const [open, setOpen] = useState<boolean>(false);

  const handleClickOpen = (): void => {
    setOpen(true);
  };

  const handleClose = (): void => {
    setOpen(false);
    if (isEdit) {
      setIsEdit(false, null);
    }
  };

  useEffect(() => {
    if (data) {
      updateState(data);
    }
  }, [data]);

  useEffect(() => {
    if (isEdit) {
      setOpen(true);
    }
  }, [isEdit]);
  return (
    <div className="main">
      <Box
        sx={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          my: "1rem",
        }}
      >
        <Box sx={{ width: "80%", display: 'flex' }}>
          <SearchBar />
          <Filters />
        </Box>
        <Box
          sx={{
            display: "flex",
            gap: 2,
            width: "25%",
            justifyContent: "end",
          }}
        >
          <Button variant="outlined" color="success" onClick={handleClickOpen}>
            Create Task
          </Button>
          <Button variant="outlined" color="error">
            <Link to="/deleted-tasks">Deleted Task</Link>
          </Button>
        </Box>
      </Box>
      <div className="container">
        <Column status="todo" />
        <Column status="in-progress" />
        <Column status="done" />
      </div>
      {/* Add Edit Task Modal  */}
      <AddEditTaskModal
        open={open}
        onClose={handleClose}
        data={isEdit ? dataToBeUpdated : null}
      />
    </div>
  );
};

export default TaskBoard;


