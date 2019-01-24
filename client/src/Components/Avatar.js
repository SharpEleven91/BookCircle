import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Av from '@material-ui/core/Avatar';;
const colors = ["#004189", "#0069B4", "#008BD2", "#FF595E", "#FFCA3A"];
const generateColor = () => {
  return colors[Math.floor(Math.random() * Math.floor(colors.length))];
}
const styles = {
  avatar: {
    margin: 5,
    color: "white",
  },
};

function Avatar(props) {
  const [color, setColor] = useState(generateColor());
  const { classes } = props;
  const name = props.name[0];
  return (
      <Av  data-testid="member" style={{backgroundColor: color}} className={classes.avatar}>{name}</Av>
  );
}

Avatar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Avatar);