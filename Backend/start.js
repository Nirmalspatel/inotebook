const connectaTomongo = require('./db');
connectaTomongo();
const express = require('express')
var cors = require('cors')
const app = express()
const port = 5000
app.use(cors())
app.use(express.json());    
app.use('/api/auth',require('./routes/auth'));
app.use('/api/note',require('./routes/note'));
app.get('/', (req, res) => {
  res.send('Hello World!')
}
)
app.listen(port, () => {
  console.log(`app listening at http://localhost:${port}`)
})
