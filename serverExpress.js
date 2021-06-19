const express = require('express');
const server = express();

const port = process.env.port || 3000;

server.get('/', (req, res) => {
  res.sendFile(`${__dirname}/index.html`, 'charset = utf8');
})

server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
