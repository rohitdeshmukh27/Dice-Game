import React, { useState, useEffect } from "react";
import styled from "styled-components";

const ScoreContainer = ({ score }) => {
  const [displayScore, setDisplayScore] = useState(score);

  useEffect(() => {
    if (score === displayScore) return;

    const step = score > displayScore ? 1 : -1;
    const interval = setInterval(() => {
      setDisplayScore((prev) => {
        if (prev === score) {
          clearInterval(interval);
          return prev;
        }
        return prev + step;
      });
    }, 50); // Adjust speed by changing this value (lower = faster)

    return () => clearInterval(interval);
  }, [score, displayScore]);

  return (
    <Container>
      <h1 className={score !== displayScore ? "animating" : ""}>
        {displayScore}
      </h1>
      <h2>Total Score</h2>
    </Container>
  );
};

export default ScoreContainer;

const Container = styled.div`
  text-align: center;

  h1 {
    font-size: 100px;
    line-height: 1;
    margin: 0;
    transition: color 0.2s ease;

    &.animating {
      color: var(--primary);
    }
  }

  h2 {
    font-size: 24px;
    font-weight: 500;
    margin: 0;
    white-space: nowrap;
  }
`;
