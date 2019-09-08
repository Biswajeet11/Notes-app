const express = require('express')
const app = express()
const mongoose = require('./config/database')
const PORT = 3015
const router = require('./config/routes')

app.use(express.json())

app.use('/', router)

app.get('/', (req, res) => {
    res.json({ notice: 'welcome to the notes app' })
})

app.listen(PORT, () => { console.log('listening to port', PORT) })

// mongod server 27017
// front end http server
// mongoose is an ODM (object document mapper) /java (hibernate)
// 1.Odm maps a model to a collection
// 2.Maps an Object to a document
// 3.Maps Objects property to a document field

// Schema defines the shape of the document