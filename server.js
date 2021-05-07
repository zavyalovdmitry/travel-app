const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

// -----------------------------------------
const path = __dirname + '/app/views/';
// -----------------------------------------

const app = express();

// set port, listen for requests
// const PORT = process.env.PORT || 8080;
const PORT = process.env.PORT || 8081;

// -----------------------------------------
app.use(express.static(path));
// -----------------------------------------

const addr = 'http://zavyalovdmitry-travel-app.herokuapp.com'

const corsOptions = {
  // origin: "http://localhost:8081"
  
  // origin: 'http://localhost:8080',

  origin: 'https://zavyalovdmitry-travel-app.netlify.app',

  // origin: `${addr}:8080`,
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

const db = require('./app/models');

// -----------------------------------------
app.get('/', function (req,res) {
  res.sendFile(path + "index.html");
});
// -----------------------------------------

db.mongoose
  .connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Connected to the database!');
  })
  .catch((err) => {
    console.log('Cannot connect to the database!', err);
    process.exit();
  });

// simple route
// app.get("/", (req, res) => {
//   res.json({ message: "Backend testing." });
// });

require('./app/routes/country.routes')(app);
require('./app/routes/place.routes')(app);

// set port, listen for requests
// const PORT = process.env.PORT || 8080;
// const PORT = process.env.PORT || 8081;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
