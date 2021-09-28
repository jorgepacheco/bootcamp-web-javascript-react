import React from "react";
import ReactDOM from "react-dom";

import { useState } from "react";

const rootElement = document.getElementById("root");

// En vez de props 'desectructuramos'
const Counter = ({ number }) => {
  console.log("Counter Render...");
  return <h1>{number}</h1>;
};

const App = (props) => {
  const [contador, setContador] = useState(0);
  //const contador = useState(0)
  // Valor
  //const contadorValue = contador[0]
  // Funcion de Actualizacion
  //const updateContador = contador[1]

  //
  //setInterval(() => {
  // updateContador(contadorValue + 1)
  // }, 2000)

  // Funciones 'Helper'
  const handleClick = () => {
    //setContador(contador + 1)
    // Accediewndo al valor anterior del estado
    setContador((prevContador) => {
      return prevContador + 1;
    });
    // Inline se quitan los parentesis y el return
    // setContador(prevContador => prevContador + 1)
  };

  const handleClickReset = () => {
    setContador(0);
  };

  const isEven = contador % 2 === 0;

  console.log("render ...");

  return (
    <div>
      <h1> Componente con estado</h1>
      <Counter number={contador} />
      <h2>Magias de React</h2>
      <p>{isEven ? "Es Par" : "Es Impar"}</p>
      <button onClick={handleClick}>Incrementar</button>
      <button onClick={handleClickReset}>Reset</button>
    </div>
  );
};

ReactDOM.render(<App />, rootElement);
