import React from "react";
import styled from "styled-components";
import Number from "./Number";
import Button from "./Button";
import ScoreContainer from "./ScoreContainer";
import NumberSelection from "./NumberSelection";
import RoleDice from "./RoleDice";
import { useState } from "react";

const GamePlay = () => {
  const [score, setScore] = useState(0);
  const [selectNumber, setSelectNumber] = useState();
  const [currentDice, setCurrentDice] = useState(1);
  const [error, setError] = useState("");
  const [shake, setShake] = useState(false);

  const generateRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  const roleDice = () => {
    if (!selectNumber) {
      setError("You have to select a number first!");
      setShake(true);
      setTimeout(() => setShake(false), 500);
      return;
    }
    setError("");
    setShake(false);

    const randomNumber = generateRandomNumber(1, 6);
    setCurrentDice(randomNumber);

    if (selectNumber === randomNumber) {
      setScore((prev) => prev + randomNumber);
    } else {
      setScore((prev) => prev - randomNumber);
    }
    setSelectNumber(undefined);
  };

  const resetGame = () => {
    setScore(0);
    setSelectNumber(undefined);
    setCurrentDice(1);
    setError("");
    setShake(false);
  };

  return (
    <Container>
      <div className="top">
        <ScoreContainer score={score} />
        <NumberSelection
          error={error}
          setError={setError}
          shake={shake}
          selectNumber={selectNumber}
          setSelectNumber={setSelectNumber}
        />
      </div>
      <RoleDice
        currentDice={currentDice}
        roleDice={roleDice}
        resetGame={resetGame} // Pass resetGame function
      />
    </Container>
  );
};

export default GamePlay;

const Container = styled.div`
  max-width: 1180px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 100vh;
  margin: 0 auto;

  .top {
    display: flex;
    justify-content: space-between;
    width: 100%;
    align-items: center;
    padding: 0 80px;
    text-align: right;
  }
`;
