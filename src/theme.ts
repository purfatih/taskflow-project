import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  components: {
    MuiChip: {
      styleOverrides: {
        root: {
          bgcolor: "background.default",
          border: "1px solid #e5e7eb",
        },
      },
    },
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          margin: 0,
          padding: 0,
          MozOsxFontSmoothing: "grayscale",
          backgroundColor: "#f9fafb",
        },
      },
    },
  },
});

export default theme;
