const express = require('express')
const app = express()
 
app.use(express.urlencoded({
    extended: true
}));


app.get('/usuarios', function (req, res) {
  res.json('GET usuarios')
})
app.post('/usuarios', function (req, res) {
    // res.json('POST usuarios')
    let body = req.body;

    res.json({
        body
    })

  })
  app.put('/usuarios/:id', function (req, res) {
    res.json('PUT usuarios')
  })
  app.delete('/usuarios/:id', function (req, res) {
    res.json('DELETE usuarios')
  })
 
app.listen(3004, ()=>{
    console.log('Escuchando en puerto 3004')
})
