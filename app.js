const express = require('express')
const axios = require('axios')
const cors = require('cors')
const yaml = require('js-yaml')
const fs = require('fs')
const app = express()
const apiConfig = yaml.load(fs.readFileSync('./config/api.yml'))

app.use(cors())

app.get('/api/v1/locations/:searchValue/:count?', (req, res) => {
  console.log(`GET ${req.originalUrl}`)
  const count = req.query.count
  const searchValue = req.params.searchValue
  axios
    .get(`${apiConfig.baseURL}?solrIndex=fts_en&solrRows=${count}&solrTerm=${searchValue}`, {
      headers: {
        'User-Agent': apiConfig.userAgent
      }
    })
    .then(result => {
      res.send(result.data.results.docs)
    })
    .catch(err => {
      res.send(`Error: ${err}`)
    })
})

module.exports = app
