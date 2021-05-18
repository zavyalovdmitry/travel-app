const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const path = __dirname + '/app/views/';
const app = express();
const PORT = process.env.PORT || 8081;

app.use(express.static(path));

const addr = 'https://zavyalovdmitry-travel-app.herokuapp.com'

const corsOptions = {};

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const db = require('./app/models');

app.get('/', function (req,res) {
  res.sendFile(path + "index.html");
});

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

require('./app/routes/country.routes')(app);
require('./app/routes/place.routes')(app);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
