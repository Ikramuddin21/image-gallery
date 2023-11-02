import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 580,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
  typography: {
    h1: {
      fontSize: "30px",
      color: "#000000",
    },
    h2: {
      fontSize: "25px",
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          //Set core body defaults
          backgroundColor: "#eff7ff",
          padding: 0,
          margin: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "100vh",

          textRendering: "optimizeSpeed",

          // Box sizing rules
          "*,*::before,*::after": {
            boxSizing: "border-box",
          },
        },
      },
    },
  },
});

export default theme;
