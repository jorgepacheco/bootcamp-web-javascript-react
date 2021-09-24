
import './App.css';

import Mensaje from './Mensaje.js';

const Descripcion = () =>{
  return (<strong>Esta es la aplicacion de ejemplo</strong>)
}

const App = () => {
  const msg = 'Hola caracola'
  const a = 1
  const b = 3
  return (
    <div className="App">
      <h1>Titulo de la Aplicación</h1>
      <Descripcion/>
      <div>
        <p>El resultado es :</p>
        {a + b}
      </div>
     {msg + ' Evaluar en JSX'}
     <Mensaje message='Hoooooli' color='green'/>
     <Mensaje message='Reacttttt' color='red'/>
    </div>
  );
}

export default App;
