
## DOCS
https://es.javascript.info/

## HTML
https://developer.mozilla.org/es/docs/Learn/Getting_started_with_the_web/HTML_basics

### CSS
https://developer.mozilla.org/es/docs/Learn/Getting_started_with_the_web/CSS_basics

## Formularios
https://developer.mozilla.org/es/docs/Learn/Forms/Your_first_form

## Diagramas

https://www.websequencediagrams.com/

## Pasos para un proyecto node

## Instalar nodejs
node -v v16.5.0


## gestor paquetes de node
nvm

1. Iniciar el proyecto

npm init -y

2. Verificar los scripts -
npm run

3. Recarga en caliente

npm install nodemon -D   le indicamos que es una dependencia de desarrollo

```json
  "scripts": {
    "dev": "nodemon index.js",
    "start": "node index.js",
    "test": "echo \"Error: no test specified\" && exit 1"
  }
```

4. Lanzar el proyecto

npm run dev

5. Express
npm install express -E  --> Pone la version exacta en ve de abri

6. LINTER
npm install eslint -D
npm install standard -D -> Reglas standar prdefinidas

- quitar el fichero .eslintrc.js y del package.json eliminar la dependencia de eslint

7. CORS
npm install cors -E --> dependencia de producción

8. Libreria para las variables de entorno

npm install dotenv

9. TEST con JEST
npm install jest -D

- En el package.json añadimos

```json
"jest": {
    "testEnvironment" : "node"
}
```

- Busca todos los ficheros que tengan nombre.test.js

- Anadimos en el eslintCongig del pacjkage.json

```json
  "eslintConfig": {
    "extends": "./node_modules/standard/eslintrc.json",
    "env": {
      "jest": true
    }
```

```json
  "scripts": {
    "dev": "NODE_ENV=development nodemon index.js",
    "lint": "eslint .",
    "start": "NODE_ENV=production node index.js",
    "test": "NODE_ENV=test jest --verbose"
  }
```

10. Test de Integración

npm install supertest -D

- Ejecucion individual de un test
npm run test -- -t "the first note is about midudev"

11. Encriptadores

npm install bcrypt


12. JWT
npm install jsonwebtoken

13. Mongose
npm install mongoose


# PASOS PARA UN PROYECTO DE REACT

## npm

npx create-next-app part1 -- Crea el proyecto

npm start --



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

## Servicio de Mocks

- json-server

- https://jsonplaceholder.typicode.com/


## Promesa

- En el futuro devolvera algo : resspuesta / error

- fetch('url') devuelve una promesa

## useEffect

- Es otro hook que nos dice cuando se renderiza el componente

```javascript
  fetch("https://jsonplaceholder.typicode.com/posts") // Devuelve una promesa
    .then((response) => response.json()) // response,json devuelve otra promesa (las encadenamos)
    .then((json) => {
      console.log(json); // Cuando se ha resaueltop la segunda promesa la sacamos por la consola.
      // si ponemos aqui el setNotes(json) esto actualizaria el componente, volveria a ejecutar el fecht que volveria a setNotes ...loop infinito
    });
```

## npm install axios -> mejora de fetch