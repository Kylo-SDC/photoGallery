require('newrelic');
const app = require('./app.js');

app.listen(3009, () => {
  console.log('Listening on port 3009');
});
