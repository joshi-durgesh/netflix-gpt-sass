import { InfoOutlined, PlayArrow } from "@mui/icons-material";
import { Box, Button, Stack, Typography } from "@mui/material";
import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <Box
      position={"absolute"}
      top={"50%"}
      left={"4rem"}
      width={"32rem"}
      sx={{ transform: "translateY(-50%)" }}
    >
      <Typography variant='h4' mb={"2rem"} fontWeight={"bold"} color={"#fff"}>
        {title}
      </Typography>
      <Typography
        mb={"2rem"}
        varient='paragraph'
        color={"#fff"}
        fontSize={"1.3rem"}
      >
        {overview}
      </Typography>
      <Stack direction={"row"} gap={2}>
        <Button
          startIcon={<PlayArrow />}
          variant='contained'
          className='btn-play'
          sx={{
            fontSize: "1rem",
          }}
        >
          Play
        </Button>
        <Button
          className='btn-info'
          startIcon={<InfoOutlined />}
          variant='contained'
          sx={{
            fontSize: "1rem",
          }}
        >
          More Info
        </Button>
      </Stack>
    </Box>
  );
};

export default VideoTitle;
