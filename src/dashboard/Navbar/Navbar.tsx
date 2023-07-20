import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import AnalyticsIcon from "@mui/icons-material/Analytics";
import ConstructionIcon from "@mui/icons-material/Construction";
import PaddingIcon from "@mui/icons-material/Padding";
import NotificationsIcon from "@mui/icons-material/Notifications";
import QuestionAnswerIcon from "@mui/icons-material/QuestionAnswer";
import { Badge, createTheme } from "@mui/material";
import { ThemeProvider } from "@emotion/react";


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

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
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
const DashboardContent = () => <div>Dashboard Content</div>;
const ProjectsContent = () => <div>Projects Content</div>;
const ServicesContent = () => <div>Services Content</div>;
const NotificationsContent = () => <div>Notifications Content</div>;
const ChatContent = () => <div>Chat Content</div>;

const contentProvider = (activeButtonName: string) => {
  switch (activeButtonName) {
    case "home":
      return <DashboardContent />;
    case "projects":
      return <ProjectsContent />;
    case "services":
      return <ServicesContent />;
    case "notifications":
      return <NotificationsContent />;
    case "chatContent":
      return <ChatContent />;
    default:
      return null; // You can return null or any other default content you want.
  }
};


export default function Navbar() {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#EDDBC7", 
      },
      
    },
  });
  const [activeButtonName, setActiveButtonName] = React.useState("home");
  const [activeNotificationBadge, setActiveNotificationBadge] = React.useState(true);
  const [activeChatsBadge, setActiveChatBadge] = React.useState(true);
  const [open, setOpen] = React.useState(true);



  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar position="fixed" open={open}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              sx={{ mr: 2, ...(open && { display: "none" }) }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              display={"inline"}
              sx={{
                fontFamily: "Bebas Neue, sans-serif",
                fontWeight: "400",
                color: "#20262E",
                marginRight: "8px",
              }}
              variant="h4"
              noWrap
              component="div"
            >
              Dunder Mifflin Inc. Paper Company
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            "& .MuiDrawer-paper": {
              width: drawerWidth,
              boxSizing: "border-box",
            },
          }}
          variant="persistent"
          anchor="left"
          open={open}
        >
          <DrawerHeader>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === "ltr" ? (
                <ChevronLeftIcon />
              ) : (
                <ChevronRightIcon />
              )}
            </IconButton>
          </DrawerHeader>
          <Divider />
          <List>
            <ListItem key="dashboard" disablePadding>
              <ListItemButton onClick={()=>{
                setActiveButtonName('home');
              }}>
                <ListItemIcon>
                  <AnalyticsIcon />
                </ListItemIcon>
                <ListItemText primary="Dashboard" />
              </ListItemButton>
            </ListItem>
            <ListItem key="projects" disablePadding>
              <ListItemButton onClick={()=>{
                setActiveButtonName("projects");
              }}>
                <ListItemIcon>
                  <ConstructionIcon />
                </ListItemIcon>
                <ListItemText primary="Projects" />
              </ListItemButton>
            </ListItem>
            <ListItem key="services" disablePadding>
              <ListItemButton onClick={() => {
                setActiveButtonName("notifications");
              }}>
                <ListItemIcon>
                  <PaddingIcon />
                </ListItemIcon>
                <ListItemText primary="Services" />
              </ListItemButton>
            </ListItem>
            <ListItem key="notifications" disablePadding>
              <ListItemButton
                onClick={() => {
                  setActiveButtonName("notifications");
                  setActiveNotificationBadge(false);
                }}
              >
                <ListItemIcon>
                  <Box>
                    {activeNotificationBadge ? (
                      <>
                        <Badge
                          overlap="circular"
                          badgeContent=" "
                          color="error"
                          variant="dot"
                        >
                          <NotificationsIcon />
                        </Badge>
                      </>
                    ) : (
                      <>
                        <NotificationsIcon />
                      </>
                    )}
                  </Box>
                </ListItemIcon>
                <ListItemText primary="Notifications" />
              </ListItemButton>
            </ListItem>
            <ListItem key="chat" disablePadding>
              <ListItemButton
                onClick={() => {
                  setActiveButtonName("chatContent");
                  setActiveChatBadge(false);
                }}
              >
                <ListItemIcon>
                  <Box>
                    {activeChatsBadge ? (
                      <>
                        <Badge badgeContent={" "} color="error" variant="dot">
                          <QuestionAnswerIcon />
                        </Badge>
                      </>
                    ) : (
                      <>
                        <QuestionAnswerIcon />
                      </>
                    )}
                  </Box>
                </ListItemIcon>
                <ListItemText primary="Chat" />
              </ListItemButton>
            </ListItem>
          </List>
          <Divider variant="middle" />
        </Drawer>
        <Main open={open}>
          <DrawerHeader />
          {contentProvider(activeButtonName)}
        </Main>
      </Box>
    </ThemeProvider>
  );
}
