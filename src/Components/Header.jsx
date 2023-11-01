import { Box, Divider, Typography } from "@mui/material";
import React from "react";

const Header = () => {
  return (
    <Box>
      <Typography variant="h4" sx={{ px: "30px" }}>
        Gallery
      </Typography>
      <Divider sx={{ mt: "20px" }} />
    </Box>
  );
};

export default Header;
