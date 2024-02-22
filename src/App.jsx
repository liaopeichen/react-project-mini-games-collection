import "./App.css";
import Header from "./components/Header/Header.jsx";
import GameList from "./components/GameList/GameList.jsx";

function App() {
  return (
    <>
      <Header />
      <main>
        <GameList />
      </main>
    </>
  );
}

export default App;
