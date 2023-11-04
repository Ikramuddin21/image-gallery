import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Home from "../pages/Home";

const MainLayout = () => {
  const [images, setImages] = useState([]);
  const [checkedArr, setCheckedArr] = useState([]);

  useEffect(() => {
    fetch("./images.json")
      .then((res) => res.json())
      .then((data) => setImages(data));
  }, []);

  // get images array without delete image
  const remainingImages = images.filter((item) => {
    return checkedArr.every((e) => {
      return e !== item;
    });
  });

  return (
    <Box
      sx={{
        maxWidth: { xs: "95vw", md: "80vw" },
        width: 1,
        my: "50px",
        py: "30px",
        borderRadius: "10px",
        backgroundColor: "#fff",
      }}
    >
      <Header
        checkedArr={checkedArr}
        remainingImages={remainingImages}
        setImages={setImages}
        setCheckedArr={setCheckedArr}
      />
      <Home
        checkedArr={checkedArr}
        images={images}
        setImages={setImages}
        setCheckedArr={setCheckedArr}
      />
    </Box>
  );
};

export default MainLayout;
