const express = require('express');
const http = require("http");
const fs = require("fs");
const cors = require('cors');
const bodyParser = require("body-parser");
const app = express();

require('events').EventEmitter.defaultMaxListeners = 15;

const port = process.env.PORT;

app.use((req, res, next) => {
    console.log('Incoming request: ' + req.url);
    next();
});

app.use(cors({
    origin: ['http://localhost:3000', 'https://localhost:3001'],
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type'],
    credentials: true
  }));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/api/v1/upload', (req, res) => {
        console.log(req.body);
    }
);

http.createServer(app).listen(port, () => {
    console.log(`HTTP server up and running on port ${port}`);
});