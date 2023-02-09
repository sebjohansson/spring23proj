require('dotenv').config();

const cors = require('cors');
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3500;
const connectDB = require('./config/dbConn');
const mongoose = require('mongoose');
mongoose.set('strictQuery', true);

connectDB();
app.use(cors());
app.use(express.json());
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
//app.use(errorHandler);

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

});
