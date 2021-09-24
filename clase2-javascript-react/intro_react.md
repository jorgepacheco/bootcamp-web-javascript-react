
## Instalar nodejs
node -v v16.5.0


## gestor paquetes de node
nvm


## npm

npx create-next-app part1 -- ejecuta el packete

npm start --

## Estructura de paquetes

- public - contenido estatico img, favico, robot.txt....
- src - fuentes

    - App.css
    - App.js
    - App-test.js - lo borramos de momento
    - index.js = Punto de entrada de la aplicacion

## Componentes

- funciones en mayusculas - devolvemos una especie de html

```javascript
function App() {
  return (
    <div className="App">
     Hola mundo
    </div>
  );
}
```
- esa especie de html (jsx) Babel lo traspila a JS

```javascript
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
```

- ReactDOM componente que se encarga de renderizar

- Renderizaz el componente App en el elemento de html con el id root

```javascript
const App = () => {
  const msg = 'Hola caracola'
  return (
    <div className="App">
     {msg}
    </div>
  );
}
```

- Para usar variables dentro del codigo jsx se usa {}

- EXTENSIONES: ESLINT, ERROR LENS