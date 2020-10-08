import React from "react";
import { Paper, Typography, makeStyles } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { fetchProducts, FETCH_PRODUCTS } from "store/products/productsActions";
import Test from "./Test";

const styles = makeStyles({
  root: {
    background: "linear-gradient(45deg, #fe6b8b 30%, #ff8e53 90%)",
    width: "100vw",
    height: "90vh",
    textAlign: "center",
  },
});

const HomePage = () => {
  const dispatch = useDispatch();
  const classes = styles();

  React.useEffect(() => {
    dispatch(fetchProducts(FETCH_PRODUCTS));
  });

  return (
    <Paper className={classes.root}>
      <Typography variant="h1" color="primary">
        HomePage
      </Typography>
      <Test />
    </Paper>
  );
};

export default HomePage;
