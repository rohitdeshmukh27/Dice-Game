import React from "react";
import styled from "styled-components";
import Button from "./Button";

const HandlingPage = ({ toggle }) => {
  return (
    <Container>
      <img src="./images/dices.png" alt="Dice" />
      <div className="content">
        <h1>Dice Game</h1>
        <Button title="Play Now" onClick={toggle} />
      </div>
    </Container>
  );
};

export default HandlingPage;

const Container = styled.div`
  max-width: 1180px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin: 0 auto;

  .content {
    text-align: right;
  }

  .content h1 {
    font-size: 96px;
  }
`;
