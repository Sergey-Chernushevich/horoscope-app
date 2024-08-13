import React, { useEffect, useState } from "react";
import classes from "./HoroscopeInfo.module.css";
import { Link } from "react-router-dom";

function HoroscopeInfo(props) {
  const { title, image, date } = props;
  const [horoscope, setHoroscope] = useState();

  async function getHoroscope(title, language) {
    const requestBody = {
      sign: `${title.toLowerCase()}`,
      language: `${language}`,
    };
    const jsonRequestBody = JSON.stringify(requestBody);
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: jsonRequestBody,
    };
    const response = await fetch(
      "https://poker247tech.ru/get_horoscope/",
      options
    );
    const data = await response.json();
    return data;
  }

  async function updateState() {
    const data = await getHoroscope(title, "original");
    if (data) {
      setHoroscope(data.horoscope);
    }
  }

  useEffect(() => {
    updateState();
  });

  return (
    <div className={classes.infoWrapper}>
      <img src={image} alt={title} className={classes.image} />
      <h2 className={classes.title}>{title}</h2>
      <h3 className={classes.date}>{date}</h3>
      <p className={classes.article}>{horoscope}</p>
      <Link to="/">
        <button className={classes.button}>BACK</button>
      </Link>
    </div>
  );
}

export default HoroscopeInfo;
