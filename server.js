const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('./app/config/db.config.js');
const router = require('./app/routes/router.js');


const corsOptions = {
  origin: 'http://localhost:4200',
  optionsSuccessStatus: 200
};
app.use(cors(corsOptions));


app.use(bodyParser.json());


db.sequelize.sync({ force: false }).then(() => {
  console.log('Drop and Resync with { force: false }');
});


app.use('/', router);

app.get("/", (req, res) => {
  res.json({ message: "Bienvenidos" });
});


const server = app.listen(3000, function () { 
  let host = server.address().address;
  let port = server.address().port;
  console.log("App listening at http://%s:%s", host, port);
});
