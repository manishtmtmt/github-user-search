import { Grid, Typography } from "@mui/material";
import React, { useContext } from "react";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";

import { ThemeContext } from "../context/theme.context";

const Header = () => {
  const { isDark, toggleTheme } = useContext(ThemeContext);

  return (
    <Grid container justifyContent={"space-between"} p={3}>
      <Grid item>
        <Typography variant="h4" component={"h4"}>
          devfinder
        </Typography>
      </Grid>
      <Grid item>
        <Grid
          container
          onClick={toggleTheme}
          sx={{ cursor: "pointer" }}
          gap={2}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Grid item>
            <Typography>{isDark ? "LIGHT" : "DARK"}</Typography>
          </Grid>
          <Grid item>{isDark ? <LightModeIcon /> : <DarkModeIcon />}</Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Header;
