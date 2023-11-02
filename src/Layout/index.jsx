import { Box } from "@mui/material";
import React, { useState } from "react";
import Header from "../components/Header";
import Home from "../pages/Home";

const Layout = () => {
  const [checkedArr, setCheckedArr] = useState([]);
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
      <Header checkedArr={checkedArr} />
      <Home checkedArr={checkedArr} setCheckedArr={setCheckedArr} />
    </Box>
  );
};

export default Layout;
