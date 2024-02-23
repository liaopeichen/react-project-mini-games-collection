import { useState } from "react";

import TabButton from "./TabButton";
import Section from "./Section";
import Tabs from "./Tabs";
import { HOW_TO_PLAY } from "../../data";

export default function HowToPlay() {
  const [selectedGame, setSelectedGame] = useState("");
  function handleSelect(selectedButton) {
    setSelectedGame(selectedButton);
  }

  let tabContent = <p>Please select a game title.</p>;
  if (selectedGame) {
    tabContent = (
      <div id="tab-content">
        <h3>{HOW_TO_PLAY[selectedGame].title}</h3>
        <img src={HOW_TO_PLAY[selectedGame].screenshot} alt={selectedGame} />
        <ol>
          {HOW_TO_PLAY[selectedGame].gamerule.map((rule, index) => (
            <li key={index}>{rule}</li>
          ))}
        </ol>
      </div>
    );
  }

  return (
    <Section title="How To Play" id="how-to-play">
      <Tabs
        buttons={
          <>
            <TabButton
              isSelected={selectedGame === "guessnumber"}
              onClick={() => handleSelect("guessnumber")}
            >
              Guess Number
            </TabButton>
            <TabButton
              isSelected={selectedGame === "piggame"}
              onClick={() => handleSelect("piggame")}
            >
              Pig Game
            </TabButton>
            <TabButton
              isSelected={selectedGame === "tictactoe"}
              onClick={() => handleSelect("tictactoe")}
            >
              Tic Tac Toe
            </TabButton>
            <TabButton
              isSelected={selectedGame === "timerchallenge"}
              onClick={() => handleSelect("timerchallenge")}
            >
              Timer Challenge
            </TabButton>
          </>
        }
      >
        {tabContent}
      </Tabs>
    </Section>
  );
}
