const express = require('express')
const app = express()
const router = require('./router/router')
const port = 3000

app.set('view engine', 'ejs')
app.use(router)

app.listen(port, () => {
  console.log(`Servidor ejecutandose http://localhost:${port}`)
  console.log('Sevidor corriendo en http://localhost:',port)
})