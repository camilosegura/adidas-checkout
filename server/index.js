const express = require('express');
const next = require('next');
const api = require('./api');

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  server.use('/api', api);

  server.all('*', (req, res) => handle(req, res));

  // Error handler
  server.use((err, req, res) => {
    const { message } = err;
    let { statusCode = 500 } = err;

    // Validation Errors
    if (err.message.startsWith('ValidationError')) {
      statusCode = 422;
    }

    res.status(statusCode);
    res.json({
      error: true,
      statusCode,
      message,
    });
  });

  server.listen(port, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
});
