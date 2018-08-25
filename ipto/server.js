const express = require('express')
const bodyParser = require('body-parser')
const controller = require('./server/controller')
const massive = require('massive');
const helmet = require('helmet')
const cors = require('cors');
const session = require('express-session')
require('dotenv').config();

const app = express()

app.use(helmet())
app.use(session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: true
  }))
app.use(bodyParser.json())
app.use(cors())
massive(process.env.DB_CONNECT)
.then(db=>{
    app.set("db", db)
    console.log("db Connected")
})
.catch(err => console.log(err))

app.post('/api/user', controller.create)
app.post('/api/login', controller.loginUser)
// app.post('/api/createreview', controller.createReview)
// app.post('/api/createlocation', controller.createLocation)
// app.patch('/api/editreview', controller.editReview)
// app.delete('/api/deletereview', controller.deleteReview)
// app.get('/api/getlocation/:id', controller.getLocation)

const port = 3005

app.listen(port, () => {
    console.log(`Server listening at localhost:${port}`);
});