const supertest = require('supertest')
const { app, server } = require('../index')
const moongose = require('mongoose')

const api = supertest(app)

test('notes are returned as json', async () => {
  await api.get('/api/notes')
    .expect(200)
    .expect('Content-Type', /application\/json/)
})
afterAll(done => {
  console.log('En AFTER ALL')
  // Closing the DB connection allows Jest to exit successfully:
  moongose.disconnect()
  server.close()
  done()
})
