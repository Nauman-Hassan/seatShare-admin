import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import ClearIcon from '@mui/icons-material/Clear';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import DescriptionIcon from '@mui/icons-material/Description';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import { AdminLogoutAction } from '../../store/actions/AuthAction';

import {  Link, NavLink} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import "./HomeStyle.css"

import logo from "../../assets/mainLogo/logo.png"
import Navigation from '../../config/navigation/Navigation';
import CheckNet from '../../commonComponents/InternetDetect';

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(9)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

export default function Home() {
  const dispatch = useDispatch();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const ctaLogOutHandler =()=>{
    console.log("i am running...");
    dispatch(AdminLogoutAction())
  }

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar className="homeAppBar">
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: "36px",
              ...(open && { display: "none" }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Admin Portal
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <img src={logo} className="homeLogo" alt="broken-img" />
          <ClearIcon
            onClick={handleDrawerClose}
            style={{ cursor: "pointer", color: "#29ab87" }}
          >
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </ClearIcon>
        </DrawerHeader>
        <Divider />

        <NavLink exact to="/" className="activeClassName">
          <List>
            <ListItem>
              <ListItemIcon>
                <DashboardIcon className="sideIconText" />
              </ListItemIcon>
              <ListItemText primary={"Dashboard"} className="sideIconText" />
            </ListItem>
          </List>
        </NavLink>

        {/* hide the admins */}

        {/* <NavLink exact to="/admins" className="activeClassName"> 
        <List>
          
          <ListItem >
            <ListItemIcon>
              <AdminPanelSettingsIcon  className="sideIconText"/>
            </ListItemIcon>
            <ListItemText primary={"All Admins"} className="sideIconText"/>
          </ListItem>
      </List>
        </NavLink> */}

        <NavLink exact to="/users" className="activeClassName">
          <List>
            <ListItem>
              <ListItemIcon>
                <SupervisorAccountIcon className="sideIconText" />
              </ListItemIcon>
              <ListItemText primary={"All Users"} className="sideIconText" />
            </ListItem>
          </List>
        </NavLink>

        <NavLink exact to="/ads" className="activeClassName">
          <List>
            <ListItem>
              <ListItemIcon>
                <DescriptionIcon className="sideIconText" />
              </ListItemIcon>
              <ListItemText primary={"All Ads"} className="sideIconText" />
            </ListItem>
          </List>
        </NavLink>

        <Divider />

        <NavLink exact to="/login" className="activeClassName">
          <List>
            <ListItem
              onClick={() => {
                ctaLogOutHandler();
              }}
            >
              <ListItemIcon>
                <PowerSettingsNewIcon className="sideIconText" />
              </ListItemIcon>
              <ListItemText primary={"Logout"} className="sideIconText" />
            </ListItem>
          </List>
        </NavLink>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        <Navigation />
        
      </Box>
    </Box>
  );
}