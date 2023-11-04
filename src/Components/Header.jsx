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
      <Box
        sx={{
          px: "30px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: "30px",
        }}
      >
        {!!checkedArr.length ? (
          <>
            <Typography variant="h2">
              <FormControlLabel
                onChange={() => setCheckedArr([])}
                control={<Checkbox checked={!!checkedArr.length} />}
                label={`${checkedArr.length} ${
                  checkedArr.length === 1 ? "File Selected" : "Files Selected"
                }`}
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
                setImages([...remainingImages]);
                setCheckedArr([]);
              }}
            >
              {checkedArr.length === 1 ? "Delete File" : "Delete Files"}
            </Button>
          </>
        ) : (
          <Typography variant="h1">Gallery</Typography>
        )}
      </Box>
      <Divider sx={{ mt: "20px" }} />
    </Box>
  );
};

export default Header;
