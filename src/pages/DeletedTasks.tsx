import { DataGrid, GridColDef } from "@mui/x-data-grid";
import useTaskStore from "../store/store";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const DeletedTasks = () => {
  const { deletedTasks } = useTaskStore();

  const columns: GridColDef[] = [
    { field: "title", headerName: "Tasks", width: 450 },
    { field: "priority", headerName: "Priority", width: 150 },
    { field: "status", headerName: "Status", width: 250 },
    { field: "sp", headerName: "Story Points", width: 150 },
    { field: "asignee", headerName: "Assignee", width: 250 },
  ];

  return (
    <div className="table-container">
      <div>
        <Button variant="outlined" color="success">
          <Link to="/">
            <ArrowBackIcon />
            Task Board
          </Link>
        </Button>
      </div>
      {deletedTasks?.length ? (
        <>
          <DataGrid
            rows={[...deletedTasks]}
            columns={columns}
            initialState={{
              pagination: {
                paginationModel: { page: 0, pageSize: 5 },
              },
            }}
            pageSizeOptions={[5, 10]}
            checkboxSelection
          />
        </>
      ) : (
        <Typography variant="h2" color="primary">
          {" "}
          No Tasks deleted{" "}
        </Typography>
      )}
    </div>
  );
};

export default DeletedTasks;
