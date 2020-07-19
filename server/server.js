const express = require('express');
const cors = require('cors');
const app = express();
const connection = require('./connection.js');
const port = process.env.PORT || 5000;

app.use(cors());

// console.log that your server is up and running
app.listen(port, () => console.log('Listening on port ${port}'));

// check server functionality
app.get('/', (req, res) => {
    res.send('Test')
});

// create a GET route
app.get('/express_backend', (req, res) => {
    res.send('YOUR EXPRESS BACKEND IS CONNECTED TO REACT')
});

app.get('/mongo_backend', (req, res) => {
    // list clusters in mongodb atlas
    connection.main();
    res.send('MONGO IS CONNECTED')
})

module.exports = app;