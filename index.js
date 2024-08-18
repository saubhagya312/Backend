require('dotenv').config();

const express = require('express');

const app = express();

const port = 3000;

app.get('/', (req, res) => {
    res.send('Saubhagya Developer');
});
app.get('/github', (req, res) => {
    res.send('Saubhagya312');

});
app.get('/instagram', (req, res) => {
    res.send('<h1> a basic app to deploy </h1>');
});

app.get('/youtube', (req, res) => {
    res.send('<h2> Saubhagya </h2>');
});
app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${port}`);

});
