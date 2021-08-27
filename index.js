const express = require('express');

const app = express();

app.use(() => {
  console.log('hello servesr');
});

app.listen(4000);
