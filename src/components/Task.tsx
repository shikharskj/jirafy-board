import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { Avatar } from "@mui/material";
import BorderColorOutlinedIcon from "@mui/icons-material/BorderColorOutlined";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import { Task as TaskType } from "../model/task";
import useTaskStore from "../store/store";
import ConfirmDeleteModal from "./ConfirmDeleteModal";
import { useState } from "react";

export const Task = ({ taskItem }: { taskItem: TaskType }) => {
  const { setIsEdit } = useTaskStore();
  const [open, setOpen] = useState<boolean>(false);


  const editClickHandler = (task: TaskType) => {
    setIsEdit(true, task);
  }

  const deleteClickHandler = () => {
    setOpen(true);
  }
  const handleClose = () => {
    setOpen(false);
  }

  return (
    <Card variant="outlined" className="task">
      <CardContent>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography variant="h6" component="div">
            {taskItem.title}
          </Typography>
          <Avatar alt={taskItem.asignee} src="/static/images/avatar/1.jpg" />
        </Box>
      </CardContent>
      <CardActions
        sx={{
          mt: -2,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          px: 2,
          pt: 0.25,
        }}
      >
        <Box sx={{ display: "flex", gap: 1 }}>
          <Box>SP: {taskItem.sp}</Box> |
          <Box>Priority: {taskItem.priority}</Box>
        </Box>
        <Box sx={{ display: "flex", gap: 1 }}>

          <IconButton size="small" onClick={() => editClickHandler(taskItem)}>
            <BorderColorOutlinedIcon color="primary" />
          </IconButton>

          <IconButton size="small" onClick={deleteClickHandler}>
            <DeleteOutlinedIcon color="primary" />
          </IconButton>
          
        </Box>
      </CardActions>
      <ConfirmDeleteModal open={open} onClose={handleClose}  data={taskItem}/>
    </Card>
  );
};
