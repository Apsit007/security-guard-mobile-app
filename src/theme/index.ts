// src/theme/darkTheme.ts
import { createTheme } from "@mui/material/styles";

export const MuiTheme = createTheme({
    typography: {
        fontFamily: '"Sarabun", "Roboto", "Helvetica", "Arial", sans-serif',
    },
    palette: {
        mode: "light",
        primary: {
            main: "#0D47A1",
        },
    },
});
