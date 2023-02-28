import React from "react";

export default function Counter({ score, bestScore }) {

  return (
    <div className="Counter">
      <span className="score">Score: {score}</span>
      <span className="score">Best: {bestScore}</span>
    </div>
  );
}