const express = require('express');
const routerAPI = require('./routes');

const app = express();
const port = 3000;

routerAPI(app);

app.listen(port, () => {
  console.info(`🔥 Server listening on port: ${port}`);
});
