const express = require('express');
const http = require("http");
const fs = require("fs");
const cors = require('cors');
const bodyParser = require("body-parser");
const multer = require('multer');
const raw = require('body-parser/lib/types/raw');
const app = express();

const directoryPath = './files/';
let files = [];
let downloads = 0;
let uplaods = 0;

try {
  files = fs.readdirSync(directoryPath);
} catch (error) {
  console.error('Error reading directory:', error);
}

try {
  const data = JSON.parse(fs.readFileSync('data.json', 'utf8'));
  downloads = data.downloads;
  uploads = data.uploads;
} catch (error) {
  console.error('Error reading data.json:', error);
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

/** 
 * @api {post} /api/v1/uploadFile Upload a file
 * @apiName UploadFile
 * @apiGroup File
 * @apiVersion 1.0.0
 * @apiDescription Upload a file to the server.
 */
app.post('/api/v1/upload', upload.single('file'), (req, res) => {
    res.send('success');
    uplaods++;
}
);

/**
 * @api {get} /api/v1/fetchFile Fetch a file
 * @apiName FetchFile
 * @apiGroup File
 * @apiVersion 1.0.0
 * @apiDescription Fetch a random file from the server.
 */
app.get('/api/v1/fetchFile', (req, res) => {
    let randomIndex = Math.floor(Math.random() * files.length);
    let randomFile = files[randomIndex];
    res.download(`./files/${randomFile}`);
    downloads++;
}
);

/**
 * @api {get} /api/v1/fetchFiles fetches the number of downloads
 * @apiName FetchFiles
 * @apiGroup File
 * @apiVersion 1.0.0
 * @apiDescription Fetches the number of downloads during this session.
 */
app.get('/api/v1/fetchDownloads', (req, res) => {
  res.send(downloads.toString());
}
);

/**
 * @api {get} /api/v1/fetchUploads fetches the number of uploads
 * @apiName FetchUploads
 * @apiGroup File
 * @apiVersion 1.0.0
 * @apiDescription Fetches the number of uploads during this session.
 */
app.get('/api/v1/fetchUploads', (req, res) => {
  res.send(uplaods.toString());
}
);

app.get('/api/v1/allFileNames', (req, res) => {
  res.send(files.toString());
}
);

http.createServer(app).listen(port, () => {
    console.log(`HTTP server up and running on port ${port}`);
});

// Save data every 10 minutes
await setInterval(() => {
  fs.writeFileSync('data.json', JSON.stringify({downloads, uploads}));
}, 600000);

