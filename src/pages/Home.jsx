import { Box, Button } from "@mui/material";
import React from "react";
import ImageOverlay from "../components/ImageOverlay";
import ImageIcon from "@mui/icons-material/Image";

const Home = ({ images, checkedArr, setCheckedArr }) => {
  // handle checkbox checked
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
        px: { xs: "20px", md: "30px" },
        display: "grid",
        gridTemplateColumns: {
          xs: "repeat(2, 1fr)",
          sm: "repeat(3, 1fr)",
          md: "repeat(4, 1fr)",
          lg: "repeat(5, 1fr)",
        },
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
      <Button
        variant="outlined"
        sx={{
          color: "#000000",
          border: "1px dotted gray",
          textTransform: "capitalize",
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          width: "150px",
          height: "150px",
          "&:hover": {
            border: "1px dotted gray",
          },
        }}
        component="label"
        startIcon={<ImageIcon sx={{ color: "gray" }} />}
      >
        Add Images
      </Button>
    </Box>
  );
};

export default Home;
