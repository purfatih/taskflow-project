import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography,
  Stack,
  TextField,
  Chip,
} from "@mui/material";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import type { StatusConfig } from "../layout/Layout";
type Props = {
  config: StatusConfig;
};
const CreateTodo = (props: Props) => {
  const { config } = props;
  return (
    <Dialog
      open={true}
      fullWidth
      sx={{ "& .MuiDialog-paper": { borderRadius: "12px" } }}
    >
      <DialogTitle
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 1.5,
          padding: "16px 24px 16px 24px",
          bgcolor: "primary.main",
          color: "#fff",
        }}
      >
        <TaskAltIcon />

        <Typography variant="h6" fontWeight={700}>
          Yeni Görev Oluştur
        </Typography>
      </DialogTitle>
      <DialogContent sx={{ padding: 0 }}>
        <Stack
          direction={"column"}
          sx={{
            padding: "20px 24px",
          }}
          spacing={1.5}
        >
          <Typography variant="subtitle2" fontWeight={700}>
            Görev Başlığı *
          </Typography>
          <TextField
            fullWidth
            multiline
            minRows={2}
            variant="outlined"
            placeholder="Ne yapılması gerekiyor?"
            sx={{ "& .MuiOutlinedInput-root": { borderRadius: "8px" } }}
          />
          <Typography variant="subtitle2" fontWeight={700}>
            Başlangıç Durumu
          </Typography>
          <Stack direction={"row"} gap={1} spacing={1}>
            {config.map((item, index) => {
              return (
                <Chip
                  key={index}
                  label={item.title}
                  sx={{
                    color: item.color,
                    bgcolor: item.bg,
                    border: `2px solid ${item.color}`,
                    fontWeight: 700,
                  }}
                />
              );
            })}
          </Stack>
          <Typography variant="subtitle2" fontWeight={700}>
            Etiketler (Opsiyonel)
          </Typography>
        </Stack>
      </DialogContent>
      <DialogActions>
        <Button color="primary" onClick={() => {}}>
          İptal
        </Button>
        <Button color="primary" variant="contained" onClick={() => {}}>
          Oluştur
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default CreateTodo;
