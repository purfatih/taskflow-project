import { Chip, IconButton, Stack, Typography } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";

interface Props {
  status: string;
}
const TaskCard = (props: Props) => {
  const { status } = props;

  const statusConfig = {
    todo: { color: "#3b82f6", bg: "#eff6ff", label: "Beklemede" } as const,
    "in-progress": {
      color: "#f59e0b",
      bg: "#fff7ed",
      label: "Devam Ediyor",
    } as const,
    done: { color: "#10b981", bg: "#f0fdf4", label: "Tamamlandı" } as const,
  };
  type StatusKey = keyof typeof statusConfig;
  const config = statusConfig[status as StatusKey] || statusConfig.todo;

  return (
    <Stack
      direction={"column"}
      bgcolor="#fff"
      borderRadius="12px"
      padding="24px 20px 24px 20px"
      border="2px solid #e5e5e5"
      spacing={"16px"}
      sx={{
        borderTop: `4px solid ${config.color}`,
        boxSizing: "border-box",
        maxHeight: "fit-content",
      }}
    >
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Chip
          label="#TSK-1"
          size="small"
          sx={{
            color: config.color,
            bgcolor: config.bg,
            borderRadius: "10px",
            border: "none",
            fontWeight: "bold",
          }}
        />
        <IconButton
          size="small"
          sx={{
            bgcolor: "#f3f4f6",
          }}
        >
          <MoreVertIcon fontSize="small" />
        </IconButton>
      </Stack>
      <Typography variant="body2" sx={{ fontWeight: "bold" }}>
        API Bağlantısı ve Axios
      </Typography>
      <Stack direction={"row"} gap={1}>
        <Chip label="Front-End" size="small" sx={{ bgcolor: "#fff" }} />
        <Chip label="Back-End" size="small" sx={{ bgcolor: "#fff" }} />
      </Stack>
      <Chip
        label={config.label}
        size="small"
        sx={{
          width: "fit-content",
          bgcolor: config.bg,
          color: config.color,
          border: "none",
          fontWeight: "bold",
        }}
      />
    </Stack>
  );
};

export default TaskCard;
