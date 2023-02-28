import React from "react";
import CardContainer from "./Card-Container";

export default function Main({ score, setScore, setBestScore }) {

  return (
    <div className="Main">
        <div className="content">
          <CardContainer
            score={score}
            setScore={setScore}
            setBestScore={setBestScore}
          />
        </div>
    </div>
  );
}