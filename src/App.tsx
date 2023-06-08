import { Box } from "@mui/material";
import "./App.css";
import { Column } from "./components/Column";
import { SearchBar } from "./components/SearchBar";
import Button from "@mui/material/Button";
import { useGetTasks } from "./services/taskService";
import { useEffect } from "react";
import useTaskStore from "./store/store";

const App: React.FC = () => {
  const { data, isLoading: dataLoading } = useGetTasks();
  const { updateState } = useTaskStore();

  useEffect(() => {
    if (data?.length) {
      console.log("%c data = ", "color: yellow", data);
      updateState(data);
    }
  }, [data?.length]);


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
          <Button variant="outlined" color="success">
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
    </div>
  );
};

export default App;
