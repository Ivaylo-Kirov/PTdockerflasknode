const express = require('express')
const axios = require('axios')

const app = express()
app.get('/', (req, res) => {
    axios.get('http://products')
        .then((response) => {
            res.send(response.data);
        })
        .catch((err) => console.log(err))
})
app.listen(80, '0.0.0.0');

// fetch('http://products')
//     .then((result) => result.json)
//     .then((jr) => console.log(jr))
//     .catch((err) => console.log(err))