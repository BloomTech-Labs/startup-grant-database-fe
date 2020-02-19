import React from "react";
import { Grid, Typography, Card, Link } from "@material-ui/core";
import { aboutStyles } from "./aboutStyles";
import Lambda from '../../assets/lambda.png';
import Fund1517 from '../../assets/1517Fund.png';
import Github from '../../assets/teamGithub.png';
import {Helmet} from 'react-helmet';

const aboutCards = [
  {
    url: "https://www.1517fund.com/",
    image: Fund1517,
    alt: '1517 Fund',
    description: 'You can find out more about 1517 Fund here.'
  },
  {
    url: "https://lambdaschool.com/",
    image: Lambda,
    alt: 'Lambda School',
    description: 'You can find out more about Lambda School here.'
  },
  {
    url: "https://github.com/Lambda-School-Labs/startup-grant-database-fe",
    image: Github,
    alt: 'GitHub is a Git repository hosting service, but it adds many of its own features.',
    description: 'You can find out more about the student team and the project, including the open source code here.'
  },
]

export default () => {
  const classes = aboutStyles();
  return (
    <main className={classes.layout}>
      <Helmet>
        <title>Founder Grants | About</title>
        <meta name="description" content="List of available grants" />
        <meta name="keywords" content="grant,startup,funding,invest,financing" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:site_name" content="Startup Grant Database" />

      </Helmet>
      <Card className={classes.aboutCardContainer}>
        <Card className={classes.aboutIntroCardContainer}>
          <Grid container justify="center" className={classes.aboutIntro}>
            <Grid item className={classes.aboutTopCard}>
              <Typography variant="h5">
                Founder Grants was built to solve one basic problem: connecting
                early stage founders with appropriate available resources to
                fund their inventions. It was developed by 1517 Fund in
                partnership with Lambda School students.
              </Typography>
            </Grid>
          </Grid>

          <Grid
            container
            justify="space-around"
            className={classes.aboutContainer}
          >
            {aboutCards.map(({url, image, alt, description}, id) => (
                <Grid item md={3} xs={12} key={id}>
                  <Link href={url}>
                    <Card className={classes.aboutCard}>
                      <img src={image} alt={alt} />
                      <Typography variant='subtitle1'>
                        {description}
                      </Typography>
                    </Card>
                  </Link>
                </Grid>
            ))}
          </Grid>
        </Card>
      </Card>
    </main>
  );
};
