const mongoose = require('mongoose')
const { model, Schema } = mongoose
// Create schema
const userSchema = new Schema({
  username: String,
  name: String,
  passwordHash: String,
  notes: [{
    type: Schema.Types.ObjectId,
    ref: 'Note'
  }]
})

// ref: Note hace referencia al nombre que le he dado a la Collections de Notes en su definicion de schema

userSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id
    delete returnedObject._id
    delete returnedObject.__v

    delete returnedObject.passwordHash
  }
})

const User = model('User', userSchema)
module.exports = User
