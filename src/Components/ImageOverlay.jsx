import React from "react";
import { Box } from "@mui/material";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

const ImageOverlay = ({ item, index, checkedArr, handleChecked }) => {
  // dnd kit sortable
  const sortable = useSortable({ id: item });
  const { attributes, listeners, setNodeRef, transform, transition } = sortable;

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <Box
      sx={{
        gridColumn: index === 0 && "1 / span 2",
        gridRow: index === 0 && "1 / span 2",
        width: index === 0 ? "316px" : "150px",
        height: index === 0 ? "316px" : "150px",
        position: "relative",
        borderRadius: "5px",
        cursor: "pointer",

        "&:hover": {
          "& .overlay_box": {
            opacity: 1,
          },
          "& input": {
            opacity: 1,
          },
        },
      }}
    >
      {/* hover show image overlay */}
      <Box
        {...listeners}
        sx={{
          position: "absolute",
          transition: "0.5s",
          top: 0,
          left: 0,
          width: 1,
          height: 1,
          borderRadius: "5px",
          opacity: {
            xs: checkedArr?.some((checkedItem) => checkedItem === item) ? 1 : 1,
            md: checkedArr?.some((checkedItem) => checkedItem === item) ? 1 : 0,
          },
          backgroundColor: checkedArr?.some(
            (checkedItem) => checkedItem === item
          )
            ? "rgba(238, 239, 239, 0.463)"
            : "rgba(18, 18, 18, 0.61)",
        }}
        className="overlay_box"
      />

      {/* checkbox */}
      <Box
        component="input"
        type="checkbox"
        sx={{
          position: "absolute",
          transition: "0.5s",
          opacity: {
            xs: checkedArr?.some((checkedItem) => checkedItem === item) ? 1 : 1,
            md: checkedArr?.some((checkedItem) => checkedItem === item) ? 1 : 0,
          },
          top: "20px",
          left: "20px",
          cursor: "pointer",
          transform: "scale(1.8)",
        }}
        id={`checkbox${item}`}
        name={`checkbox${item}`}
        value={`checkbox${item}`}
        checked={checkedArr?.includes(item)}
        onChange={() => handleChecked(item)}
      />

      {/* image */}
      <Box
        ref={setNodeRef}
        style={style}
        {...attributes}
        {...listeners}
        component="img"
        src={item}
        alt="Image Preview"
        sx={{
          width: 1,
          height: index === 0 ? "316px" : "150px",
          border: "1px solid lightgray",
          borderRadius: "5px",
          objectFit: "cover",
          transformOrigin: "0 0",
        }}
      />
    </Box>
  );
};

export default ImageOverlay;
