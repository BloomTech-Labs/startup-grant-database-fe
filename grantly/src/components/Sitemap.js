import React from "react";
import { Link } from "react-router-dom";
import { useAuth0 } from "../react-auth0-wrapper";
import { lock } from "../react-auth0-wrapper";
import { Grid, Typography } from "@material-ui/core/";

import { sitemapStyles } from "../styles/sitemapStyles";

const Sitemap = () => {
  const { loginWithRedirect, loginWithPopup, } = useAuth0();
  const styles = sitemapStyles();

  // const login = () => {
  //   lock.show()
  // }
  return (
    <div className={styles.container}>
      <Grid container spacing={8} className={styles.sitemap}>
        <Grid item className={styles.item}>
          <Link to="/" className={styles.link}>
            <Typography variant="h5" component="h5">
              Founder Grants
            </Typography>
          </Link>
        </Grid>
        <Grid item className={styles.item}>
          <ul className={styles.links}>
            <Link to="/" className={styles.link}>
              <Typography variant="subtitle2">ABOUT</Typography>
            </Link>
            <a href="mailto:labs16grantly@gmail.com" className={styles.link}>
              <Typography variant="subtitle2">CONTACT</Typography>
            </a>
            <a href="https://www.1517fund.com/" className={styles.link}>
              <Typography variant="subtitle2">1517 FUND</Typography>
            </a>
          </ul>
        </Grid>
        <Grid item className={styles.item}>
          {/* <Link to="/admin" className={styles.link}> */}
          <Typography variant="subtitle2" onClick={() => loginWithRedirect({})}>
            ADMIN LOGIN
          </Typography>
          {/* </Link> */}
        </Grid>
        <Grid container justify="center" alignItems="flex-end">
          <Typography variant="subtitle2">
            &copy; 2019 FOUNDER GRANTS. ALL RIGHTS RESERVED.
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default Sitemap;
