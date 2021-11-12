## Pasos para un proyecto node

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

