const moongose = require('mongoose')

const { server } = require('../index')

const {
  api, initialNotes, getAllContentFromNotes
} = require('./helpers')

const Note = require('../models/Note')

// Preparamos el escenario de test
beforeEach(async () => {
  await Note.deleteMany({})
  // Parallel: no garantiza el orden de insercion por ello lo hacemos sequencial
  // Con forEach no funciona porq no se ejecuta con el await
  // const notesObjects = initialNotes.map(note => new Note(note))
  // const promises = notesObjects.map(note => note.save())
  // await Promise.all(promises)

  // sequential
  for (const note of initialNotes) {
    const noteObject = new Note(note)
    await noteObject.save()
  }
})

describe('GET all notes', () => {
  test('notes are returned as json', async () => {
    await api
      .get('/api/notes')
      .expect(200)
      .expect('Content-Type', /application\/json/)
  })

  test('the are three notes', async () => {
    const response = await api.get('/api/notes')
    expect(response.body).toHaveLength(initialNotes.length)
  })

  test('the first note is about midudev', async () => {
    const response = await api.get('/api/notes')
    const contents = response.body.map(note => note.content)
    expect(contents).toContain('Aprendiendo FullStack JS con midudev')
  })
  test('note without content is not added', async () => {
    const note = {
      important: true
    }
    await api.post('/api/notes')
      .send(note)
      .expect(400)

    const { response } = await getAllContentFromNotes()

    expect(response.body).toHaveLength(initialNotes.length)
  })

  test('a valid notee can be added', async () => {
    const note = {
      content: 'proximamente async/await',
      important: true
    }
    await api.post('/api/notes')
      .send(note)
      .expect(201)
      .expect('Content-Type', /application\/json/)

    const { contents, response } = await getAllContentFromNotes()

    expect(response.body).toHaveLength(initialNotes.length + 1)
    expect(contents).toContain(note.content)
  })

  test('a note can be deleted', async () => {
    const { response } = await getAllContentFromNotes()
    const { body: notes } = response
    const noteToDelete = notes[0]
    await api.delete(`/api/notes/${noteToDelete.id}`).expect(204)
    const { contents, response: response2 } = await getAllContentFromNotes()
    expect(response2.body).toHaveLength(initialNotes.length - 1)
    expect(contents).not.toContain(noteToDelete.content)
  })

  test('a note that not exist can not be deleted', async () => {
    await api.delete('/api/notes/123').expect(400)
    const { response: response2 } = await getAllContentFromNotes()
    expect(response2.body).toHaveLength(initialNotes.length)
  })
})

afterAll(async () => {
  server.close()
  await moongose.connection.close()
})
