import React from "react";
import { AboutUsComponent } from "./aboutUsPage/aboutUsPageComponents";
import { aboutApiCall } from "./aboutUsPage/aboutUsPageApiCall";
import {
  AdviceOne,
  AdviceTwo,
  AdviceThree,
} from "./aboutUsPage/aboutUsPageComponents";

const AboutUsPage = () => {
  return (
    <div>
      <AdviceOne />
      <AdviceTwo />
      <AdviceThree />
    </div>
  );
};

export default AboutUsPage;
