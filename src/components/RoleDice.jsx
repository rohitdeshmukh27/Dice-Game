import React, { useState } from "react";
import Button from "./Button";
import styled from "styled-components";
import Rules from "./Rules";

const RoleDice = ({ currentDice, roleDice, resetGame }) => {
  const [showRules, setShowRules] = useState(false);

  const toggleRules = () => {
    setShowRules(!showRules);
    if (!showRules) {
      window.scrollTo({
        top: document.body.scrollHeight,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <DiceContainer>
        <div className="diceImg" onClick={roleDice}>
          <img
            src={`./images/dice_${currentDice}.png`}
            alt={`${currentDice} Image`}
          />
        </div>
        <div className="text">Click on Dice to roll</div>
        <div className="restartBtn">
          <Button isOutline={false} title="Restart Game" onClick={resetGame} />
        </div>
        <div className="showRules">
          <Button isOutline={true} title="Show Rules" onClick={toggleRules} />
        </div>
      </DiceContainer>
      <Rules
        isVisible={showRules}
        onClose={() => {
          setShowRules(false);
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          });
        }}
      />
    </>
  );
};

export default RoleDice;

const DiceContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 15px;

  .diceImg {
    cursor: pointer;
    transition: all 0.3s ease;

    img {
      width: 250px;
      height: 250px;
    }

    &:hover {
      transform: scale(1.1) rotate(15deg);
      filter: drop-shadow(0 8px 16px rgba(0, 0, 0, 0.2));
    }

    &:active {
      transform: scale(0.95) rotate(0deg);
    }
  }

  .text {
    font-size: 24px;
  }

  .restartBtn,
  .showRules {
    display: flex;
    justify-content: center;
    margin-top: 16px;
  }
`;
