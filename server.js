// init project
const express = require('express');
const app = express();
const accepts = require('accepts');

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC 
const cors = require('cors');
app.use(cors({optionSuccessStatus: 200}));  // some legacy browsers choke on 204

// Enables style.css file
app.use(express.static('public'));

// Loads index.html file when you enter app
app.get("/", (req, res) => {
  res.sendFile(__dirname + '/views/index.html');
});

// User story 1 - I can get the IP address, preferred languages (from header Accept-Language) and system infos (from header User-Agent) for my device.
// Example Output: {"ipaddress":"159.20.14.100","language":"en-US,en;q=0.5","software":"Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:50.0) Gecko/20100101 Firefox/50.0"}
app.get("/api/:name", (req, res) => {
  res.json({"ipaddress": req.ip, "language": accepts(req).languages(), "software": req.get('user-agent')});
});

// listen for requests
const listener = app.listen(process.env.PORT, () => {
  console.log('Your app is listening on port ' + listener.address().port);
});
