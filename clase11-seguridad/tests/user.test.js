const moongose = require('mongoose')

const { server } = require('../index')
const bcrypt = require('bcrypt')
const User = require('../models/User')
const { api, getUsers } = require('./helpers')

describe('creating a new user', () => {
  beforeEach(async () => {
    await User.deleteMany({})
    const passwordHash = await bcrypt.hash('pswd', 10)
    const user = new User({ username: 'pacheroot', passwordHash })
    await user.save()
  }
  )

  test('work as expected creatring a frehs username', async () => {
    const usersDB = await User.find({})
    const usersAtStart = usersDB.map(user => user.toJSON())
    const newUser = {
      username: 'nuevo',
      name: 'ErMiguel',
      password: 'tw1tch'
    }
    await api.post('/api/users').send(newUser)
      .expect(201).expect('Content-Type', /application\/json/)

    const usersAtEnd = await getUsers()
    console.log(usersAtEnd)
    expect(usersAtEnd).toHaveLength(usersAtStart.length + 1)

    const usernames = usersAtEnd.map(u => u.username)

    expect(usernames).toContain(newUser.username)
  })

  test('creation fails with proper status code and message is already taken', async () => {
    const usersAtStart = await getUsers()
    const newUser = {
      username: 'pacheroot',
      name: 'ErMiguel',
      password: 'tw1tch'
    }

    await api.post('/api/users').send(newUser)
      .expect(400).expect('Content-Type', /application\/json/)

    const usersAtEnd = await getUsers()

    expect(usersAtEnd).toHaveLength(usersAtStart.length)
  })
  afterAll(async () => {
    server.close()
    await moongose.connection.close()
  })
})
