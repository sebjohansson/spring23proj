const mongoose = require('mongoose')
const { stringify } = require('uuid')
const AutoIncrement

quizSchema.plugin(AutoIncreasement, {
    inc_field: 'testField',
    id: 'testNumber',
    start_seq: 0
})


const quizSchema = new mongoose.Schema({

    QuestionDescription: {
        type: String,
        required: true
    },

})


module.exports = mongoose.model('Quiz', quizSchema)