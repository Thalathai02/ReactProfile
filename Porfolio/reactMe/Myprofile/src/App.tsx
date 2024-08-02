import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Header from "./components/layouts/Header";
import Menu from "./components/layouts/Menu";
import { Container, createTheme } from "@mui/material";
import { Navigate, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "@emotion/react";
import MyProfile from "./components/page/MyProfile";
import Portfolio from "./components/page/Portfolio";
import WorkExperience from "./components/page/WorkExperience";
const drawerWidth = 240;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })<{
  open?: boolean;
}>(({ theme, open }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  transition: theme.transitions.create("margin", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginLeft: `-${drawerWidth}px`,
  ...(open && {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));
const App = () => {
  const [open, setOpen] = React.useState(true);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  const theme = createTheme({
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: 2,
          },
        },
      },
      MuiDrawer: {
        styleOverrides: {
          paper: {
            //backgroundImage: `url(${backgroundMenuImage})`,
            backgroundRepeat: "no-repeat",
            backgroundColor: "#f2fcff",
            backgroundPosition: "bottom",
            width: drawerWidth,
          },
        },
      },
    },
    typography: {
      fontFamily: "Chakra Petch",
      // fontFamily: "Noto Sans Thai",
      fontWeightLight: 100,
      fontWeightRegular: 400,
      fontWeightMedium: 500,
      fontWeightBold: 600,
    },
    spacing: 8,
  });
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <Header open={open} handleDrawerOpen={handleDrawerOpen} />
        <Menu open={open} handleDrawerClose={handleDrawerClose} />
        <Main open={open}>
          <Container>
            <DrawerHeader />

            <Routes>
              <Route path="/myProfile" element={<MyProfile />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/WorkExperience" element={<WorkExperience />} />
              {/* <Route path="/" element={<Navigate to="/myProfile" />} /> */}
              <Route path="*" element={<Navigate to="/myProfile" />} />
            </Routes>
          </Container>
        </Main>
      </Box>
    </ThemeProvider>
  );
};
export default App;
