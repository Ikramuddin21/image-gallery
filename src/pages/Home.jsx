import { Box } from "@mui/material";
import React from "react";
import images from "../temp";
import ImageOverlay from "../components/ImageOverlay";

const Home = ({ checkedArr, setCheckedArr }) => {
  // handle checkbox
  const handleChecked = (id) => {
    const duplicateChecker = checkedArr.find((item) => item === id);

    if (duplicateChecker) {
      const remainingItem = checkedArr.filter(
        (item) => item !== duplicateChecker
      );
      setCheckedArr(remainingItem);
    } else {
      setCheckedArr([...checkedArr, id]);
    }
  };

  return (
    <Box
      sx={{
        mt: "30px",
        px: "30px",
        display: "grid",
        gridTemplateColumns: "repeat(5, 1fr)",
        gridGap: "16px",
      }}
    >
      {images.map((item, index) => (
        <ImageOverlay
          key={item.id}
          item={item}
          index={index}
          checkedArr={checkedArr}
          handleChecked={handleChecked}
        />
      ))}
    </Box>
  );
};

export default Home;
