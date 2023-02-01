require('dotenv').config()
const express = require('express')
const app = express()
const path = require('path')
const { logger, logEvents } = require('./middleware/logger')
const errorHandler = require('./middleware/errorHandler')
const cors = require('cors')
const corsOptions = require('./config/corsOptions')

const connectDB = require('./config/dbConn')
const mongoose = require('mongoose')

mongoose.set('strictQuery', true) // [MONGOOSE] DeprecationWarning: Mongoose: the `strictQuery` option will be switched back to `false` by default in Mongoose 7. Use `mongoose.set('strictQuery', false);` if you want to prepare for this change. Or use `mongoose.set('strictQuery', true);` to suppress this warning.

const { console } = require('console')

const PORT = process.env.PORT || 3500
console.log(process.env.NODE_ENV)

connectDB()

app.use(logger)

app.use(cors(corsOptions))

app.use(express.json())

app.use('/', express.static(path.join(__dirname, 'public')))

app.use('/', require('./routes/root'))
app.use('/questions', require('./routes/routes'))


//throw
app.all('*', (req, res) => {
    res.status(400)
    if (req.accepts('html')) {
        res.sendFile(path.join(__dirname, 'views', '404.html'))
    } else if (req.accepts('json')) {
        res.json({message: "404 Not Found"})
    } else {
        res.type('txt').send('404 Not Found')
    }
})

app.use(errorHandler)


mongoose.connection.once('open', () => {
    console.log('Connection to MongoDB')
     app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
 })

mongoose.connection.once('error', err => {
    console.log(err)
    logEvents(`
    ${err.no}:
    ${err.code}\t
    ${err.syscall}\t
    ${err.hostname}`, 'mongoErrLog.log')
})

// $ npm run dev