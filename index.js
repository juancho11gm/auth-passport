const express = require('express');
const routerAPI = require('./routes');
const { logErrors, errorHandler } = require('./middlewares/error.handler');

const app = express();
const port = 3000;

app.use(express.json());
routerAPI(app);

app.use(logErrors);
app.use(errorHandler);

app.listen(port, () => {
  console.info(`🔥 Server listening on port: ${port}`);
});
