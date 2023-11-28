import { Button, Grid, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchGithubUser } from "../features/github/githubSlice";

const Input = () => {
  const dispatch = useDispatch();
  const { isLoading } = useSelector((state) => state.githubReducer);

  const [username, setUsername] = useState("");

  const handleSearch = () => {
    dispatch(fetchGithubUser(username)).then(() => {
      setUsername("");
    });
  };

  return (
    <Grid
      container
      p={3}
      pb={2}
      gap={2}
      justifyContent={"space-between"}
      backgroundColor={"#1f2a48"}
      borderRadius={3}
    >
      <Grid item sx={9}>
        <Grid container gap={1}>
          <Grid item>
            <SearchIcon fontSize="large" sx={{ color: "blue" }} />
          </Grid>
          <Grid item>
            <TextField
              placeholder="Enter GitHub username..."
              fullWidth
              id="fullWidth"
              variant="standard"
              name="username"
              onChange={(e) => setUsername(e.target.value)}
              value={username}
              InputProps={{
                disableUnderline: true,
              }}
              inputProps={{
                style: { color: "#fff" },
                sx: {
                  "&::placeholder": {
                    color: "#fff",
                  },
                },
              }}
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid item sx={3}>
        <Button variant="contained" onClick={handleSearch} disabled={isLoading}>
          Search
        </Button>
      </Grid>
    </Grid>
  );
};

export default Input;
