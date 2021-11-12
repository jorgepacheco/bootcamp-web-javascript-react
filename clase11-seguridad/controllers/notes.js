const notesRoutes = require('express').Router()

const Note = require('../models/Note')
const User = require('../models/User')

notesRoutes.get('/', async (request, response, next) => {
  const notes = await Note.find({}).populate('user')
  response.status(200).json(notes)
})

notesRoutes.get('/:id', (request, response, next) => {
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

notesRoutes.delete('/:id', async (request, response, next) => {
  const { id } = request.params
  Note.findByIdAndRemove(id).then(result => {
    console.log('Borrado ....')
    response.status(204).end()
  }).catch(err => { next(err) })
})

notesRoutes.put('/:id', (request, response, next) => {
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

notesRoutes.post('/', async (request, response, next) => {
  // const noteRequest = request.body
  const {
    content,
    important = false,
    userId
  } = request.body

  const user = await User.findById(userId)
  if (!content) {
    return response.status(400).json({
      error: 'note.body is missing'
    })
  }
  const newNote = new Note({
    content: content,
    date: new Date(),
    important: important || false,
    user: user._id
  })
  try {
    const savedNote = await newNote.save()
    user.notes = user.notes.concat(savedNote._id)
    user.save()
    response.status(201).json(savedNote).end()
  } catch (error) {
    next(error)
  }
})

module.exports = notesRoutes
