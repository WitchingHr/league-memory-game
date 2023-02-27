import React from "react";
import Dark from "../assets/DarkHarvest.png";

export default function Header() {

  return (
    <div className="Header">
      <img className="dark-harvest" src={Dark} />
      League Memory Game
    </div>
  );
}