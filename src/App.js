import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [number, setNumber] = useState(150);
  const [entrada, setEntrada] = useState(true);
  const [acertou, setAcertou] = useState(false);

  function numberoAleatorioMenor(num) {
    return Math.floor((Math.random() * num) / 2);
  }
  function numberoAleatorioMaior(num) {
    return Math.floor(Math.random() * num);
  }
  function iniGame() {
    setEntrada(false);
  }
  if (entrada) {
    return <button onClick={iniGame}>Comecar o Jogo</button>;
  }

  if (acertou) {
    return <h1>A máquina acertou</h1>;
  }

  return (
    <div className="App">
      <div>O seu número é {number}</div>

      <button onClick={() => setNumber(numberoAleatorioMenor(150))}>
        Menor
      </button>
      <button onClick={() => setAcertou(true)}>Acertou</button>
      <button onClick={() => setNumber(numberoAleatorioMaior(300))}>
        Maior
      </button>
    </div>
  );
}
