
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send({ message: 'Its work'});
})

app.put('/update', (req, res) => {
  console.log('updating....');
  console.log(req.body);
});
app.listen(3000, () => {
  console.log('server running on http://localhost:3000');
});
