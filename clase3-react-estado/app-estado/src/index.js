import React from "react";
import ReactDOM from "react-dom";
import "./index.css"
import { useState } from "react";


const WarningNotUsed = () => {
  return (<h2>No se ha usado el contador</h2>)
}

const ListOfClicks = ({clicks}) => {
  return (<p>{clicks.join(', ')}</p>)
}

const App = (props) => {
  //const [left, setLeft] = useState(0);
  //const [right, setRight] = useState(0);
// Agrupar estados
  const [counters, setCounters] = useState({
    left: 0,
    right: 0,
    mensaje: 'Mensaje en el estado'
  })

  const [clicks, setClicks] = useState([])
  // El estado debe ser Inmutables
  // Spread operator ..counters recupera el antiguo valor y solo necesitamos sobreescribir los atributos q cambien
  const handleClickLeft = (event) => {
    console.log(event)
    setCounters({
      ...counters,
      left: counters.left + 1
    })
    setClicks(prevClicks => {
      // Manera analoga a return prevClicks.concat('L')
      return [...prevClicks, 'L']
    })
  }

  const handleClickRight = () => {
    setCounters({
      ...counters,
      left: counters.left,
      right: counters.right + 1
    })
    setClicks(prevClicks => {
      // Manera analoga a return prevClicks.concat('R')
      return [...prevClicks, 'R']
    })
  }

  return (
    <div>
      {counters.left}
      <button onClick={handleClickLeft}>Left</button>
      <button onClick={handleClickRight}>Right</button>
      {counters.right}
      <p>Clicks Totales: {clicks.length}</p>
      <p>Mens: {counters.mensaje}</p>

      {clicks.length === 0 ? (
        <WarningNotUsed/>
        ) :
        (
          <ListOfClicks clicks={clicks}/>
        )
      }
    </div>
  );
};


const rootElement = document.getElementById("root");

ReactDOM.render(<App />, rootElement);
