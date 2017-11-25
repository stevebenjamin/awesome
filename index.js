
const express = require('express');
cons app = express();

app.get('/', (req, res) => {
  res.send({ message: 'Its work'});
})

app.listen(3000, () => {
  console.log('server running on http://localhost:3000');
});
