import React from "react";
import CardContainer from "./Card-Container";

export default function Main() {

  return (
    <div className="Main">
        <div className="content">
          <CardContainer />
        </div>
        <div className="footer">
          <a href="https://github.com/WitchingHr/league-memory-game">
            App created by WitchingHr, 2023.
          </a>
          <p>All image and sound assets are owned and created by Riot Games.</p>
        </div>
    </div>
  );
}