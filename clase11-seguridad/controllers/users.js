const bcrypt = require('bcrypt')
const usersRouter = require('express').Router()

const User = require('../models/User')

usersRouter.get('/', async (request, response) => {
  console.log('En tra en el cpomntroladotr')
  const users = await User.find({}).populate('notes')
  response.json(users)
})

// Relativo a cuendo definimos la ruta en el index.js
usersRouter.post('/', async (request, response) => {
  const { body } = request
  const { username, name, password } = body

  const saltRounds = 10

  const passwordHash = await bcrypt.hash(password, saltRounds)

  try {
    const user = new User({
      username,
      name,
      passwordHash
    })
    const savedUser = await user.save()
    await user.save()
    response.status(201).json(savedUser)
  } catch (error) {
    response.status(400).json({ error })
  }
})

module.exports = usersRouter
