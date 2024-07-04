const path = require('path');
const express = require('express');
const { catalogRouter } = require('./catalog');
const { countMiddleware } = require('./middlewares/counter');
const { dataController } = require('./data');

const app = express();

const homeHtml = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="/static/style.css">
</head>
<body>
    <h1>Home Page</h1>
    <a href="/">Home</a>
    <a href="/catalog">Catalog</a>
    </body>
</html>
`;

const catalogHtml = `
    <h1>Catalog</h1>
    <a href="/">Home</a>
    <a href="/catalog">Catalog</a>
`;

app.use('/static', express.static('static'));
app.use(countMiddleware);

app.get('/', (req, res) => {
    res.send(homeHtml);
});

app.use('/catalog', catalogRouter);

app.get('/data', countMiddleware, dataController);

app.get('/catalog/:category/:productId', (req, res) => {
    res.send(catalogHtml + `<h2>${req.params.category}</h2>`
        + `<p>ItemId: ${req.params.productId}</p>`
);
});

app.get('*', (req, res) => {
    res.status(404);
    res.send('404 FILE NOT FOUND!')
});

app.listen(3000, () => {
    console.log('App is listening on port 3000');
});