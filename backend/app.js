const express = require('express');
const http = require("http");
const fs = require("fs");
const cors = require('cors');
const bodyParser = require("body-parser");
const multer = require('multer');
const app = express();

const directoryPath = './files/';
let files = [];

try {
  files = fs.readdirSync(directoryPath);
} catch (error) {
  console.error('Error reading directory:', error);
}

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



const storage = multer.diskStorage({
  destination: (req, file, cb) => {
      cb(null, './files/');
  },
  filename: (req, file, cb) => {
      const sanitizedFileName = file.originalname.replace(/[^a-zA-Z0-9.-]/g, '_');
      files.append(sanitizedFileName);
      cb(null, sanitizedFileName);
  }
});
const upload = multer({ storage: storage });

app.post('/api/v1/upload', upload.single('file'), (req, res) => {
    console.log(req.body);
}
);

app.get('/api/v1/fetch', (req, res) => {
    console.log(req.body);
}
);



http.createServer(app).listen(port, () => {
    console.log(`HTTP server up and running on port ${port}`);
});