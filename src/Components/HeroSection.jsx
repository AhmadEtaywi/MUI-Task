import { makeStyles } from "tss-react/mui";
import Image from "./images/illustration-working.svg";
import {
  Grid,
  Typography,
  Button,
  useMediaQuery,
  useTheme,
} from "@mui/material";

const useStyles = makeStyles()((theme) => {
  return {
    container: {
      width: "100%",
      marginTop: "10rem",
      position: "relative",
      padding: "0 25rem",
      [theme.breakpoints.down("xxl")]: {
        padding: "0  15rem ",
      },
      [theme.breakpoints.down("xl")]: {
        padding: "0 9rem",
      },
      [theme.breakpoints.down("lg")]: {
        padding: "0 5rem",
      },
      [theme.breakpoints.down("md")]: {
        padding: "0 3rem",
      },
      [theme.breakpoints.down("sm")]: {
        padding: "1rem",
      },
    },
    message: {
      ...theme.typography.body,
      color: theme.palette.common.grayish_violet,
      fontSize: "1.4rem",
      textAlign: "left",
      [theme.breakpoints.down("lg")]: {
        fontSize: "1rem",
      },
      [theme.breakpoints.down("md")]: {
        textAlign: "center",
        paddingTop: "1rem",
      },
    },
    button: {
      backgroundColor: theme.palette.common.cyan,
      color: theme.palette.common.white,
      borderRadius: "50px",
      textTransform: "none",
      margin: "2rem 0",
      height: "4rem",
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
    image: {
      width: "45rem",
      height: "auto",
      [theme.breakpoints.down("xxl")]: {
        width: "30rem",
      },
      [theme.breakpoints.down("xl")]: {
        width: "30rem",
      },
      [theme.breakpoints.down("lg")]: {
        width: "25rem",
      },
      [theme.breakpoints.down("md")]: {
        width: "30rem",
      },
      [theme.breakpoints.down("sm")]: {
        width: "22rem",
      },
    },
    title: {
      fontSize: "5rem",
      textAlign: "left",
      [theme.breakpoints.down("xxl")]: {
        fontSize: "4rem",
      },
      [theme.breakpoints.down("xl")]: {
        fontSize: "4.5rem",
      },
      [theme.breakpoints.down("lg")]: {
        fontSize: "4rem",
      },
      [theme.breakpoints.down("md")]: {
        fontSize: "4.5rem",
        textAlign: "center",
      },
      [theme.breakpoints.down("sm")]: {
        fontSize: "3rem",
      },
      [theme.breakpoints.down("xs")]: {
        fontSize: "3rem",
      },
    },
  };
});

const HeroSection = () => {
  const { classes } = useStyles();
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
  const isMobile = useMediaQuery(theme.breakpoints.down("lg"));

  return (
    <Grid item container className={classes.container} lg={12} sm={12} xs={12}>
      {isMobile ? (
        <>
          <Grid item container sm={12} justifyContent="center">
            <img alt="" className={classes.image} src={Image} />
          </Grid>
          <Grid
            item
            container
            sm={12}
            justifyContent="center"
            alignItems="center"
            style={{ marginTop: "2rem" }}
          >
            <Grid item container direction="column" alignItems="center">
              <Typography variant="h1" className={classes.title}>
                More than just shorter links
              </Typography>
              <Typography className={classes.message}>
                Build your brand&apos;s recognition and get detailed insights on
                how your links are performing.
              </Typography>
              <Button
                variant="contained"
                className={classes.button}
                disableRipple
              >
                Get Started
              </Button>
            </Grid>
          </Grid>
        </>
      ) : (
        <>
          <Grid
            item
            container
            md={6}
            sm={12}
            justifyContent={matchesMD ? "center" : "flex-start"}
            alignItems="center"
          >
            <Typography variant="h1" className={classes.title}>
              More than just shorter links
            </Typography>
            <Typography className={classes.message}>
              Build your brand&apos;s recognition and get detailed insights on
              how your links are performing.
            </Typography>
            <Button
              variant="contained"
              className={classes.button}
              disableRipple
            >
              Get Started
            </Button>
          </Grid>
          <Grid
            item
            container
            md={6}
            sm={12}
            justifyContent={matchesMD ? "center" : "flex-end"}
            alignItems="center"
          >
            <img alt="" className={classes.image} src={Image} />
          </Grid>
        </>
      )}
    </Grid>
  );
};
export default HeroSection;
