import React, { useState } from "react";
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
  Collapse
} from "@material-ui/core/";
import Avatar from "./Avatar";
import "typeface-roboto";
import { KeyboardArrowDown, KeyboardArrowRight } from "@material-ui/icons";
import { IconButton } from "@material-ui/core";
const styles = {
  card: {
    transition: "all 1s ease",
    minWidth: 275,
    maxWidth: 300,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    margin: 20
  },
  media: {
    width: 150,
    padding: "50%"
  },
  memberContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    flexWrap: "wrap",
  }
};
function BookClubCard(props) {
  const [extended, setExtended] = useState(false);
  const { classes } = props;
  const { name, currentBookImage, members } = props.club;
  const handleClick = () => {
    setExtended(!extended);
  };
  return (
    <Card className={classes.card}>
      <CardHeader title={name} />
      <div className={classes.cover}>
        <img alt="" src={currentBookImage} />
      </div>
      <CardContent>
        <Typography
          style={{ marginRight: 150, display: "inline" }}
          component="p"
          variant="p"
        >
          Members
        </Typography>
        <IconButton onClick={handleClick} size="small">
          {" "}
          {extended ? <KeyboardArrowDown /> : <KeyboardArrowRight />}
        </IconButton>
        <Collapse in={extended}>
        <div className={classes.memberContainer}>
          {members.map((member, index) => {
            return <Avatar key={index} name={member} />;
          })}
        </div>
        </Collapse>
      </CardContent>
    </Card>
  );
}

BookClubCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(BookClubCard);
