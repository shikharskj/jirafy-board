import { Box } from "@mui/material";
import "./App.css";
import { Column } from "./components/Column";
import { SearchBar } from "./components/SearchBar";
import Button from "@mui/material/Button";
import { useCreateTask, useGetTasks } from "./services/taskService";
import { useEffect, useState } from "react";
import useTaskStore from "./store/store";
import { AddEditTaskModal } from "./components/AddEditTaskModal";

const App: React.FC = () => {
  const { data, isLoading: dataLoading } = useGetTasks();
  const { updateState, isEdit, dataToBeUpdated, setIsEdit } = useTaskStore();

  const [open, setOpen] = useState<boolean>(false);

  const handleClickOpen = (): void => {
    setOpen(true);
  };

  const handleClose = (): void => {
    setOpen(false);
    if(isEdit) {
      setIsEdit(false, null);
    }
  };

  useEffect(() => {
    if (data) {
      console.log("%c data = ", "color: yellow", data);
      updateState(data);
    }
  }, [data]);

  useEffect(() => {
    if(isEdit) {
      setOpen(true);
    }
  }, [isEdit])


  return (
    <div className="App">
      <span className="heading">Jirafy Board</span>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          my: "1rem",
        }}
      >
        <Box sx={{ width: "50%" }}>
          <SearchBar />
        </Box>
        <Box
          sx={{
            display: "flex",
            gap: 2,
            width: "50%",
            justifyContent: "end",
          }}
        >
          <Button variant="outlined" color="success" onClick={handleClickOpen}>
            Create Task
          </Button>
          <Button variant="outlined" color="error">
            Deleted Task
          </Button>
        </Box>
      </Box>
      <div className="container">
        <Column status="todo" />
        <Column status="in-progress" />
        <Column status="done" />
      </div>
      {/* Add Edit Task Modal  */}
      <AddEditTaskModal open={open} onClose={handleClose} data={isEdit ? dataToBeUpdated : null}/>
    </div>
  );
};

export default App;
