/* eslint-disable no-console */
const express = require('express');
const next = require('next');
const helmet = require('helmet');
const compression = require('compression');

const routes = require('./src/routes');

const host = process.env.HOST || 'localhost';
const port = parseInt(process.env.PORT, 10) || 8080;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handler = routes.getRequestHandler(app);

// add exception handler to prevent crash from newrelic errors
process.on('uncaughtException', err => {
  console.log(`process.on handler catch error - ${err}`);
});

app
  .prepare()
  .then(() => {
    const server = express();
    if (!dev) {
      server.use(compression());
    }

    server.use(helmet());
    // health check
    server.get('/ping', (req, res) => res.status(200).send({ status: 'OK' }));
    server.use(handler);

    server.listen(port, err => {
      if (err) throw err;
      console.log(`> Ready on http://${host}:${port}`);
    });
  })
  .catch(ex => {
    console.error(ex.stack);
    process.exit(1);
  });
