import React from "react";
import { Typography, Box } from "@material-ui/core";

export const Header = () => {
  return (
    <Box height="300px">
      <div className="header">
        <div className="header-body">
          <Typography variant="h2">Brian's Portfolio</Typography>
          <Typography>Software Engineer | Seattle, WA</Typography>
        </div>
      </div>
    </Box>
  );
};
