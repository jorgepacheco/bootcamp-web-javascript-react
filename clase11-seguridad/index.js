require('dotenv').config()

require('./mongo.js')
// imports
const express = require('express')
const notFound = require('./middelware/notFound')
const errors = require('./middelware/handleErrors')
const trace = require('./middelware/loggerMiddleware')
const cors = require('cors')

// Importo el schema de Notes
const Note = require('./models/Note')

// Inicializo express
const app = express()

const usersRouter = require('./controllers/users')

// Para usar el modulo de body-parser
// 'Middleware' o interceptor
app.use(express.json())

// middleware CORS
app.use(cors())

// Servir contenido estatico
app.use('/static', express.static('images'))

// middleware de traceo
app.use(trace.logger)

app.get('/', (request, response) => {
  response.send('<h1>Hellllllloooo</h1>')
})

app.get('/api/notes', async (request, response, next) => {
  const notes = await Note.find({})
  response.status(200).json(notes)
})

app.get('/api/notes/:id', (request, response, next) => {
  // Los param son siempre string
  const { id } = request.params
  Note.findById(id).then((note) => {
    if (note) {
      response.status(200).json(note).end()
    } else {
      response.status(404).end()
    }
  }).catch(err => { next(err) })
})

app.delete('/api/notes/:id', async (request, response, next) => {
  const { id } = request.params
  Note.findByIdAndRemove(id).then(result => {
    console.log('Borrado ....')
    response.status(204).end()
  }).catch(err => { next(err) })
})

app.put('/api/notes/:id', (request, response, next) => {
  const { id } = request.params
  const noteRequest = request.body
  const newNoteInfo = {
    content: noteRequest.content,
    important: noteRequest.important
  }
  // Si no anadimos el 3er parametro nos devuelve el resultado del find no la actualizacion
  Note.findByIdAndUpdate(id, newNoteInfo, { new: true }).then(result => {
    console.log('Actualizado ....')
    response.json(result).end()
  }).catch(err => { next(err) })
})

app.post('/api/notes', async (request, response, next) => {
  const noteRequest = request.body
  if (!noteRequest || !noteRequest.content) {
    return response.status(400).json({
      error: 'note.body is missing'
    })
  }
  const newNote = new Note({
    content: noteRequest.content,
    date: new Date(),
    important: noteRequest.important || false
  })
  try {
    const result = await newNote.save()
    response.status(201).json(result).end()
  } catch (error) {
    next(error)
  }
})
console.log('Actualizando ....')

// Controlador de Usuarios
app.use('/api/users', usersRouter)
// Middleware para manejo de errores
app.use(notFound)
app.use(errors.errorManager)
console.log(process.env.PORT)
const PORT = process.env.PORT || 3001
const server = app.listen(PORT, () => {
  console.log(`Server running in port ${PORT}`)
})

module.exports = { app, server }
