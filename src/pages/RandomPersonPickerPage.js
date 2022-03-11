import React, { useEffect, useState } from "react";
import { allPersons } from "./randomPersonPickerPage/randomPersonConsts";
import {
  RandomPersonBox,
  PageContainer,
  StyledButton,
  RandomText,
} from "./randomPersonPickerPage/randomPersonPickerStyles";

export const RandomPersonPickerPage = () => {
  const [randomPerson, setRandomPerson] = useState(allPersons);
  const [randomNumber, setRandomNumber] = useState(0);

  const chooseVictim = () =>
    setRandomNumber(Math.floor(Math.random() * (19 - 1) + 0));

  return (
    <PageContainer>
      <RandomPersonBox>
        <RandomText>{randomPerson[randomNumber]}</RandomText>
      </RandomPersonBox>
      <StyledButton onClick={chooseVictim}> Button of dethhhhh</StyledButton>
    </PageContainer>
  );
};
