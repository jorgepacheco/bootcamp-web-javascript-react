require('dotenv').config()
// Con esto ejecuto la conexxion a Mongo
require('./mongo.js')
// sistema de modulos de commons.js
// Importo la dependencia
const express = require('express')
const trace = require('./loggerMiddleware')
const errors = require('./handleErrors')
const notFound = require('./notFound')
const cors = require('cors')

// Importo el schema de Notes
const Note = require('./models/Note')

// Inicializo express
const app = express()

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

app.get('/api/notes', (request, response, next) => {
  Note.find({}).then((result) => {
    console.log(result)
    response.status(200).json(result)
  }).catch(err => next(err))
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

app.delete('/api/notes/:id', (request, response, next) => {
  // Los param son siempre string, si oq ue buscamos es otro tipo ncesitamos trasaformarlo
  // const id = Number(request.params.id)
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

app.post('/api/notes', (request, response) => {
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
  newNote.save()
    .then((result) => {
      return response.status(201).json(result).end()
    })
    .catch(() => {
      return response.status(400).json({ error: 'bad request' }).end()
    })
})

// Middleware para manejo de errores
app.use(notFound)
app.use(errors.errorManager)

// Para Heroku
console.log(process.env.PORT)
const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`Server running in port ${PORT}`)
})
