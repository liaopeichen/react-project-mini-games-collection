import guessnumberImg from "./assets/guess-number.png";
import piggameImg from "./assets/pig-game.png";
import tictactoeImg from "./assets/tic-tac-toe.png";
import timerchallengeImg from "./assets/timer-challenge.png";

export const GAME_LIST = [
  {
    image: guessnumberImg,
    title: "Guess Number",
    description:
      "Guess the number between 1 and 20 in 20 attempts or fewer. Aim for a low score to win. Good luck!",
  },
  {
    image: piggameImg,
    title: "Pig Game",
    description:
      "Roll the die to accumulate points, avoiding a roll of 1 to continue your turn. Reach 100 points to win!",
  },
  {
    image: tictactoeImg,
    title: "Tic Tac Toe",
    description:
      "Strive to create a line of three symbols on a 3x3 grid. A timeless game of strategy and anticipation!",
  },
  {
    image: timerchallengeImg,
    title: "Timer Challenge",
    description:
      "Choose from various difficulty levels, beat the clock, and aim for high scores in this thrilling challenge!",
  },
];

export const HOW_TO_PLAY = {
  guessnumber: {
    title: "Guess Number",
    description: `
    <ol>
        <li>Try to guess the hidden number between 1 and 20.</li>
        <li>You have a maximum of 20 attempts.</li>
        <li>The fewer attempts you use, the higher your final score.</li>
        <li>You can always try again for a better score.</li>
        <li>Good luck!</li>
    </ol>
  `,
  },
  piggame: {
    title: "Pig Game",
    description: `
    <ol> 
         <li>Roll the die to accumulate points.</li> 
         <li>Avoid rolling a 1, which ends your turn and forfeits points for that round.</li> 
         <li>Choose to hold to add your round's points to your total score.</li> 
         <li>Reach 100 points first to win the game.</li> 
    </ol>`,
  },
  tictactoe: {
    title: "Tic Tac Toe",
    description: `
    <ol>
        <li>Players take turns placing their symbol on an empty square.</li>
        <li>The first to get three in a row, column, or diagonal wins.</li>
        <li>If the grid is full and no one wins, it's a draw.</li>
    </ol>`,
  },
  timerchallenge: {
    title: "Timer Challenge",
    description: `
    <ol>
        <li>Select a challenge difficulty and start the timer.</li>
        <li>Try to complete the challenge within the specified time limit.</li>
        <li>Stop the timer to see your score when you finish or when time runs out.</li>
        <li>Your score is based on how quickly you complete the challenge.</li>
    </ol>`,
  },
};
