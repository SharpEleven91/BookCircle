import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import Navigation from "./Components/Navigation";
import BookClubCard from './Components/BookClubCard';

const style = {
  display: "flex",
  justifyContent: "space-around",
  alignItems: "center",
  flexWrap: "wrap",
}
export default function App(props) {
  const { classes } = props;
  return (
    <div style={style}className="bookClubContainer">
      <BookClubCard/>
      <BookClubCard/>
      <BookClubCard/>
      <BookClubCard/>
      <BookClubCard/>
      <BookClubCard/>
      <BookClubCard/>
    </div>
  );
}
