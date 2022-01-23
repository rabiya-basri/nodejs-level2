const express = require('express')
const app = express()
const port = 3055
const configureDb = require('./config/database')
const router = require('./config/routes')
//setup db
configureDb()
app.use(express.json())
app.use(router)
app.listen(port, () => {
    console.log('server is running on port', port)
})