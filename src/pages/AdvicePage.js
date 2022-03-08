import React from "react";
import { AdviceBox } from "./advicePage/adviceStyles";
import { adviceData } from "./advicePage/adviceConsts";

export const AdvicePage = () => {
  return (
    <div>
      <AdviceBox>{adviceData[0].catFacts.catFactOne}</AdviceBox>
    </div>
  );
};
