import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { Avatar } from "@mui/material";
import BorderColorOutlinedIcon from "@mui/icons-material/BorderColorOutlined";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";

export const Task: React.FC = () => {
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
            Title
          </Typography>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        </Box>

        <Typography variant="body2">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography>
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
        <Box>SP: 3</Box>
        <Box sx={{ display: "flex", gap: 1 }}>
          <IconButton size="small">
            <BorderColorOutlinedIcon color="primary" />
          </IconButton>
          <IconButton size="small">
            <DeleteOutlinedIcon color="primary" />
          </IconButton>
        </Box>
      </CardActions>
    </Card>
  );
};
