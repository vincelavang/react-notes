const express = require('express')

const knex = require('knex')({
    dialect: 'pg',
    connection: 'postgres://localhost:5432/react-notes'
  })

const query = knex
  .insert({ note_text: 'this is a test, notes inserting into db.' })
  .into('notes')

console.log(query.toString())

query
  .then(() => {
  console.log('done!')
  })
