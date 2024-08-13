import React from "react";
import classes from "./CardsContainer.module.css";
import HoroscopeCard from "../HoroscopeCard/HoroscopeCard";
import { Link } from "react-router-dom";

function CardsContainer(props) {
  return (
    <div className={classes.cardsContainer}>
      {props.cards.map((card, index) => {
        return (
          <Link to={`/${card.title}_info`} key={index}>
            <HoroscopeCard
              title={card.title}
              image={card.image}
              date={card.date}
            />
          </Link>
        );
      })}
    </div>
  );
}

export default CardsContainer;
