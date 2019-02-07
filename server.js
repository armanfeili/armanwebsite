const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

const abilities = require('./routes/api/abilities');

const db = require('./config/keys').mongoURI;

mongoose.connect(db, { useNewUrlParser: true }).then(() => console.log('MongoDB connected.')).catch((err) => console.log(err));

const port = process.env.PORT || 5000;

app.use(bodyParser.urlencoded({ extended: false })); // parse application/x-www-form-urlencoded -> parse the code from url
app.use(bodyParser.json()); // parse application/json -> parse the code from json code

// User routes
app.use('/', abilities);

// Server static assets if in production
if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('client/build'));
  // creating our route
  // here, we want to get anything that is not our api route, (not like: '/api/profile')
  app.get('*', (req, res) => {
    // for sending file , we need to add path module which is a built-in node module
    // __dirname is the current directory
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

app.listen(port, () => {
  console.log(`server running on port ${port}`);
});
