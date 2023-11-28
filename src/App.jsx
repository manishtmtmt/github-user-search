import { useContext, useState } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { useDispatch, useSelector } from "react-redux";
import { Container, CssBaseline } from "@mui/material";

import { fetchGithubUser } from "./features/github/githubSlice";
import { ThemeContext } from "./context/theme.context";
import Header from "./components/Header";
import Input from "./components/Input";
import UserProfile from "./components/UserProfile";

function App() {
  const { isDark, toggleTheme } = useContext(ThemeContext);
  const dispatch = useDispatch();
  const [username, setUsername] = useState("");
  const { isLoading, userData, error } = useSelector(
    (state) => state.githubReducer
  );

  const handleSearch = () => {
    dispatch(fetchGithubUser(username));
  };

  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
  });

  const lightTheme = createTheme({
    palette: {
      mode: "light",
    },
  });

  return (
    <>
      <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
        <CssBaseline />
        <Container maxWidth="sm" sx={{ marginTop: "3%" }}>
          <Header />
          <Input />
          <UserProfile />
        </Container>
      </ThemeProvider>
    </>
  );
}

export default App;
