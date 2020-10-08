import React from "react";
import { Paper, Typography, makeStyles } from "@material-ui/core";

const styles = makeStyles({
  root: {
    background: "linear-gradient(45deg, #fe6b8b 30%, #ff8e53 90%)",
    width: "100vw",
    height: "90vh",
    textAlign: "center",
  },
});

const HomePage = () => {
  const classes = styles();
  return (
    <Paper className={classes.root}>
      <Typography variant="h1" color="primary">
        HomePage
      </Typography>
    </Paper>
  );
};

export default HomePage;
