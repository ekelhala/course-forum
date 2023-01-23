const express = require('express');
const cors = require('cors');
require('dotenv').config();
const mongoose = require('mongoose');
const courseHandler = require('./courses');

mongoose.set('strictQuery', true);

const app = express();
const PORT = 8000; //App port

async function start() {
    mongoose.connect(process.env.MONGODB_URI);
}

app.use(cors({credentials:true}));
//app.use(cors());
app.use(express.json());
app.use(express.static('client/build'));
app.use('/api', courseHandler);

start();
app.listen(process.env.PORT||PORT, () => {});