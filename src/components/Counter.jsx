import React from "react";

export default function Counter({ score }) {

  return (
    <div className="Counter">
      <div className="score">{score}</div>
    </div>
  );
}