import Game from "./Game.jsx";
import { GAME_LIST } from "../../data.js";
import "./GameList.css";

export default function GameList() {
  return (
    <section id="game-list">
      <h2>Game List</h2>
      <ul>
        {GAME_LIST.map((game) => (
          <Game key={game.title} {...game} />
        ))}
      </ul>
    </section>
  );
}
