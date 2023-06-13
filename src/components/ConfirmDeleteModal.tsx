import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import {
  Button,
  DialogContentText,

} from "@mui/material";
import { Task } from "../model/task";
import { useDeleteTask } from "../services/taskService";
import useTaskStore from "../store/store";

type IModalProps = {
  open: boolean;
  onClose: () => void;
  data: Task;
};

const ConfirmDeleteModal = ({ open, onClose, data }: IModalProps) => {
  const { setDeletedTask } = useTaskStore();
  const { mutate: deleteTask, isLoading: isDeleteLoading } = useDeleteTask();

  const onConfirm = (task: Task) => {
    setDeletedTask(task);
    deleteTask({...task})
  }

  return (
    <Dialog
      open={open}
      onClose={() => {
        onClose();
      }}
    >
      <DialogTitle>Confirm Delete</DialogTitle>
      <DialogContent>
      <DialogContentText>
            Are you sure you want delete?
          </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button
          onClick={() => {
            onClose();
          }}
        >
          Cancel
        </Button>
          <Button
            onClick={() => {
              console.log("tasks to delete = ", data);
              onConfirm(data)
              onClose();
            }}
          >
            Confirm
          </Button>
      </DialogActions>
    </Dialog>
  )
}

export default ConfirmDeleteModal