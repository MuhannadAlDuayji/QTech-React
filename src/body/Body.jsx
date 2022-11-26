import React, { useEffect } from "react";
import axios from "axios";
import styled from "@emotion/styled";

const baseURL = "http://localhost:8080/getTechPlan";

const data = {
  localDate: "2022-01-01",
  wayForMemorized: true,
  numberOfPageDrs: "0",
  numberOfLineDrs: "5.0",
  numberOfDaysSmallMemorized: 3,
  numberOfPageBiggestMemorized: 2,
  numberOfSorah: 1,
  numberOfAyah: 1,
  numberOfSorahBiggestMemorize: 1,
  numberOfAyahBiggestMemorize: 1,
  numberOfDayPeerWeek: 7,
  numberOfDayForPlan: 20,
  percentage: "0.3",
  firstName: "Muhannad-vs",
  lastName: "Alduayji-vs",
};

const Body = () => {
  axios
    .post(baseURL, {
      localDate: "2022-01-01",
      wayForMemorized: true,
      numberOfPageDrs: "0",
      numberOfLineDrs: "5.0",
      numberOfDaysSmallMemorized: 0,
      numberOfPageBiggestMemorized: 2,
      numberOfSorah: 1,
      numberOfAyah: 1,
      numberOfSorahBiggestMemorize: 1,
      numberOfAyahBiggestMemorize: 1,
      numberOfDayPeerWeek: 7,
      numberOfDayForPlan: 20,
      percentage: "0.3",
    })
    .then(function (response) {
      console.log(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });

  return <div>"Muhannad Alduayji"</div>;
};

export default Body;
