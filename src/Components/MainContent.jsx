import { Fragment } from "react";
import { makeStyles } from "tss-react/mui";
import Image from "./images/bg-shorten-desktop.svg";
import {
  Grid,
  Typography,
  Button,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import BrandIcon from "./images/icon-brand-recognition.svg";
import DetailedIcon from "./images/icon-detailed-records.svg";
import FullyCustomizableIcon from "./images/icon-fully-customizable.svg";

const useStyles = makeStyles()((theme) => {
  return {
    container: {
      backgroundColor: "#f1f0f6",
      width: "100%",

      position: "relative",
      padding: "1rem 0 3rem 25rem",

      [theme.breakpoints.up("xxl")]: {
        padding: "4rem 25rem",
        maxWidth: 2240,
      },

      [theme.breakpoints.down("xxl")]: {
        padding: "1rem 15rem 3rem 15rem",
      },
      [theme.breakpoints.down("xl")]: {
        padding: "1rem 9rem 3rem 9rem",
      },
      [theme.breakpoints.down("lg")]: {
        padding: "1rem 5rem 3rem 5rem",
      },
      [theme.breakpoints.down("md")]: {
        padding: "1rem 2rem 3rem 2rem",
      },
      [theme.breakpoints.down("sm")]: {
        paddingLeft: "2rem",
        paddingRight: "2rem",
      },
    },
    text: {
      color: theme.palette.common.grayish_violet,
      textAlign: "center",
      padding: "1rem 0",
      fontSize: "1.2rem",
      [theme.breakpoints.down("lg")]: {
        fontSize: "1rem",
      },
    },
    bottomWrapper: {
      width: "100%",
      padding: "3rem 0",
      backgroundColor: theme.palette.primary.main,
      backgroundImage: `url(${Image})`,

      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",

      [theme.breakpoints.up("xxl")]: {
        padding: "4rem 0",
        maxWidth: 2240,
      },
    },
    actionText: {
      color: theme.palette.common.white,
      [theme.breakpoints.down("sm")]: {
        fontSize: "1.7rem",
      },
    },
    button: {
      backgroundColor: theme.palette.common.cyan,
      color: theme.palette.common.white,
      borderRadius: "50px",
      textTransform: "none",
      margin: "2rem 0 0 0",
      height: "5rem",
      width: "12rem",
      fontSize: "1.4rem",
      [theme.breakpoints.down("xl")]: {
        height: "4rem",
        width: "12rem",
        fontSize: "1.2rem",
      },
      "&:hover": {
        backgroundColor: theme.palette.common.darker_cyan,
      },
    },
    imageWrapper: {
      backgroundColor: theme.palette.primary.main,
      padding: "1rem",
      borderRadius: "50%",
      height: "6rem",
      width: "6rem",
    },
    stepsBlock: {
      height: "20rem",

      [theme.breakpoints.down("xl")]: {
        height: "22rem",
      },
      [theme.breakpoints.down("lg")]: {
        height: "20rem",
        width: "10rem",
      },
      [theme.breakpoints.down("sm")]: {
        height: "18rem",
        width: "100%",
      },
    },

    linkText: {
      color: theme.palette.common.cyan,
      fontSize: "4rem",
      fontWeight: "900",
    },
    stepDescription: {
      paddingTop: "1rem",
      paddingLeft: "1rem",
      color: theme.palette.common.grayish_violet,
      fontSize: "1rem",
      [theme.breakpoints.down("lg")]: {
        textAlign: "center",
        width: "19rem",
      },
      [theme.breakpoints.down("sm")]: {
        textAlign: "center",
        width: "100%",
      },
    },
  };
});

const MainContent = () => {
  const { classes } = useStyles();

  const theme = useTheme();
  const matchesLG = useMediaQuery(theme.breakpoints.down("lg"));

  return (
    <Fragment>
      <Grid item container xs={12} className={classes.container}>
        <Grid item container justifyContent="center" alignItems="center">
          <Typography variant="h2" style={{ textAlign: "center" }}>
            Advanced Statistics
          </Typography>
        </Grid>
        <Grid item container justifyContent="center" alignItems="center">
          <Typography variant="body" className={classes.text}>
            Track how your links are performing across the web
            <br />
            with our advanced statistics dashboard.
          </Typography>
        </Grid>
      </Grid>
      <Grid item container xs={12} className={classes.container}>
        <Grid
          item
          container
          lg={3.3}
          sm={12}
          className={classes.stepsBlock}
          justifyContent={matchesLG ? "center" : "flex-start"}
          alignItems={matchesLG ? "center" : "flex-start"}
          flexDirection="column"
        >
          <Grid
            item
            container
            className={classes.imageWrapper}
            justifyContent="center"
            alignItems="center"
          >
            <img alt="" src={BrandIcon}></img>
          </Grid>
          <Grid
            item
            container
            justifyContent={matchesLG ? "center" : "flex-start"}
            alignItems="center"
          >
            <Typography variant="h4" style={{ paddingTop: "1rem" }}>
              Brand Recognition
            </Typography>
          </Grid>
          <Grid
            item
            container
            justifyContent={matchesLG ? "center" : "flex-start"}
            alignItems="center"
          >
            <Typography variant="body" className={classes.stepDescription}>
              Boost your brand recognition with each click. Generic links don't
              mean a think. Branded links help instil confidence in your
              content.
            </Typography>
          </Grid>
        </Grid>
        <Grid
          item
          container
          lg={1}
          sm={12}
          justifyContent="center"
          alignItems="center"
        >
          <Grid item>
            <Typography className={classes.linkText}>
              {matchesLG ? "|" : "-"}
            </Typography>
          </Grid>
        </Grid>
        <Grid
          item
          container
          lg={3.3}
          sm={12}
          className={classes.stepsBlock}
          justifyContent="center"
          alignItems={matchesLG ? "center" : "flex-start"}
          flexDirection="column"
        >
          <Grid
            item
            container
            className={classes.imageWrapper}
            justifyContent="center"
            alignItems="center"
          >
            <img alt="" src={DetailedIcon}></img>
          </Grid>
          <Grid
            item
            container
            justifyContent={matchesLG ? "center" : "flex-start"}
            alignItems="center"
          >
            <Typography variant="h4" style={{ paddingTop: "1rem" }}>
              Detailed Records
            </Typography>
          </Grid>
          <Grid
            item
            container
            justifyContent={matchesLG ? "center" : "flex-start"}
            alignItems="center"
          >
            <Typography variant="body" className={classes.stepDescription}>
              Gain insights into who is clicking your links. Knowing when and
              where people engage with your content helps inform better
              decisions.
            </Typography>
          </Grid>
        </Grid>
        <Grid
          item
          container
          lg={1}
          sm={12}
          justifyContent="center"
          alignItems="center"
        >
          <Grid item>
            <Typography className={classes.linkText}>
              {matchesLG ? "|" : "-"}
            </Typography>
          </Grid>
        </Grid>
        <Grid
          item
          container
          lg={3.3}
          sm={12}
          className={classes.stepsBlock}
          justifyContent="flex-end"
          alignItems={matchesLG ? "center" : "flex-start"}
          flexDirection="column"
        >
          <Grid
            item
            container
            className={classes.imageWrapper}
            justifyContent="center"
            alignItems="center"
          >
            <img alt="" src={FullyCustomizableIcon}></img>
          </Grid>

          <Grid className={classes.testClass}>
            <Grid item container justifyContent={"center"} alignItems="center">
              <Typography variant="h4" style={{ paddingTop: "1rem" }}>
                Fully Customizable
              </Typography>
            </Grid>
            <Grid
              item
              container
              justifyContent={matchesLG ? "center" : "flex-start"}
              alignItems="center"
            >
              <Typography variant="body" className={classes.stepDescription}>
                Improve brand awareness and content discoverability through
                custo,ozable links, supercharging audience engagement.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        item
        container
        justifyContent="center"
        alignItems="center"
        className={classes.bottomWrapper}
        xs={12}
      >
        <Grid item container justifyContent="center" alignItems="center">
          <Typography variant="h3" className={classes.actionText}>
            Boost your links today
          </Typography>
        </Grid>
        <Grid item container justifyContent="center" alignItems="center">
          <Button variant="contained" className={classes.button} disableRipple>
            Get Started
          </Button>
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default MainContent;
