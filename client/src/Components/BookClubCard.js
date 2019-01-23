import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import {
  Typography,
  Card,
  CardContent,
  CardActions,
  CardButton,
  CardHeader,
  CardMedia,
  Divider,
  Grid, 
} from "@material-ui/core/";
import Avatar from "./Avatar";
import "typeface-roboto";
const styles = {
  card: {
    minWidth: 275,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    margin: 20,
  },
  media: {
    width: 150,
    padding: "50%"
  },
};
function BookClubCard(props) {
  const { classes } = props;
  return (
    <Card className={classes.card}>
      <CardHeader title="Book Club #1" />
      <div className={classes.cover}>
        <img src="http://books.google.com/books/content?id=2xAjuzPZHgMC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api" />
      </div>
      <CardContent>
        <Typography component="p">Members</Typography>
        <Divider />
        <Grid container spacing={12}>
          <Grid className={classes.gridItem} item xs={3}>
            <Avatar name={"Eric"} />
          </Grid>
          <Grid className={classes.gridItem} item xs={3}>
            <Avatar name={"So"} />
          </Grid>
          <Grid className={classes.gridItem} item xs={3}>
            <Avatar name={"Eric"} />
          </Grid>
          <Grid className={classes.gridItem} item xs={3}>
            <Avatar name={"So"} />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}

BookClubCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(BookClubCard);
