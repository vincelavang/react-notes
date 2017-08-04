const express = require('express')
const app = express()
const path = require('path')
const bodyParser = require('body-parser')
const jsonParser = bodyParser.json()
const publicPath = path.join(__dirname, 'public')
const staticMiddleware = express.static(publicPath)
const dotenv = require('dotenv').config()

const knex = require('knex')({
    dialect: 'pg',
    connection: process.env.DATABASE_URL
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

app.post('/notes', function (req, res) {
  const note = {
    note_text: req.body.note_text
  }
  const query = knex
    .insert(note)
    .into('notes')
    .returning('*')
  query
    .then((note) => {
      res.json(note[0])
      console.log('done!')
    })
})

app.delete('/notes/:id', function (req, res) {
  const query = knex
    .where('id', req.params.id)
    .from('notes')
    .delete()

    console.log(query.toString())
  query
    .then((response) => {
      res.sendStatus(200)
    })
  })

app.use(staticMiddleware)

app.listen(process.env.PORT, () => {
  console.log(process.env.PORT)
})
