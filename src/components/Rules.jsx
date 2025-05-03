import React from "react";
import styled from "styled-components";

const Rules = ({ isVisible, onClose }) => {
  if (!isVisible) return null;

  return (
    <RulesContainer>
      <div className="rules-content">
        <button className="close-btn" onClick={onClose}>
          ×
        </button>
        <h2>How to play dice game</h2>
        <div className="text">
          <p>Select any number</p>
          <p>Click on dice image</p>
          <p>
            after click on dice if selected number is equal to dice number you
            will get same point as dice
          </p>
          <p>if you get wrong guess then 2 point will be dedcuted</p>
        </div>
      </div>
    </RulesContainer>
  );
};

export default Rules;

const RulesContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  animation: fadeIn 0.3s ease-in-out;

  .rules-content {
    background: white;
    padding: 40px;
    border-radius: 16px;
    position: relative;
    max-width: 600px;
    width: 90%;
    animation: slideIn 0.3s ease-in-out;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
    border: 2px solid var(--accent);
  }

  .close-btn {
    position: absolute;
    top: 10px;
    right: 10px;
    background: none;
    border: none;
    font-size: 24px;
    cursor: pointer;
    padding: 5px 10px;
    border-radius: 50%;
    transition: all 0.3s ease;

    &:hover {
      background: rgba(0, 0, 0, 0.1);
    }
  }

  h2 {
    color: var(--primary);
    font-size: 28px;
    margin-bottom: 24px;
    text-align: center;
    text-transform: uppercase;
    letter-spacing: 1px;
  }

  .text p {
    color: var(--text);
    font-size: 16px;
    line-height: 1.6;
    margin: 16px 0;
    padding-left: 20px;
    position: relative;

    &:before {
      content: "•";
      color: var(--secondary);
      position: absolute;
      left: 0;
      font-size: 20px;
    }
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes slideIn {
    from {
      opacity: 0;
      transform: translateY(50px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;
