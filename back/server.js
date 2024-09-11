const express = require('express');
const multer = require('multer');
const path = require('path');
const cors = require('cors');

const app = express();
const port = 3000;

// Setup CORS
app.use(cors());

// Setup Multer storage configuration
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'src/img/map'); // Directory to save the file
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname); // File name with timestamp
  },
});

const upload = multer({ storage });

// POST route for file upload
app.post('/upload', upload.single('file'), (req, res) => {
  res.send('File uploaded successfully');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
