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
import HomeIcon from "@mui/icons-material/Home";
import TocIcon from '@mui/icons-material/Toc';
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

  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));
const HomeContent = () => <div>Home Content</div>;
const OrdersContent = () => <div>Orders Content</div>;
const ServicesContent = () => <div>Services Content</div>;
const NotificationsContent = () => <div>Notifications Content</div>;
const ChatContent = () => <div>Chat Content</div>;

const contentProvider = (activeButtonName: string) => {
  switch (activeButtonName) {
    case "home":
      return <HomeContent />;
    case "orders":
      return <OrdersContent />;
    case "services":
      return <ServicesContent />;
    case "notifications":
      return <NotificationsContent />;
    case "chatContent":
      return <ChatContent />;
    default:
      return null; 
  }
};


export default function Navbar() {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#EDDBC7"
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
  const activeListItemTextStyle = {
    fontFamily: "Poppins, sans-serif",
    fontWeight: "500",
    color: "#F86F03",
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
            <ListItem key="home" disablePadding>
              <ListItemButton
                onClick={() => {
                  setActiveButtonName("home");
                }}
              >
                <ListItemIcon>
                  <HomeIcon />
                </ListItemIcon>
                <ListItemText
                  primary={
                    activeButtonName == "home" ? (
                      <Typography sx={activeListItemTextStyle}>
                        Home
                      </Typography>
                    ) : (
                      <Typography sx={{ fontFamily: "Poppins, sans-serif" }}>
                        Home
                      </Typography>
                    )
                  }
                />
              </ListItemButton>
            </ListItem>
            <ListItem key="orders" disablePadding>
              <ListItemButton
                onClick={() => {
                  setActiveButtonName("orders");
                }}
              >
                <ListItemIcon>
                  <TocIcon />
                </ListItemIcon>
                <ListItemText
                  primary={
                    activeButtonName == "orders" ? (
                      <Typography sx={activeListItemTextStyle}>
                        Orders
                      </Typography>
                    ) : (
                      <Typography sx={{ fontFamily: "Poppins, sans-serif" }}>
                        Orders
                      </Typography>
                    )
                  }
                />
              </ListItemButton>
            </ListItem>
            <ListItem key="services" disablePadding>
              <ListItemButton
                onClick={() => {
                  setActiveButtonName("services");
                }}
              >
                <ListItemIcon>
                  <PaddingIcon />
                </ListItemIcon>
                <ListItemText
                  primary={
                    activeButtonName == "services" ? (
                      <Typography sx={activeListItemTextStyle}>
                        Services
                      </Typography>
                    ) : (
                      <Typography sx={{ fontFamily: "Poppins, sans-serif" }}>
                        Services
                      </Typography>
                    )
                  }
                />
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
                <ListItemText
                  primary={
                    activeButtonName == "notifications" ? (
                      <Typography sx={activeListItemTextStyle}>
                        Notifications
                      </Typography>
                    ) : (
                      <Typography sx={{ fontFamily: "Poppins, sans-serif" }}>
                        Notifications
                      </Typography>
                    )
                  }
                />
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
                <ListItemText
                  primary={
                    activeButtonName == "chatContent" ? (
                      <Typography sx={activeListItemTextStyle}>Chat</Typography>
                    ) : (
                      <Typography sx={{ fontFamily: "Poppins, sans-serif" }}>
                        Chat
                      </Typography>
                    )
                  }
                />
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
