import { makeStyles } from "tss-react/mui";
import { useMediaQuery, Grid, useTheme, Button } from "@mui/material";
import Image from "./images/bg-shorten-desktop.svg";
import cls from "classnames";

const useStyles = makeStyles()((theme) => {
  return {
    container: {
      width: "100%",
      position: "relative",
      padding: "3rem 25rem",
      [theme.breakpoints.down("xxl")]: {
        padding: "2rem 15rem",
      },
      [theme.breakpoints.down("xl")]: {
        padding: "2rem 9rem",
      },
      [theme.breakpoints.down("lg")]: {
        padding: "2rem 5rem",
      },
      [theme.breakpoints.down("md")]: {
        padding: "2rem 2rem",
      },
      [theme.breakpoints.down("sm")]: {
        paddingLeft: "1rem",
        paddingRight: "1rem",
      },
    },
    formWrapper: {
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundColor: theme.palette.common.dark_violet,
      backgroundImage: `url(${Image})`,
      height: "8rem",
      borderRadius: "8px",
      padding: "0 2rem",
      width: "100%",
      position: "relative",
      [theme.breakpoints.down("xl")]: {
        padding: "1rem 2rem",
        height: "8rem",
      },
      [theme.breakpoints.down("lg")]: {
        padding: "2rem",
        height: "13rem",
      },
    },
    textShortenIt: {
      width: "100%",
      backgroundColor: theme.palette.common.white,
      borderRadius: "8px",
      //   height: '3.5rem',
      height: "1rem",

      padding: "1rem 2rem",
      fontSize: "1.2rem",
      border: "none",
      [theme.breakpoints.down("sm")]: {
        padding: "1rem",
      },
      "&::placeholder": {
        color: theme.palette.common.gray,
      },
    },

    button: {
      height: "3rem",
      borderRadius: "8px",
      width: "100%",
      margin: "0 0 0 1rem",
      backgroundColor: theme.palette.common.cyan,
      border: `1px solid ${theme.palette.common.cyan}`,
      color: theme.palette.common.white,
      fontSize: "0.8rem",
      fontFamily: "sans-serif",
      fontWeight: "500",
      boxShadow: `0 3px 3px ${theme.palette.common.cyan}`,
      [theme.breakpoints.down("lg")]: {
        margin: 0,
        padding: 0,
      },
    },

    shortenWrapper: {
      padding: "3rem 1rem",
    },
  };
});

const SearchBar = () => {
  const { classes } = useStyles();
  const theme = useTheme();
  const matchesLG = useMediaQuery(theme.breakpoints.down("lg"));

  return (
    <Grid item container className={classes.container} xs={12}>
      <Grid
        item
        container
        xs={12}
        justifyContent={matchesLG ? "space-between" : "center"}
        alignItems={matchesLG ? "space-between" : "center"}
        className={classes.formWrapper}
      >
        <Grid item container lg={10} md={12} alignItems="flex-start">
          <input
            id="shorten-it"
            type="url"
            placeholder="Shorten a link here..."
            className={cls(classes.textShortenIt)}
          />
        </Grid>
        <Grid item container lg={2} md={12} alignItems="flex-end">
          <Button className={cls(classes.button)}>Shorten It!</Button>
        </Grid>
      </Grid>
      <Grid item container className={classes.shortenWrapper}></Grid>
    </Grid>
  );
};

export default SearchBar;
