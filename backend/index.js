const connectToMongo = require('./db');
const express = require('express')

connectToMongo();
const app = express()
const port = 5000

//If we want to use req.body then....
app.use(express.json());

//available routers
app.use('/api/auth', require('./routes/auth'));
app.use('/api/notes', require('./routes/notes'));
app.get('/', (req, res) => {
  res.send('Hello World!')
})


app.get('/login', (req, res) => {
    res.send('Hello login!')
  })
  
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
