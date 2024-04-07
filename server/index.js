const express = require('express');

// TODO: Add body-parser package
// Bring in the database connector
const pg = require('pg');

// TODO: Remove data import and use database
// const animals = require('./data.json');
const pool = new pg.Pool({
    host: 'localhost',
    user: '',
    database: ''
})

const app = express();
const port = process.env.PORT || 3000;
//GET
app.get('/', (req, res) => {
    console.log('Request headers', req.headers);
    return res
        .status(200)
        .json({message: 'Welcome to the Adoption Shelter'})
});

app.get('/animals', async (req, res) => {
    // console.log('Attempting to get all animals from database');
    // First, test SQL by running 'Hello world' which is 1 + 1 in SQL
    // const response = await pool.query('SELECT 1 + 1 as sum;')
    // console.log('Response from database', response);

    const response = await pool.query(`
        SELECT *
        FROM animals;
    `);
    const data = response.rows;
    return res
        .status(200)
        .json(data);
})



app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})
