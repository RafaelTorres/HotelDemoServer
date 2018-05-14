import Constants from '../config/constants';

export default function errorHandler(err, req, res, next) {
  if (!err) {
    return res.sendStatus(500);
  }

  const status = err.status || 500;

  const error = {
    status_code: status,
    message: err.message || 'Internal Server Error.',
    data: null,
  };

  if (Constants.envs.development) {
    error.stack = err.stack;
  }

  if (err.errors) {
    error.errors = {};
    const { errors } = err;
    for (const type in errors) {
      if (type in errors) {
        error.errors[type] = errors[type].message;
      }
    }
  }

  res.status(status).json(error);
}
