require('dotenv').config();

const cors = require('cors');
const express = require('express');
const dotenv = require('dotenv').config();
const app = express();
const port = process.env.PORT || 4000;

app.get('/api/quiz', (req, res) => {
    res.status(200).json({message: 'Fetched'})
})
app.use(cors());
app.use(express.json());

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
});