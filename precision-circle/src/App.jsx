import { useState, useEffect } from "react";
function App() {
  const [isPlayTheGame, setPlay] = useState(false);

  return (
    <main className="introduction-game">
      <div className="titles-cont">
        <h1 className="title-game">
          {isPlayTheGame ? "Elije tu" : "Un juego de precisión"}
        </h1>
        <span
          className={`txtGlitch ${
            isPlayTheGame ? `isTextDificultad` : `isTextSimple`
          }`}
          dataglitch={isPlayTheGame ? "DIFICULTAD" : "SIMPLE"}
        >
          {isPlayTheGame ? "DIFICULTAD" : "SIMPLE"}
        </span>
      </div>

      <button
        className={`play-game-button ${isPlayTheGame ? `desactive` : ``}`}
        onClick={() => {
          setPlay(!isPlayTheGame);
        }}
      >
        PLAY
      </button>
      {isPlayTheGame ? <SelectDifficult /> : ""}
    </main>
  );
}

export function SelectDifficult() {
  return (
    <div className="difficultCont">
      <button className="difficultFacilButton buttonDificult">FACIL</button>
      <button className="difficultNormalButton buttonDificult">NORMAL</button>
      <button className="difficultDificilButton buttonDificult">DIFICIL</button>
    </div>
  );
}

export function CircleGame({ difficult }) {
  const [position, setPosition] = useState({ y: -50, x: -50 });
  const [size, setSize] = useState(200);
  let maxY = window.innerHeight - size;
  let maxX = window.innerWidth - size;

  function getRandomPos() {
    const YRandom = Math.floor(Math.random() * maxY - 10);
    const XRandom = Math.floor(Math.random() * maxX - 10);
    setPosition({ y: YRandom, x: XRandom });
    if (size >= 50) {
      setSize(size - 10);
    } else if (size > 10 && size < 50) {
      setSize(size - 2);
    } else if (size === 10) {
      setSize(size);
    }
  }

  useEffect(() => {
    maxX = window.innerHeight - size;
    maxY = window.innerWidth - size;
  }, [window.innerHeight, window.innerWidth]);

  return (
    <div
      className="circle"
      style={{
        height: `${size}px`,
        width: `${size}px`,
        display: "inline-block",
        backgroundColor: "white",
        borderRadius: "50%",
        transform: `translate(
        ${position.x}px, 
        ${position.y}px)`,
      }}
      onMouseEnter={getRandomPos}
      onClick={getRandomPos}
    ></div>
  );
}
export default App;
