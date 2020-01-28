import React from "react";
import FGLogo from "../assets/FGLogo";
import { Link } from "react-router-dom";
// import { useAuth0 } from "../react-auth0-wrapper";
// import { lock } from "../react-auth0-wrapper";
import { Grid, Typography, Box } from "@material-ui/core/";

import { sitemapStyles } from "../styles/sitemapStyles";

const Sitemap = () => {
  // const { loginWithRedirect, loginWithPopup } = useAuth0();
  const styles = sitemapStyles();

  // const login = () => {
  //   lock.show()
  // }
  return (
    <Box component="div" className={styles.sitemapContainer}>
      <Grid container className={styles.sitemap}>
        <Grid item className={styles.item}>
          <Typography variant="h5" component="h5">
            <Link to="/" className={styles.link}>
              <FGLogo siteMap={true} />
            </Link>
          </Typography>
        </Grid>
        <Grid item className={styles.item}>
          <Typography variant="subtitle2">
            <Link to="/about" className={styles.link}>
              ABOUT
            </Link>
          </Typography>
        </Grid>
        <Grid item className={styles.item}>
          <Typography variant="subtitle2">
            <a href="mailto:labs16grantly@gmail.com" className={styles.link}>
              CONTACT
            </a>
          </Typography>
        </Grid>
        <Grid item className={styles.item}>
          <Typography variant="subtitle2">
            <a href="https://www.1517fund.com/" className={styles.link}>
              1517 FUND
            </a>
          </Typography>
        </Grid>
        <Grid container justify="center" alignItems="flex-end">
          <Typography variant="subtitle2" className={styles.copy}>
            &copy; 2020 FOUNDER GRANTS. ALL RIGHTS RESERVED.
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Sitemap;
