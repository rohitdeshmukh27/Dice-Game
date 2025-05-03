import React from "react";
import styled from "styled-components";

const Number = ({ title, onClick, isSelected }) => {
  return (
    <NumberButton className={isSelected ? "selected" : ""} onClick={onClick}>
      <h1>{title}</h1>
    </NumberButton>
  );
};

export default Number;

const NumberButton = styled.button`
  width: 72px;
  height: 72px;
  border: none;
  background: white;
  color: var(--text);
  font-size: 24px;
  border-radius: 12px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  position: relative;
  transform: translateY(0);

  h1 {
    margin: 0;
    font-size: 24px;
    font-weight: 600;
  }

  &.selected {
    background: var(--primary);
    color: white;
    box-shadow: 0 4px 0 darken(var(--primary), 10%);
  }

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 8px rgba(0, 0, 0, 0.15);
  }

  &:active {
    transform: translateY(2px);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
`;
