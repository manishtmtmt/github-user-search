import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const githubAccessToken = import.meta.env.VITE_GITHUB_ACCESS_TOKEN;

const initialState = {
  isLoading: false,
  userData: null,
  error: null,
};

export const fetchGithubUser = createAsyncThunk(
  "api/getGithubUser",
  async (username) => {
    try {
      const { data } = await axios.get(
        `https://api.github.com/users/${username}`,
        {
          headers: {
            Accept: "application/vnd.github+json",
            Authorization: `Bearer ${githubAccessToken}`,
            "X-GitHub-Api-Version": "2022-11-28",
          },
        }
      );
      return data;
    } catch (error) {
      console.log(
        "🚀 ~ file: githubSlice.js:27 ~ fetchGithubUser ~ error:",
        error
      );
      throw new Error(error.message);
    }
  }
);

export const githubSlice = createSlice({
  name: "github",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchGithubUser.pending, (state, action) => {
        state.isLoading = true;
        state.userData = null;
        state.error = null;
      })
      .addCase(fetchGithubUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.userData = action.payload;
        state.error = null;
      })
      .addCase(fetchGithubUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
        state.userData = null;
      });
  },
});

export default githubSlice.reducer;
