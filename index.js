const express = require('express')
const z = require('zod')

const app = express()
const port = 5000

const schema = z.string()

app.get('/', (_, res) => {
  const value = schema.parse('Hello World!')
  res.send(value)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})