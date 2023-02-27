import React from "react";

export default function Card({ src, handleCorrect }) {

  return (
    <div className="Card">
      <img alt="Card" src={src} onClick={handleCorrect} />
    </div>
  );
}
