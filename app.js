const express = require('express');
const app = express();
const path = require('path');
const port = 3000;

app.use((req, res, next) => {
  res.header('Cross-Origin-Embedder-Policy', 'credentialless');
  res.header('Cross-Origin-Opener-Policy', 'same-origin');
  next();
});

app.use(express.static(path.join(__dirname, 'build')));

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(port, () => {
  console.log('Example app listening on port 3000!');
});
