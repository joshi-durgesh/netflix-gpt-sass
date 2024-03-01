import { Box, Button, Stack, Typography } from "@mui/material";
import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <Box>
      <Typography variant='h4' fontWeight={"bold"}>
        {title}
      </Typography>
      <Typography varient='paragraph'>{overview}</Typography>
      <Stack direction={"row"}>
        <Button>Play</Button>
        <Button>More Info</Button>
      </Stack>
    </Box>
  );
};

export default VideoTitle;
