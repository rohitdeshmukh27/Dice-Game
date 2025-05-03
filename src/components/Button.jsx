import React from "react";
import styled from "styled-components";

const Button = ({ title, onClick, isOutline }) => {
  return (
    <StartBtn className={isOutline ? "isOutline" : "isSolid"} onClick={onClick}>
      {title}
    </StartBtn>
  );
};

export default Button;

const StartBtn = styled.button`
  padding: 10px 18px;
  width: 220px;
  border-radius: 8px;
  height: 44px;
  cursor: pointer;
  font-size: 16px;
  font-weight: 600;
  letter-spacing: 0.5px;
  transition: all 0.3s ease;
  position: relative;
  transform: translateY(0);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  &.isSolid {
    background: var(--primary);
    color: white;
    border: none;
    box-shadow: 0 4px 0 darken(var(--primary), 10%);

    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 6px 0 darken(var(--primary), 10%);
      background: var(--primary); // Remove the transparency
      filter: brightness(110%); // Make it slightly brighter instead
    }

    &:active {
      transform: translateY(2px);
      box-shadow: 0 2px 0 darken(var(--primary), 10%);
    }
  }

  &.isOutline {
    background: transparent;
    color: var(--secondary);
    border: 2px solid var(--secondary);
    box-shadow: 0 4px 0 darken(var(--secondary), 10%);

    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 6px 0 darken(var(--secondary), 10%);
      background: rgba(231, 111, 81, 0.1);
    }

    &:active {
      transform: translateY(2px);
      box-shadow: 0 2px 0 darken(var(--secondary), 10%);
    }
  }
`;
