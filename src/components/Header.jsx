import React from "react";
import Counter from "./Counter";
import Dark from "../assets/DarkHarvest.png";

export default function Header() {

  return (
    <div className="Header">
      <img alt="Logo" className="dark-harvest" src={Dark} />
      League Memory Game
      <Counter />
    </div>
  );
}