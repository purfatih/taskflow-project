import { Chip, Paper, Stack, Typography } from "@mui/material";
import TaskCard from "./TaskCard";
import CircleIcon from "@mui/icons-material/Circle";
interface BoardProps {
  title: string;
  status: string;
  color: string[];
}

const Board = ({ title, status, color }: BoardProps) => {
  return (
    <Paper
      elevation={0}
      sx={{
        p: "20px",
        minHeight: "calc(100vh - 48px)",
        bgcolor: "#fafafa",
        borderRadius: "12px",
        flex: 1,
        display: "flex",
        flexDirection: "column",
        boxSizing: "border-box",
        border: "1px solid #e5e7eb",
      }}
    >
      <Stack spacing={"20px"}>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Stack direction="row" alignItems="center" spacing={1}>
            <CircleIcon sx={{ fontSize: 12, color: color }} />
            <Typography variant="body1" sx={{ fontWeight: "600" }}>
              {title}
            </Typography>
          </Stack>
          <Chip
            label="3"
            size="small"
            variant="outlined"
            color="default"
            sx={{ bgcolor: "background.default" }}
          />
        </Stack>
        <TaskCard status={status} />
      </Stack>
    </Paper>
  );
};

export default Board;
