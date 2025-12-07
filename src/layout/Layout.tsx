import { Stack } from "@mui/material";
import Board from "../components/Board";
import { Fab } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import CreateTodo from "../components/CreateTodo";

const statusConfig = [
  { status: "todo", bg: "#eff6ff", color: "#3b82f6", title: "Yapılacak" },
  {
    status: "in-progress",
    bg: "#fff7ed",
    color: "#f59e0b",
    title: "Devam Ediyor",
  },
  { status: "done", bg: "#f0fdf4", color: "#10b981", title: "Tamamlandı" },
] as const;
export type StatusConfig = typeof statusConfig;

const Layout = () => {
  return (
    <>
      <Stack
        direction="row"
        spacing={3}
        sx={{
          p: 3,
        }}
      >
        <Board
          title="Yapılacaklar"
          status="todo"
          color={[statusConfig[0].color]}
        />
        <Board
          title="Devam Edenler"
          status="in-progress"
          color={[statusConfig[1].color]}
        />
        <Board
          title="Tamamlananlar"
          status="done"
          color={[statusConfig[2].color]}
        />
      </Stack>
      <Fab
        color="primary"
        aria-label="add"
        sx={{ position: "fixed", bottom: 32, right: 32, zIndex: 1000 }}
      >
        <AddIcon />
      </Fab>
      <CreateTodo config={statusConfig} />
    </>
  );
};

export default Layout;
