import { Container, Typography } from "@material-ui/core";
import React from "react";

function Home() {
  return (
    <main>
      <Container maxWidth="sm">
        <Typography variant="h2" align="center" color="textPrimary" gutterBottom>NoodleHut
        </Typography>
        <Typography variant="h5" align="center" color="textSecondary" paragraph>
            Thai home-style coocking. We serve authentically traditional Thai dishes. No dine-in. This is a take-out restaurant.
        </Typography>

      </Container>
    </main>
  );
}

export default Home;
