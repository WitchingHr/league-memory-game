import React, { useContext } from "react";
import { Context } from "../App";

export default function Counter() {
  const { score, bestScore } = useContext(Context);

  return (
    <div className="Counter">
      <span className="score">Score: {score}</span>
      <span className="score">Best: {bestScore}</span>
    </div>
  );
}