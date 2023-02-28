import React from "react";
import Counter from "./Counter";
import Dark from "../assets/DarkHarvest.png";

export default function Header({ score, bestScore }) {

  return (
    <div className="Header">
      <img alt="Logo" className="dark-harvest" src={Dark} />
      League Memory Game
      <Counter score={score} bestScore={bestScore} />
    </div>
  );
}