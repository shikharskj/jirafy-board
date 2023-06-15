import "./App.css";
import DeletedTasks from "./pages/DeletedTasks";
import TaskBoard from "./pages/TaskBoard";
import { Routes, Route } from "react-router-dom";

const App: React.FC = () => {
  return (
    <div className="App">
      <span className="heading">Jirafy Board</span>
      <Routes>
        <Route path="/" element={<TaskBoard />} />
        <Route path="/deleted-tasks" element={<DeletedTasks />} />
      </Routes>
    </div>
  );
};

export default App;
