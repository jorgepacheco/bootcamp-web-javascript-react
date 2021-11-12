require('dotenv').config()

require('./mongo.js')
// imports
const express = require('express')
const notFound = require('./middelware/notFound')
const errors = require('./middelware/handleErrors')
const trace = require('./middelware/loggerMiddleware')
const cors = require('cors')

// Importo el schema de Notes

// Inicializo express
const app = express()

// Controladores
const usersRouter = require('./controllers/users')
const notesRoutes = require('./controllers/notes')
const loginRouter = require('./controllers/login')

// Para usar el modulo de body-parser
// 'Middleware' o interceptor
app.use(express.json())

// middleware CORS
app.use(cors())

// Servir contenido estatico
app.use('/static', express.static('images'))

// middleware de traceo
app.use(trace.logger)

console.log('Actualizando ....')
app.get('/', (request, response) => {
  response.send('<h1>Inicio</h1>')
})

// Controlador de Usuarios
app.use('/api/users', usersRouter)
app.use('/api/login', loginRouter)
app.use('/api/notes', notesRoutes)

// Middleware para manejo de errores
app.use(notFound)
app.use(errors.errorManager)

console.log(process.env.PORT)

// Arrabncar servicio
const PORT = process.env.PORT || 3001
const server = app.listen(PORT, () => {
  console.log(`Server running in port ${PORT}`)
})

module.exports = { app, server }
