import React from "react";

export default function Card({ id, src, handleClick }) {

  return (
    <div className="Card">
      <img
        alt="Card"
        src={src}
        onClick={() => handleClick(id)}
        />
    </div>
  );
}
