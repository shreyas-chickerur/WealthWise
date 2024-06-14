require('dotenv').config()

const express = require("express")
const mongoose = require("mongoose")
const usersRoutes = require('./routes/users')
const financialAccountsRoutes = require('./routes/financialAccounts')
const goalRoutes = require('./routes/goals')
const transactionRoutes = require('./routes/transactions')
const recommendationRoutes = require('./routes/recommendations')



// create the react app
const app = express()

// middleware
app.use(express.json())

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

// set up route handling
app.use('/api/financialAccounts', financialAccountsRoutes)
app.use('/api/users', usersRoutes)
app.use('/api/goals', goalRoutes)
app.use('/api/transactions', transactionRoutes)
app.use('/api/recommendations', recommendationRoutes)


// connect to db
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        // listen for requests
        app.listen(process.env.PORT, () => {
            console.log("Listening on port ", process.env.PORT)
        })
    })
    .catch((error) => {console.log(error)
    }
)

    


