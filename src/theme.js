import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  // palette: {
  //   primary: {
  //     main: "#FF0000",
  //   },
  //   secondary: {
  //     main: "#19857b",
  //   },
  //   error: {
  //     main: "#FF0000",
  //   },
  // },
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
