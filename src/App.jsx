import "./App.css";
import Header from "./components/Header/Header.jsx";
import GameList from "./components/GameList/GameList.jsx";
import HowToPlay from "./components/HowToPlay/HowToPlay.jsx";

function App() {
  return (
    <>
      <Header />
      <main>
        <GameList />
        <HowToPlay />
      </main>
    </>
  );
}

export default App;
