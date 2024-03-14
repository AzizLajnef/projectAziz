const mongoose = require('mongoose')
const mongoUri = 'mongodb://127.0.0.1/recipe-sharing-platform'

mongoose
  .connect(mongoUri, { useUnifiedTopology: true, useNewUrlParser: true })
  .then(() => {
    console.log('MongoDB connected')
  })
  .catch((err) => console.log(err))

const db = mongoose.connection



module.exports =db