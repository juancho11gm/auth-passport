const express = require('express');
const cors = require('cors');
const routerAPI = require('./routes');
const { logErrors, errorHandler, boomHandler } = require('./middlewares/error');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

const whitelist = ['http://127.0.0.1:3001'];
const corsOptions = {
  origin: (origin, callback) => {
    if (whitelist.includes(origin) || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Unauthorized'));
    }
  },
};
app.use(cors(corsOptions));

routerAPI(app);

app.use(logErrors);
app.use(boomHandler);
app.use(errorHandler);

app.listen(port, () => {
  console.info(`🔥 Server listening on port: ${port}`);
});
