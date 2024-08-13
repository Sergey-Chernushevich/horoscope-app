import React from "react";
import classes from "./HoroscopeWrapper.module.css";
import CardsContainer from "../CardsContainer/CardsContainer";
import { Route, Routes } from "react-router-dom";
import HoroscopeInfo from "../HoroscopeInfo/HoroscopeInfo";
const { getData } = require("../../data");

const cards = getData();

function HoroscopeWrapper() {
  return (
    <div className={classes.HoroscopeWrapper}>
      <h1 className={classes.mainTitle}>Your horoscope</h1>
      {/* <CardsContainer cards={cards} /> */}
      <Routes>
        <Route path="/" element={<CardsContainer cards={cards} />} />
        {cards.map((card, index) => {
          return (
            <Route
              key={index}
              path={`/${card.title}_info`}
              element={
                <HoroscopeInfo
                  title={card.title}
                  image={card.image}
                  date={card.date}
                />
              }
            />
          );
        })}
      </Routes>
    </div>
  );
}

export default HoroscopeWrapper;
