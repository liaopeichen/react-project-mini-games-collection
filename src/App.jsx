import "./App.css";
import Header from "./components/Header/Header.jsx";
import GameList from "./components/GameList/GameList.jsx";
import HowToPlay from "./components/HowToPlay/HowToPlay.jsx";
import Footer from "./components/Footer/Footer.jsx";

function App() {
  return (
    <div className="container">
      <Header />
      <main>
        <GameList />
        <HowToPlay />
      </main>
      <Footer />
    </div>
  );
}

export default App;
