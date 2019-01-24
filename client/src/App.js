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

const testPropsOne = {
  name: "Sci-fi 4 Life",
  currentBookImage: "http://books.google.com/books/content?id=2xAjuzPZHgMC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
  members: ["Phil", "Eric", "Pamela", "John", "Phil", "Eric", "Pamela", "John"],
}
const testPropsTwo = {
  name: "Random Reads",
  currentBookImage: "http://books.google.com/books/content?id=5yzHdm8vOqMC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
  members: ["Derek", "Angela", "Richard"],
}
export default function App(props) {
  const { classes } = props;
  return (
    <div style={style} className="bookClubContainer">
      <BookClubCard club={{...testPropsOne}}/>
      <BookClubCard club={{...testPropsTwo}}/>
      <BookClubCard club={{...testPropsOne}}/>
      <BookClubCard club={{...testPropsTwo}}/>
      <BookClubCard club={{...testPropsOne}}/>
      <BookClubCard club={{...testPropsTwo}}/>
      <BookClubCard club={{...testPropsOne}}/>
      <BookClubCard club={{...testPropsTwo}}/>
    </div>
  );
}
