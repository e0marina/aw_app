const express = require('express');
//const bodyParser = require('body-parser');
require('dotenv').config();
const path = require('path');
const { ApolloServer } = require('apollo-server-express');
const db = require('./config/connection');

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Serve up static assets
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

//send text

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);

// Send the text message.
client.messages
  .create({
    messagingServiceSid: 'MG01c49fa43b1e039eecce09e79424edd3',
    to: process.env.YOUR_NUMBER,
    from: process.env.YOUR_TWILIO_NUMBER,
    body: 'Hello from Twilio!',
  })
  .then((message) => console.log(message.sid))
  .done();

db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
    // log where we can go to test our GQL API
    // console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
  });
});
