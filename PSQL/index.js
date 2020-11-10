const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const db = require('./queries')
const port = 3000;

app.use(bodyParser.json());
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
)

// CRUD Add, GET, Edit, Delete

app.get('/', (request, response) => {
    response.json({info: 'Node.js, Express, and Postgres API'})
})

app.get('/defjam', db.getDefjam)
app.get('/defjam/:id', db/getDefjamById);
app.get('/defjam', db.createDefjam);

app.listen(port, () => {
    console.log(`App running on port ${port}`)
});