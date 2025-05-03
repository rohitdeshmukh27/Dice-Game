import React, { useState } from "react";
import styled from "styled-components";
import Number from "./Number";

const NumberSelection = ({
  setError,
  error,
  shake,
  selectNumber,
  setSelectNumber,
}) => {
  const arrNumber = [1, 2, 3, 4, 5, 6];

  const numberSelectorHandler = (value) => {
    setSelectNumber(value);
    setError("");
  };

  return (
    <NumberSelectionContainer shake={shake}>
      {error && <p className="error">{error}</p>}
      <div className="numberBtn">
        {arrNumber.map((value, i) => (
          <Number
            isSelected={selectNumber === value}
            key={i}
            title={value}
            onClick={() => numberSelectorHandler(value)}
          />
        ))}
      </div>
      <div>
        <h2 className="text">Select Number</h2>
      </div>
    </NumberSelectionContainer>
  );
};

export default NumberSelection;

const NumberSelectionContainer = styled.div`
  .error {
    color: red;
    font-size: 1.2rem;
    text-align: right;
    margin-bottom: 16px;
    animation: ${(props) =>
      props.shake ? "shakeAnimation 0.5s ease-in-out" : "none"};
  }

  @keyframes shakeAnimation {
    0% {
      transform: translateX(0);
    }
    25% {
      transform: translateX(-10px);
    }
    50% {
      transform: translateX(10px);
    }
    75% {
      transform: translateX(-5px);
    }
    100% {
      transform: translateX(0);
    }
  }

  .numberBtn {
    display: flex;
    gap: 24px;
    justify-content: end;
  }

  .text {
    margin-top: 20px;
    text-align: right;
  }
`;
