const express = require('express');
const cors = require('cors');
const routerAPI = require('./routes');
const { logErrors, errorHandler, boomHandler, ormErrorHandler } = require('./middlewares/error');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

const whitelist = ['https://myapp.co'];
const corsOptions = {
  origin: (origin, callback) => {
    if (whitelist.includes(origin) || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Unauthorized'));
    }
  }
};
app.use(cors(corsOptions));

require('./utils/auth');

routerAPI(app);

app.use(logErrors);
app.use(ormErrorHandler);
app.use(boomHandler);
app.use(errorHandler);

app.listen(port, () => {
  console.info(`🔥 Server listening on port: ${port}`);
});
