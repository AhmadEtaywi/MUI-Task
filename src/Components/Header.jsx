import { makeStyles } from "tss-react/mui";
import {
  Toolbar,
  AppBar,
  useMediaQuery,
  Button,
  Tabs,
  Tab,
  styled,
  SwipeableDrawer,
  IconButton,
  List,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import React, { useState, Fragment } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import LogoHeader from "./images/logo-header";

const useStyles = makeStyles()((theme) => {
  return {
    appBarContainer: {
      boxShadow: "none",
      backgroundColor: theme.palette.common.white,
      width: "100%",
      padding: "2.4rem 25rem",
      [theme.breakpoints.down("xxl")]: {
        padding: "2.4rem 15rem",
      },
      [theme.breakpoints.down("xl")]: {
        padding: "2.4rem 9rem",
      },
      [theme.breakpoints.down("lg")]: {
        padding: "2.4rem 5rem",
      },
      [theme.breakpoints.down("md")]: {
        padding: "2.4rem 2rem",
      },
      [theme.breakpoints.down("sm")]: {
        padding: "1rem",
      },
    },
    logoContainer: {
      height: "2.5rem",
      width: "7.5rem",
      padding: 0,
      [theme.breakpoints.down("md")]: {
        marginRight: "auto",
      },
      "&:hover": {
        backgroundColor: "transparent",
      },
    },

    loginTabAlign: {
      position: "absolute",
      right: "7rem",
    },
    drawerIconContainer: {
      marginLeft: "auto",
      "&:hover": {
        backgroundColor: "transparent",
      },
    },
    drawerIcon: {
      height: "2.5rem",
      width: "2.5rem",
    },
    drawer: {
      backgroundColor: theme.palette.primary.main,
      borderRadius: "15px",
      padding: "2rem 1rem",
      top: "5.6rem",
      width: "80%",
      marginLeft: "5%",
      marginRight: "1%",
    },
    drawerItemButton: {
      color: theme.palette.common.white,
      "&.MuiListItemButton-divider": {
        borderColor: theme.palette.common.grayish_violet,
      },
    },
    drawerItemButtonSelected: {
      fontWeight: "700",
      color: theme.palette.primary.main,
      backgroundColor: theme.palette.common.cyan,
      borderRadius: "50px",
      "&:hover": {
        backgroundColor: theme.palette.common.cyan,
      },
    },
    listItemText: { textAlign: "center", padding: "0.2rem 0" },
  };
});

const StyledTabs = styled((props) => (
  <Tabs
    {...props}
    TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }}
  />
))({
  "& .MuiTabs-indicator": {
    display: "none",
  },
  "&.MuiTabs-root": {
    width: "calc(100% - 7.5rem)",
    paddingLeft: "2rem",
  },
  "& .MuiTabs-flexContainer": {
    display: "block",
  },
});

const StyledTab = styled((props) => <Tab disableRipple {...props} />)(
  ({ theme }) => ({
    textTransform: "none",
    fontWeight: theme.typography.fontWeightRegular,
    fontSize: theme.typography.pxToRem(15),
    marginRight: theme.spacing(1),
    color: theme.palette.primary.light,
    // fontSize: '1.2rem',
    [theme.breakpoints.down("xl")]: {
      fontSize: "1rem",
    },
    "&.Mui-selected": {
      color: theme.palette.primary.light,
      fontWeight: 700,
    },
  })
);

const ButtonTab = styled((props) => <Tab disableRipple {...props} />)(
  ({ theme }) => ({
    textTransform: "none",
    fontWeight: theme.typography.fontWeightRegular,
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.common.white,
    backgroundColor: theme.palette.common.cyan,
    boxShadow: `0 3px 3px ${theme.palette.common.cyan}`,
    borderRadius: "20px",
    minHeight: "2.5rem",
    padding: 0,
    // fontSize: '1.2rem',
    [theme.breakpoints.down("xl")]: {
      fontSize: "1rem",
    },
    // marginLeft: 'auto',
    "&.Mui-selected": {
      color: theme.palette.common.white,
      fontWeight: 700,
    },
    "&.MuiButtonBase-root": {
      padding: 0,
      height: "2.5rem",
      width: "6.5rem",
    },
    "&.MuiTab-root": {
      position: "absolute",
      bottom: "4px",
      right: 0,
    },
    "&:hover": {
      backgroundColor: theme.palette.common.darker_cyan,
      boxShadow: `0 3px 3px ${theme.palette.common.darker_cyan}`,
    },
  })
);

const Header = () => {
  const { classes } = useStyles();
  const matchesMD = useMediaQuery((theme) => theme.breakpoints.down("md"));
  const [openDrawer, setOpenDrawer] = useState(false);

  const tabs = (
      <StyledTabs variant="fullWidth">
      <StyledTab label="Features" />
      <StyledTab label="Pricing" />
      <StyledTab label="Resources" />
      <StyledTab label="Login" className={classes.loginTabAlign} />
      <ButtonTab label="Sign Up" />
    </StyledTabs>
  );

  const drawer = (
    <Fragment>
      <SwipeableDrawer
        anchor="top"
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        onOpen={() => setOpenDrawer(true)}
        classes={{ paper: classes.drawer }}
      >
        <List>
          <ListItemButton
            onClick={() => {
              setOpenDrawer(false);
            }}
            className={classes.drawerItemButton}
          >
            <ListItemText disableTypography className={classes.listItemText}>
              Features
            </ListItemText>
          </ListItemButton>
          <ListItemButton
            onClick={() => {
              setOpenDrawer(false);
            }}
            className={classes.drawerItemButton}
          >
            <ListItemText disableTypography className={classes.listItemText}>
              Pricing
            </ListItemText>
          </ListItemButton>
          <ListItemButton
            onClick={() => {
              setOpenDrawer(false);
            }}
            divider
            className={classes.drawerItemButton}
          >
            <ListItemText disableTypography className={classes.listItemText}>
              Resources
            </ListItemText>
          </ListItemButton>
          <ListItemButton
            onClick={() => {
              setOpenDrawer(false);
            }}
            className={classes.drawerItemButton}
          >
            <ListItemText disableTypography className={classes.listItemText}>
              Login
            </ListItemText>
          </ListItemButton>
          <ListItemButton
            onClick={() => {
              setOpenDrawer(false);
            }}
            className={classes.drawerItemButtonSelected}
          >
            <ListItemText disableTypography className={classes.listItemText}>
              Sign Up
            </ListItemText>
          </ListItemButton>
        </List>
      </SwipeableDrawer>
      <IconButton
        onClick={() => setOpenDrawer(!openDrawer)}
        disableRipple
        className={classes.drawerIconContainer}
      >
        <MenuIcon className={classes.drawerIcon} />
      </IconButton>
    </Fragment>
  );

  return (
    <Fragment>
      <AppBar className={classes.appBarContainer} position="fixed">
        <Toolbar disableGutters>
          <Button disableRipple className={classes.logoContainer}>
            <LogoHeader />
          </Button>
          {matchesMD ? drawer : tabs}
        </Toolbar>
      </AppBar>
      {/* <div className={classes.toolbarMargin} /> */}
    </Fragment>
  );
};

export default Header;
