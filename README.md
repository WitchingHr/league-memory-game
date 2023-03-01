# League Memory Game
<img width="1462" alt="Screenshot 2023-03-01 at 10 16 39 AM" src="https://user-images.githubusercontent.com/41353202/222182194-cfda8771-f9f8-4158-94d5-9007f758f257.png">
<img width="431" alt="Screenshot 2023-03-01 at 10 17 17 AM" src="https://user-images.githubusercontent.com/41353202/222182213-99ee132d-a0b7-4339-82f2-90e280ca103b.png">

## Basic Gameplay:
Each round, the player is given 12 cards to choose from. The player must select each card exactly once to complete the round. If the player selects a card more then once, the round is lost and the game is reset. 

## Abstract
Memory game created for The Odin Project curriculum. 

This project was build with React, with the main goal being to play around with the lifecycle hook, `useEffect`. 

I was able to use this hook to call a state initializer on first render like so:

```
useEffect(() => {
    setInitialState();
}, []);
```

This also let me call the exact function again at the end of the round to grab a new set of images without having to alter the function: 

```
useEffect(() => {
    if (correct.length === 12) {

      // Get new board
      setInitialState();

      // Reset correct array
      setCorrect([]);

    }
  }, [correct]);

```
Here I used another lifecycle hook to watch the `correct` array to determine if the round was won every time that the array was updated.

Additionally, I made use of the javascript `Element.animate()` method for the first time. I found it was easier to use this method than toggle class method for single occurrence animations (in this case, round win and loss).

Lastly, I was able to dynamically import a random set of a dozen images out of 1651 each round. I was able to accomplish this first by putting all the images in a single folder and auto-renaming all the files to this format: 
`img_1.png, img_2.png, img_3.png, etc.`
Then I used a function to fill an array with 12 unique random numbers. Next, I set the `images` state to that array, and afterwards, mapped through the `images` array and rendered each image using a temperate literal string like so:
```
{images.map((img) =>
  <img
    src={require(`../assets/big/img_${img}.jpg`)}
  />
)}
```
## Lessons learned

-   How to think in a React project (where should I keep state)
-   Component lifecycle with `useEffect` 
-   Dynamic importing
-   `Element.animate()`
-   More practice with `useContext`

## Asset sources

All image and sound assets are from the video game League of Legends and owned by Riot Games. 

I did not create any of these assets. 
