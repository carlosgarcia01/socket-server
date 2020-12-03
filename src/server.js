const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

require('dotenv').config();

const app = express();


app.set('PORT',process.env.PORT || 3000);
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());



module.exports = app;