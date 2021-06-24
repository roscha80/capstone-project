const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()
const { REACT_APP_DB_URL } = process.env

mongoose
  .connect(REACT_APP_DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => console.log('Connected to MongoDB (Skills)'))
  .catch(console.error)

const app = express()

app.use('/', express.json())
app.use('/api/users', require('./routes/users'))

app.use((req, res) => res.sendStatus(404))

app.use(require('./routes/error'))

app.listen(4000, () => {
  console.log('Server started at http://localhost:4000')
})
