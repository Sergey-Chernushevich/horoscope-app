import React from "react";
import classes from "./HoroscopeCard.module.css";

function HoroscopeCard(props) {
  const { title, image, date } = props;
  return (
    <div className={classes.horoscopeCard}>
      <img src={image} alt={title} className={classes.cardImage} />
      <h2 className={classes.cardTitle}> {props.title}</h2>
      <h3 className={classes.date}>{date}</h3>
    </div>
  );
}

export default HoroscopeCard;
