import React, { useState, useEffect } from "react";
import Card from "./Card";

export default function CardContainer({ score, setScore }) {
  const [images, setImages] = useState([]);
  const [correct, setCorrect] = useState([]);
  const [spree, setSpree] = useState(0);

  const numbers = [];
  // Fill numbers array with random numbers
  function getRandom() {
    const num = Math.floor(Math.random() * 1651);
    if (!numbers.includes(num)) {
      return num;     
    } else {
      return getRandom();
    }
  }

  // Set images to array of random numbers
  function setInitialState() {
    while (numbers.length !== 10) {
      const num = getRandom();
      numbers.push(num);
    }
    setImages(numbers);
  }

  // Call setInitialState on first render
  useEffect(() => {
    setInitialState();
  }, []);

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
  }

  function handleClick(id) {
    // If correct:
    if (!correct.includes(id)) {
      // Add card to correct array
      setCorrect([
        ...correct,
        id
      ]);
      handleCorrect();

    // If incorrect:
    } else {
      handleIncorrect();
    }
  }

  function playAudio() {
    let audio;
    switch (spree) {
      case 1:
        audio = new Audio(require('../assets/audio/first_blood.ogg'));
        break;
      case 2:
        audio = new Audio(require('../assets/audio/1_spree.ogg'));
        break;
      case 3:
        audio = new Audio(require('../assets/audio/2_spree.ogg'));
        break;
      case 4:
        audio = new Audio(require('../assets/audio/3_spree.ogg'));
        break;
      case 5:
        audio = new Audio(require('../assets/audio/4_spree.ogg'));
        break;
      case 6:
        audio = new Audio(require('../assets/audio/5_spree.ogg'));
        break;
      case 7:
      default:
        audio = new Audio(require('../assets/audio/6_spree.ogg'));
        break;
    }
    audio.play();
  }

  // Check if round is won on each correct click
  useEffect(() => {
    if (correct.length === 10) {
      // If so, play sound and reset the board with new images
      playAudio();
      setInitialState();
    }
  }, [correct]);

  function handleCorrect() {
    // Play sound
    const audio = new Audio(require('../assets/audio/correct.mp3'));
    audio.play();

    // Update score
    setScore(score + 1);

    // Shuffle images, set state
    const next = images.slice();
    shuffleArray(next);
    setImages(next);
  }

  function handleIncorrect() {
    // Play sound
    const audio = new Audio(require('../assets/audio/slain.ogg'));
    audio.play();

    // Reset score and board
    setScore(0);
    setInitialState();
  }

  return (
    <div className="Card-Container">
      {images.map((img) =>
        <Card
          key={img}
          id={img}
          src={require(`../assets/loading/img_${img}.jpg`)}
          handleClick={handleClick}
        />
      )}
    </div>
  );
}