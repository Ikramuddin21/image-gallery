import {
  Box,
  Button,
  Checkbox,
  Divider,
  FormControlLabel,
  Typography,
} from "@mui/material";
import React from "react";

const Header = ({ checkedArr, remainingImages, setImages, setCheckedArr }) => {
  return (
    <Box>
      {!!checkedArr.length ? (
        // show delete button & select item count
        <Box
          sx={{
            px: "30px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Typography variant="h2">
            <FormControlLabel
              control={<Checkbox checked />}
              label={`${checkedArr.length} Files Selected`}
            />
          </Typography>
          <Button
            sx={{
              textTransform: "capitalize",
              color: "error.main",
              fontSize: "15px",
              p: 0,
              "&:hover": {
                textDecoration: "underline",
                background: "transparent",
              },
            }}
            onClick={() => {
              setImages(remainingImages);
              setCheckedArr([]);
            }}
          >
            Delete Files
          </Button>
        </Box>
      ) : (
        <Typography variant="h1" sx={{ px: "30px" }}>
          Gallery
        </Typography>
      )}
      <Divider sx={{ mt: "20px" }} />
    </Box>
  );
};

export default Header;
