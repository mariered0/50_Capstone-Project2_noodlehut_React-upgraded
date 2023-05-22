import { Container, Typography } from "@material-ui/core";
import React from "react";
import useStyles from './Home.styles';


function Home() {
  const classes = useStyles();
  
  return (
    <main>
      <div className={classes.container}>
      <Container maxWidth="sm" style={{ marginTop: '100px' }}>
        <Typography variant="h2" align="center" color="textPrimary" gutterBottom>NoodleHut
        </Typography>
        <Typography variant="h5" align="center" color="textSecondary" paragraph>
            Thai home-style coocking. We serve authentically traditional Thai dishes. No dine-in. This is a take-out restaurant.
        </Typography>

      </Container>
      </div>
    </main>
  );
}

export default Home;
