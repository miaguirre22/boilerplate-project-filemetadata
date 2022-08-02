var express = require('express');
var cors = require('cors');
require('dotenv').config()

let multer = require('multer')

var app = express();

app.use(cors());
app.use('/public', express.static(process.cwd() + '/public'));

app.get('/', function (req, res) {
  res.sendFile(process.cwd() + '/views/index.html');
});

app.post('/api/fileanalyse', multer().single('upfile'), (req, res) => {
  console.log(req.file)
  let fileObj = {}
  
  fileObj.name = req.file.originalname
  fileObj.type = req.file.mimetype
  fileObj.size = req.file.size
  
  res.send(fileObj)
})


const port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log('Your app is listening on port ' + port)
});
