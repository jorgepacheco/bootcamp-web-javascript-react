# Testing in Backend



# Crea proyecto
npm init -y

# Frameworks, test runner
- mocha
- ava
- jest

# JEST
npm install jest --save-dev
npm install jest -D

# CONFIG
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

- Ejecutar los test, modificamos la parte de los scripts de package.json

```json
  "scripts": {
    "dev": "NODE_ENV=development nodemon index.js",
    "lint": "eslint .",
    "start": "NODE_ENV=production node index.js",
    "test": "NODE_ENV=test jest --verbose"
  }
```

## TEST DE INTEGRACION
- instalamos supertest
npm install supertest -D

- Ejemplo
```javascript
test('notes are returned as json', async () => {
  await api.get('/api/notes')
    .expect(400)
    .expect('Content-Type', /application\/json/)
})
```
- Se pone async - await para que el test espere a que arranque la api.

- Modificamos opciones de jest para que no salgan mensajes de log

- Sale el error A worker process has failed to exit gracefully and has been force exited. This is likely caused by tests leaking due to improper teardown. Try running with --detectOpenHandles to find leaks.
- Pq no se ha cerrado el servidor antes de q acabe el test.

- Añadimos otro script para que al cambiar una clase se ejecute automaticamente

- Ejecucion individual de un test
npm run test -- -t "the first note is about midudev"


- async / await

```javascript
app.get('/api/notes',  (request, response, next) => {
Note.find({}).then((result) => {
    console.log(result)
    response.status(200).json(result)
  }).catch(err => next(err))
}
```

- pasa a:
```javascript
app.get('/api/notes', async (request, response, next) => {
  const notes = await Note.find({})
  response.status(200).json(notes)
}
```
