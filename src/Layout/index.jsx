import { Box } from "@mui/material";
import React from "react";
import Header from "../components/Header";
import Home from "../Pages/Home";

const Layout = () => {
  return (
    <Box
      sx={{
        maxWidth: "80vw",
        width: 1,
        my: "50px",
        py: "30px",
        borderRadius: "10px",
        backgroundColor: "#fff",
      }}
    >
      <Header />
      <Home />
    </Box>
  );
};

export default Layout;
