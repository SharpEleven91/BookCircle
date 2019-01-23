import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Av from '@material-ui/core/Avatar';;
const styles = {
  avatar: {
    margin: 10,
    padding: 10,
  }
};

function Avatar(props) {
  const { classes } = props;
  return (
      <Av className={classes.avatar}>{props.name}</Av>
  );
}

Avatar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Avatar);