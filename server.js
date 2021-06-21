const express = require('express')
const mongoose = require('mongoose')

mongoose
  .connect(
    'mongodb+srv://dbUser:dbPassword040@skills040.iv3rg.mongodb.net/skills040?retryWrites=true&w=majority',
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    }
  )
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
