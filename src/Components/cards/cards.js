import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { Card, CardContent, Grid } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  cards: {
    minWidth: 575,
    marginLeft: 80,
    marginBottom: 20,
  },
  typography: {
    fontSize: 20,
    textAlign: "center",
    fontWeight: "600"
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
    textAlign: "center",
  },
}));  

const Cards = ({ name, city }) => {
  const classes = useStyles();

  return (
    <>
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justify="center"
        // style={{ minHeight: "100vh" }}
      >
        <Grid item xs={3}>
          <Card className={classes.cards} variant="outlined">
            <CardContent>

              <Grid item md={12}>
                <Typography className={classes.typography}>Name</Typography>
                <Typography className={classes.pos} color="textSecondary" >
                  {`${name}`}
                </Typography>
              </Grid>
              <Grid item md={12}>
              <Typography className={classes.typography}>Location</Typography>
                <Typography className={classes.pos} color="textSecondary">
                  {`${city}`}
                </Typography>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </>
  );
};

Cards.propTypes = {
  name: PropTypes.string,
  city: PropTypes.string,
};

export default Cards;
