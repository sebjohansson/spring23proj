const allowedOrigins = require('./allowedOrigins')


const corsOptions = {
    origin: (origin, callback) => {
        if (allowedOrigins.indexOf(origin) !== -1 || !origin ) { // !origin necessery for insomnia/postman CRUDS
            callback(null, true)
        } else {
            callback(new Error('Not Allowed by CORS'))
        }
    },
    credentials: true,
    optionsSuccessStatus: 200
}

module.exports = corsOptions