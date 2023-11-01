import { Box } from "@mui/material";
import React from "react";
import images from "../temp";

const Home = () => {
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
        <Box
          key={item.id}
          sx={{
            gridColumn: index === 0 && "1 / span 2",
            gridRow: index === 0 && "1 / span 2",
            position: "relative",
            borderRadius: "5px",
            cursor: "pointer",
            width: index === 0 ? "316px" : "150px",
            height: index === 0 ? "316px" : "150px",
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
            <Box
              component="input"
              type="checkbox"
              sx={{
                mt: "20px",
                ml: "20px",
                cursor: "pointer",
                transform: "scale(1.8)",
              }}
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
              border: "1px solid lightgray",
              borderRadius: "5px",
              objectFit: "cover",
            }}
          />
        </Box>
      ))}
    </Box>
  );
};

export default Home;
