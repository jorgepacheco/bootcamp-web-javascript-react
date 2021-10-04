### NODE JS + Express

- Instalar node js

- Entorno de ejecucion de javascript basado en v8 de chrome - a partir de la v14
- nvm herramienta

- node - abre la consola

- npm - gestor de packetes

- npm init - inicia un proyecto en node

npm init -y

- package.json (como el pom.xml)

- Ejecutar: node index.js

- La idea es ejecutar 'scripts'que definimos en la parte del package.json

- npm run - Lista los scripts

## Definir un API en node

## Recarga el proyecto en caliente con 'nodemon'
npm install nodemon -D   le indicamos que es una dependencia de desarrollo

- Ejecutar nodemon:  ./node_modules/.bin/nodemon index.js

- Añadirlo a scripts del package.json

```json
  "scripts": {
    "dev": "nodemon index.js",
    "start": "node index.js",
    "test": "echo \"Error: no test specified\" && exit 1"
  }
```

- Lanzarlo con: npm run dev

## Primer servidor a pelo

```javascript
const http = require("http");
// EMAC script modules
//import http from 'http'

let notes = [
  {
    userId: 1,
    id: 1,
    title:
      "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
  },
  {
    userId: 1,
    id: 2,
    title: "qui est esse",
    body: "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla",
  },
  {
    userId: 1,
    id: 3,
    title: "ea molestias quasi exercitationem repellat qui ipsa sit aut",
    body: "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut",
  },
];

// Callback - cada vez que le llegue una peticion se ejecuta la funcion de callback
const app = http.createServer((request, response) => {
  response.writeHead(200, { "Content-Type": "application/json" });
  response.end(JSON.stringify(notes));
});

const PORT = 3001;
app.listen(PORT);
console.log(`Server running in port ${PORT}`);
console.log(PORT);

```

## Express
npm install express -E  --> Pone la version exacta en ve de abri
## Extension VSCode para controlar las versioens
Version Lens

## POST

Express te da un modulo 'body-parser'

app.use(express.json())

## LINTER

npm install eslint -D

## Iniciar

./node_modules/.bin/eslint --init

genera el fichero .eslinttrc.js con las configuraciones seleccionadas.
Las extensiones de ESLInt mira las convenckiones definidas y ES LENS te lo muestra en la misma linea.

- si queremos usar un conjunto de reglaS PREDEFINIDAS podemos usar las 'standar'

npm install standard -D

- quitar el fichero .eslintrc.js y del package.json eliminar la dependencia de eslint

## Middleware

- Creamos un modulo loggerMiddleware e implementamos una la funcion

```javascript
const logger = (request, response, next) => {
  console.log(request.body)
  console.log(request.path)
  console.log(request.path)
  console.log('----***-----')
  next()
}
module.exports = logger
```

- Importamos el modulo y lo 'usamos'

const logger = require('./loggerMiddleware')
app.use(logger)


## CORS

- api 3001

- web 3000

- Recursos compartidos en diferentes dominios

-En backend decir qu eorigenes acceden a nuestro recursos

- npm install cors -E --> dependencia de producción

```javascript
const cors = require('cors')

app.use(cors())
```
