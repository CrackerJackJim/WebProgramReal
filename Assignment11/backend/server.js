require('dotenv').config();

const express = require('express');
const {Pool} = require('pg');
const cors = require('cors');

const PORT = 5000;
const app = express();
app.use(cors());

const personalDB = new Pool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.PERSONAL_DB_NAME,
    port: process.env.DB_PORT,
});

const hobbiesDB = new Pool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.HOBBIES_DB_NAME,
    port: process.env.DB_PORT,
});

app.get('/personal', async (req, res) => {
    try {
        const result = await personalDB.query('SELECT * FROM personal_info');
        res.json(result.rows);
    } catch(err) {
        console.error(err.message);
        res.status(500).send("Error In Server");
    }
});

app.get('/hobbies', async (req, res) => {
    try {
        const result = await hobbiesDB.query('SELECT * FROM hobbies');
        res.json(result.rows);
    } catch(err) {
        console.error(err.message);
        res.status(500).send("Error in Server");
    }
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));