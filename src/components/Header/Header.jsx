import headerIcon from "../../assets/stylized-atom.png";
import "./Header.css";

const games = ["Guess Number", "Pick Game", "Tic Tac Toe", "Timer Challenge"];

function getRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

export default function Header() {
  const gameTitle = games[getRandomInt(3)];

  return (
    <header>
      <img src={headerIcon} alt="Stylized atom" />
      <h1>React Mini Games Collection</h1>
      <p>
        Ready to put your skills to the test? How about diving into the{" "}
        <b>{gameTitle}</b> game to get started?
      </p>
    </header>
  );
}
