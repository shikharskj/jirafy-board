import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import { Task } from "../model/task";
import { ChangeEvent, useEffect, useState } from "react";
import { useCreateTask, useEditTask } from "../services/taskService";

type IModalProps = {
  open: boolean;
  onClose: () => void;
  data?: Task | null;
};

const defaultState: Task = {
  id: (new Date()).getTime()*Math.random(),
  title: "",
  asignee: "",
  priority: "p0",
  status: "todo",
  sp: 1,
};

export const AddEditTaskModal = ({ open, onClose, data }: IModalProps) => {
  const { mutateAsync: createTask, isLoading: createLoading } = useCreateTask();
  const { mutateAsync: updateTask, isLoading: updateLoading } = useEditTask();
  const [task, setTask] = useState<Task>({ ...defaultState });

  const handleChange = (
    event: SelectChangeEvent | ChangeEvent<HTMLInputElement>
  ) => {
    setTask({ ...task, [event.target.name]: event.target.value });
  };

  useEffect(() => {
    if (data) {
      setTask({ ...data });
    }
  }, [data]);

  return (
    <Dialog
      open={open}
      onClose={() => {
        setTask({ ...defaultState });
        onClose();
      }}
    >
      <DialogTitle>{data ? "Update Task" : "Create Task"}</DialogTitle>
      <DialogContent>
        <form>
          <Box>
            <TextField
              autoFocus
              margin="dense"
              id="title"
              label="Task Name"
              type="text"
              fullWidth
              variant="standard"
              required
              value={task.title}
              name="title"
              onChange={(e: ChangeEvent<HTMLInputElement>) => handleChange(e)}
            />
          </Box>
          <FormControl variant="standard" fullWidth>
            <InputLabel id="priority">Priority</InputLabel>
            <Select
              labelId="priority"
              id="priority"
              value={task.priority}
              label="Priority"
              name="priority"
              onChange={handleChange}
            >
              <MenuItem value={"p0"}>p0</MenuItem>
              <MenuItem value={"p1"}>p1</MenuItem>
              <MenuItem value={"p2"}>p2</MenuItem>
              <MenuItem value={"p3"}>p3</MenuItem>
            </Select>
          </FormControl>
          <FormControl variant="standard" fullWidth>
            <InputLabel id="asignee">Asignee</InputLabel>
            <Select
              labelId="asignee"
              id="asignee"
              value={task.asignee}
              label="Asignee"
              name="asignee"
              required
              onChange={handleChange}
            >
              <MenuItem value={"Vaibhav"}>Vaibhav</MenuItem>
              <MenuItem value={"Shikhar"}>Shikhar</MenuItem>
              <MenuItem value={"Priya"}>Priya</MenuItem>
              <MenuItem value={"Rohit"}>Rohit</MenuItem>
            </Select>
          </FormControl>
          <TextField
            margin="dense"
            id="sp"
            label="Story Points"
            required
            type="number"
            value={task.sp}
            fullWidth
            variant="standard"
            name="sp"
            onChange={(e: ChangeEvent<HTMLInputElement>) => handleChange(e)}
          />

          <FormControl variant="standard" fullWidth>
            <InputLabel id="status">Status</InputLabel>
            <Select
              labelId="status"
              id="status"
              value={task.status}
              label="Status"
              name="status"
              onChange={handleChange}
            >
              <MenuItem value={"todo"}>TODO</MenuItem>
              <MenuItem value={"in-progress"}>IN-PROGRESS</MenuItem>
              <MenuItem value={"done"}>Completed</MenuItem>
            </Select>
          </FormControl>
        </form>
      </DialogContent>
      <DialogActions>
        <Button
          onClick={() => {
            setTask({ ...defaultState, id: (new Date()).getTime()*Math.random() });
            onClose();
          }}
        >
          Cancel
        </Button>
        {data ? (
          <Button
            onClick={() => {
              console.log("tasks to update = ", task);
              updateTask({...task})
              onClose();
            }}
          >
            Update
          </Button>
        ) : (
          <Button
            onClick={() => {
              console.log("tasks to create = ", task);
              createTask({ ...task });
              onClose();
            }}
          >
            Create
          </Button>
        )}
      </DialogActions>
    </Dialog>
  );
};
