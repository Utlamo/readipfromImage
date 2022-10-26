const express = require('express');
const app = express();
const fs = require('fs');
const path = require('path')

//app.use('/', express.static(path.join(__dirname, '1.png')))
app.get('/',function(req, res) {
    const ipAddress = req.socket.remoteAddress;
    const r = fs.createReadStream('1.jpg');
    console.log(ipAddress);
    res.sendFile(__dirname + '//1.jpg');
});

app.listen(3000, () => console.log(`Server is listening on port 3000`))
