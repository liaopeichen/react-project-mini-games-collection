export const GAME_LIST = [
  {
    image: "assets/guess-number-icon.png",
    url: "https://liaopeichen.github.io/javascript-game-guess-number/",
    title: "Guess Number",
    description:
      "Guess the number between 1 and 20 in 20 attempts or fewer. Aim for a low score to win. Good luck!",
  },
  {
    image: "assets/pig-game-icon.png",
    url: "https://liaopeichen.github.io/javascript-pig-game/",
    title: "Pig Game",
    description:
      "Roll the die to accumulate points, avoiding a roll of 1 to continue your turn. Reach 100 points to win!",
  },
  {
    image: "assets/tic-tac-toe-icon.png",
    url: "https://react-tic-tac-toe-jvtd.onrender.com/",
    title: "Tic Tac Toe",
    description:
      "Strive to create a line of three symbols on a 3x3 grid. A timeless game of strategy and anticipation!",
  },
  {
    image: "assets/timer-challenge-icon.png",
    url: "https://react-timer-challenges.onrender.com/",
    title: "Timer Challenge",
    description:
      "Choose from various difficulty levels, beat the clock, and aim for high scores in this thrilling challenge!",
  },
];

export const HOW_TO_PLAY = {
  guessnumber: {
    title: "Guess Number",
    gamerule: [
      "Try to guess the hidden number between 1 and 20.",
      "You have a maximum of 20 attempts.",
      "The fewer attempts you use, the higher your final score.",
      "You can always try again for a better score.",
    ],
    screenshot: "assets/guess-number-screenshot.png",
  },
  piggame: {
    title: "Pig Game",
    gamerule: [
      "Roll the die to accumulate points.",
      "Avoid rolling a 1, which ends your turn and forfeits points for that round.",
      "Choose to hold to add your round's points to your total score.",
      "Reach 100 points first to win the game.",
    ],
    screenshot: "assets/pig-game-screenshot.png",
  },
  tictactoe: {
    title: "Tic Tac Toe",
    gamerule: [
      "Players take turns placing their symbol on an empty square.",
      "The first to get three in a row, column, or diagonal wins.",
      "If the grid is full and no one wins, it's a draw.",
    ],
    screenshot: "assets/tic-tac-toe-screenshot.png",
  },
  timerchallenge: {
    title: "Timer Challenge",
    gamerule: [
      "Select a challenge difficulty and start the timer.",
      "Try to complete the challenge within the specified time limit.",
      "Stop the timer to see your score when you finish or when time runs out.",
      "Your score is based on how quickly you complete the challenge.",
    ],
    screenshot: "assets/timer-challenge-screenshot.png",
  },
};
