import { makeStyles } from "tss-react/mui";
import { Grid, Link, useTheme, Typography, useMediaQuery } from "@mui/material";
import LogoHeader from "./images/logo-header";
import IconFacebook from "./images/icon-facebook";
import IconTwitter from "./images/icon-twitter";
import IconPinterest from "./images/icon-pinterest";
import IconInstagram from "./images/icon-instagram";

const useStyles = makeStyles()((theme) => {
  return {
    footer: {
      backgroundColor: theme.palette.common.very_dark_blue,
      position: "relative",
      padding: "4rem 25rem",
      [theme.breakpoints.between("xs", "sm")]: {
        padding: "4rem 0",
        maxWidth: "100%",
      },
      [theme.breakpoints.between("sm", "md")]: {
        padding: "4rem 2rem",
        maxWidth: 720,
      },
      [theme.breakpoints.between("md", "lg")]: {
        padding: "4rem 5rem",
        maxWidth: 865,
      },
      [theme.breakpoints.between("lg", "xl")]: {
        padding: "4rem 9rem",
        maxWidth: 989,
      },
      [theme.breakpoints.between("xl", "xxl")]: {
        padding: "4rem 15rem",
        maxWidth: 1039,
      },
      [theme.breakpoints.up("xxl")]: {
        padding: "4rem 15rem",
        maxWidth: 1760,
      },

    },

    logo: {
      height: "2.5rem",
      width: "7.5rem",
    },
    title: {
      ...theme.typography.h5,
      color: theme.palette.common.white,
      paddingBottom: "1rem",
      textAlign: "left",
      [theme.breakpoints.down("lg")]: {
        textAlign: "center",
      },
    },
    subtitle: {
      ...theme.typography.body,
      color: theme.palette.common.gray,
      paddingBottom: "0.5rem",
      textAlign: "left",
      [theme.breakpoints.down("lg")]: {
        textAlign: "center",
      },
    },
    imageWrapper: {
      height: "1.1rem",
      width: "1.1rem",
      margin: 0,
      padding: 0,
    },
    gridBlock: {
      [theme.breakpoints.down("lg")]: {
        marginBottom: "1.5rem",
      },
    },
    logoWrapper: {
      marginBottom: "1.5rem",
    },
  };
});

function Footer() {
  const { classes } = useStyles();
  const theme = useTheme();
  const matchesLG = useMediaQuery(theme.breakpoints.down("lg"));

  return (
    <footer className={classes.footer}>
      <Grid container justifyContent="space-between">
        <Grid
          item
          container
          justifyContent={matchesLG ? "center" : "flex-start"}
          alignItems="flex-start"
          lg={4}
          sm={12}
          xs={12}
        >
          <Grid item className={classes.logoWrapper}>
            <Link href="/">
              <LogoHeader color={theme.palette.common.white} />
            </Link>
          </Grid>
        </Grid>
        <Grid
          item
          container
          justifyContent={matchesLG ? "center" : "flex-start"}
          alignItems="flex-start"
          lg={2}
          sm={12}
          xs={12}
          className={classes.gridBlock}
        >
          <Grid item>
            <Link href="/features">
              <Typography className={classes.title}>Features</Typography>
            </Link>
            <Link href="/features#link-shortening">
              <Typography className={classes.subtitle}>
                Link Shortening
              </Typography>
            </Link>
            <Link href="/features#branded-links">
              <Typography className={classes.subtitle}>
                Branded Links
              </Typography>
            </Link>
            <Link href="/features#analytics">
              <Typography className={classes.subtitle}>Analytics</Typography>
            </Link>
          </Grid>
        </Grid>
        <Grid
          item
          container
          justifyContent={matchesLG ? "center" : "flex-start"}
          alignItems="flex-start"
          lg={2}
          sm={12}
          xs={12}
          className={classes.gridBlock}
        >
          <Grid item>
            <Link href="/resources">
              <Typography className={classes.title}>Resources</Typography>
            </Link>
            <Link href="/resources#blog">
              <Typography className={classes.subtitle}>Blog</Typography>
            </Link>
            <Link href="/resources#developers">
              <Typography className={classes.subtitle}>Developers</Typography>
            </Link>
            <Link href="/resources#support">
              <Typography className={classes.subtitle}>Support</Typography>
            </Link>
          </Grid>
        </Grid>
        <Grid
          item
          container
          justifyContent={matchesLG ? "center" : "flex-start"}
          alignItems="flex-start"
          lg={2}
          sm={12}
          xs={12}
          className={classes.gridBlock}
        >
          <Grid item>
            <Link href="/company">
              <Typography className={classes.title}>Company</Typography>
            </Link>
            <Link href="/company#about">
              <Typography className={classes.subtitle}>About</Typography>
            </Link>
            <Link href="/company#our-team">
              <Typography className={classes.subtitle}>Our Team</Typography>
            </Link>
            <Link href="/company#careers">
              <Typography className={classes.subtitle}>Careers</Typography>
            </Link>
            <Link href="/company#contact">
              <Typography className={classes.subtitle}>Contact</Typography>
            </Link>
          </Grid>
        </Grid>
        <Grid
          item
          container
          justifyContent={matchesLG ? "center" : "flex-end"}
          alignItems="flex-start"
          lg={2}
          sm={12}
          xs={12}
          spacing={2}
        >
          <Grid item>
            <Link href="https://www.facebook.com/" target="_blank">
              <div className={classes.imageWrapper}>
                <IconFacebook color={"#ffffff"} />
              </div>
            </Link>
          </Grid>
          <Grid item>
            <Link href="https://twitter.com/" target="_blank">
              <div className={classes.imageWrapper}>
                <IconTwitter color={"#ffffff"} />
              </div>
            </Link>
          </Grid>
          <Grid item>
            <Link href="https://www.pinterest.com/" target="_blank">
              <div className={classes.imageWrapper}>
                <IconPinterest color={"#ffffff"} />
              </div>
            </Link>
          </Grid>
          <Grid item>
            <Link href="https://www.instagram.com/" target="_blank">
              <div className={classes.imageWrapper}>
                <IconInstagram color={"#ffffff"} />
              </div>
            </Link>
          </Grid>
        </Grid>
      </Grid>
    </footer>
  );
}

export default Footer;
