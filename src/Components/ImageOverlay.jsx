import { Box } from "@mui/material";
import React from "react";

const ImageOverlay = ({ item, index, checkedArr, handleChecked }) => {
  return (
    <Box
      sx={{
        gridColumn: index === 0 && "1 / span 2",
        gridRow: index === 0 && "1 / span 2",
        position: "relative",
        border: "1px solid lightgray",
        borderRadius: "5px",
        cursor: "pointer",
        width: index === 0 ? "316px" : "150px",
        height: index === 0 ? "316px" : "150px",
        "& .checkbox_container": {
          opacity:
            checkedArr.some((checkedItem) => checkedItem === item.id) && 1,
          backgroundColor:
            checkedArr.some((checkedItem) => checkedItem === item.id) &&
            "rgba(238, 239, 239, 0.463)",
        },
        "&:hover": {
          "& .checkbox_container": {
            opacity: 1,
          },
        },
      }}
    >
      {/* hover show checkbox area */}
      <Box
        sx={{
          position: "absolute",
          transition: "0.5s",
          top: 0,
          left: 0,
          width: 1,
          height: 1,
          opacity: 0,
          borderRadius: "5px",
          backgroundColor: "rgba(18, 18, 18, 0.61)",
        }}
        className="checkbox_container"
      >
        {/* checkbox */}
        <Box
          component="input"
          type="checkbox"
          sx={{
            mt: "20px",
            ml: "20px",
            cursor: "pointer",
            transform: "scale(1.8)",
          }}
          id={`checkbox-${index}`}
          name={`checkbox-${item.id}`}
          value={`checkbox-${item.id}`}
          // checked={checkedStatus}
          onChange={() => handleChecked(item.id)}
        />
      </Box>

      {/* image */}
      <Box
        component="img"
        src={item.image}
        alt={`Image${item.id}`}
        sx={{
          width: 1,
          height: 1,
          borderRadius: "5px",
          objectFit: "cover",
        }}
      />
    </Box>
  );
};

export default ImageOverlay;
