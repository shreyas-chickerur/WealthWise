require('dotenv').config()

const express = require("express")
const mongoose = require("mongoose")
const companiesRoutes = require('./routes/companies')

// create the react app
const app = express()

// middleware
app.use(express.json())

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

// set up route handling
app.use('/api/companies', companiesRoutes)

// connect to db
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        // listen for requests
        app.listen(process.env.PORT, () => {
            console.log("Listening on port ", process.env.PORT)
        })
    })
    .catch((error) => {console.log(error)
    })


