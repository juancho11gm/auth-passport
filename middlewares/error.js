function logErrors(err, req, res, next) {
  console.error(err);
  next(err);
}

function errorHandler(err, req, res, next) {
  // status to be updated
  res.status(500).json({
    message: err.message,
    stack: err.stack,
  });
}

function boomHandler(err, req, res, next) {
  if (err.isBoom) {
    const { output } = err;
    res.status(output.statusCode).json(output.payload);
  }
  next();
}

module.exports = { logErrors, errorHandler, boomHandler };
