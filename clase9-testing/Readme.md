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

