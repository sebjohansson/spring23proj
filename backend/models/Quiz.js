const mongoose = require('mongoose')
const { stringify } = require('uuid')


const quizSchema = new mongoose.Schema({

    QuestionIndex: {
        type: Number,
        required: true,
        unique: true
    },
    QuestionDescription: {
        type: String,
        required: true
    },
    QuestionOptions: [{
        type: Number,
        required: true
    }],
    QuestionCorrectAnswer: {
        type: Number,
        required: true
    },
    QuestionExplanation: {
        type: String,
        required: true
    },
    QuestionImageLink: {
        type: String,
        default: "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F47%2F2021%2F05%2F04%2Fmastiff-puppy-48220284-2000.jpg",
        required: true

    }


})


module.exports = mongoose.model('Quiz', quizSchema)