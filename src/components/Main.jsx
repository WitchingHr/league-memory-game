import React, { useState } from "react";
import CardContainer from "./Card-Container";
import Counter from "./Counter";

export default function Main() {
  const [score, setScore] = useState(0);

  return (
    <div className="Main">
        <div className="content">
          <CardContainer score={score} setScore={setScore} />
        </div>
    </div>
  );
}