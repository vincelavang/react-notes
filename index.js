const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const jsonParser = bodyParser.json()

const knex = require('knex')({
    dialect: 'pg',
    connection: 'postgres://localhost:5432/react-notes'
  })

app.use(jsonParser)

app.get('/notes', function (req, res) {
  const query = knex
    .select()
    .from('notes')
  console.log(query.toString())
  query
    .then((notes) => {
      console.log(notes)
      res.json(notes)
    })
})

app.listen(3000, () => {
  console.log('Listening on port 3000!')
})
