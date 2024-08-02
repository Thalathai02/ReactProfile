import * as React from "react";
import { styled, useTheme, Theme, CSSObject } from "@mui/material/styles";
import MuiDrawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Person2Icon from "@mui/icons-material/Person2";
import WorkIcon from "@mui/icons-material/Work";
import LogoDevIcon from "@mui/icons-material/LogoDev";
import Stack from "@mui/material/Stack";
import { NavLink } from "react-router-dom";
import bg from "@/assets/images/background.jpg";

const drawerWidth = 240;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(9)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",

  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

const MyNavLink = React.forwardRef<any, any>((props, ref) => (
  <NavLink
    ref={ref}
    to={props.to}
    className={({ isActive }) =>
      `${props.className} ${isActive ? props.activeClassName : ""}`
    }
  >
    {props.children}
  </NavLink>
));

type MenuProps = {
  handleDrawerClose: () => void;
  open: boolean;
};

const Menu: React.FC<MenuProps> = ({ handleDrawerClose, open }) => {
  const theme = useTheme();
  // const location = useLocation();

  return (
    <Drawer variant="permanent" open={open}>
      <DrawerHeader className="bg-[#2296f3]">
        <Stack direction="row" alignItems="center">
          {/* <img alt="" src={bg} className="h-[30px]" /> */}
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon className="text-white" />
            ) : (
              <ChevronLeftIcon className="text-white" />
            )}
          </IconButton>
        </Stack>
      </DrawerHeader>
      {open && <img alt="" height={250} src={bg} />}

      <Divider />

      <List>
        <ListItem
          component={MyNavLink}
          to={"/myProfile"}
          key={"myProfile"}
          activeClassName="Mui-selected"
          exact
          button
        >
          <ListItemIcon>
            <Person2Icon />
          </ListItemIcon>

          <ListItemText primary="My Profile" />
        </ListItem>

        <ListItem
          component={MyNavLink}
          to="/Portfolio"
          key="Portfolio"
          activeClassName="Mui-selected"
          exact
        >
          <ListItemIcon>
            <LogoDevIcon />
          </ListItemIcon>
          <ListItemText primary="Portfolio" />
        </ListItem>

        <ListItem
          component={MyNavLink}
          to="/WorkExperience"
          key="WorkExperience"
          activeClassName="Mui-selected"
          exact
        >
          <ListItemIcon>
            <WorkIcon />
          </ListItemIcon>
          <ListItemText primary="Work Experience" />
        </ListItem>
      </List>

      <Divider />
      {/* <List>
          {['All mail', 'Trash', 'Spam'].map((text, index) => (
            <ListItem key={text} disablePadding sx={{ display: 'block' }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
          ))}
        </List> */}
    </Drawer>
  );
};

export default Menu;
