import React, { useState, useEffect } from "react";
import Card from "./Card";

export default function CardContainer({ score, setScore }) {
  const [images, setImages] = useState([]);

  const numbers = [];

  function getRandom() {
    const num = Math.floor(Math.random() * 1651);
    if (!numbers.includes(num)) {
      return num;     
    } else {
      return getRandom();
    }
  }

  useEffect(() => {
    while (numbers.length !== 10) {
      const num = getRandom();
      numbers.push(num);
    }
    setImages(numbers);
  }, []);

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
  }

  function handleCorrect() {
    setScore(score + 1);
    const next = images.slice();
    shuffleArray(next);
    setImages(next);
  }

  return (
    <div className="Card-Container">
      {images.map((img) =>
        <Card
          key={img}
          src={require(`../assets/loading/img_${img}.jpg`)}
          handleCorrect={handleCorrect}
        />
      )}
    </div>
  );
}