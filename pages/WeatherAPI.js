import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

function WeatherAPI() {
  const [weaterData, setweaterData] = useState({});
  const getData = async () => {
    const res = axios
      .get(
        `${process.env.NEXT_PUBLIC_BASE_URL}London&units=${process.env.NEXT_PUBLIC_STANDARD}&appid=${process.env.NEXT_PUBLIC_API_KEY}`
      )
      .then((results) => {
        console.log(results);
        setweaterData(results.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return <div></div>;
}

export default WeatherAPI;
