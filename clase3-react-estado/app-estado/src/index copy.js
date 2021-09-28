import React from 'react';
import ReactDOM from 'react-dom';

const rootElement = document.getElementById('root');

const App = (props) => {
  return <h1>{props.contadorInicial}</h1>
}

let contador = 0

// Funcion propia de javascript
setInterval(() => {
  contador++
  refresh()
},1000)

const refresh = () => {
  ReactDOM.render(
    <App contadorInicial={contador}/>,
    rootElement
  );
}



