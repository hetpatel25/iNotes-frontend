const connectToMongo = require('./db');
const express = require('express')
var cors = require('cors')

connectToMongo();
const app = express()
const port = 5000
  
app.use(cors())

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
  console.log(`iNotebook backend listening on port ${port}`)
})
