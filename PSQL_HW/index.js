const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const db = require('./queries')
const port = 3000;

app.use(cors());

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

app.get('/character', db.Streetfighter)
app.get('/defjam/:id', db.getStreetfighterById);
app.get('/defjam', db.createStreetfighter);
app.post('/defjam', db.createStreetfighter);

app.listen(port, () => {
    console.log(`App running on port ${port}`)
});