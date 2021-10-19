const password = require('./password.js')
const mongoose = require('mongoose')
const connectionString = `mongodb+srv://tanoka:${password}@cluster0.8mgiz.mongodb.net/app-notes-db?retryWrites=true&w=majority`

// Conexion a Mongodb
mongoose
  .connect(connectionString)
  .then(() => {
    console.log('Database connected')
  })
  .catch((err) => {
    console.error(err)
  })

process.on('uncaughtException', () => {
  mongoose.connection.close()
})
