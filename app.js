const express = require('express')
const app = express()

const aboutUs = require('./repo/aboutUs.json')

// respond with "hello world" when a GET request is made to the homepage
app.get('/aboutUs', (req, res) => {
    res.json(aboutUs)
})

app.listen(process.env.PORT || 3000, () =>
    console.log('Example app listening on port 3000!'),
);