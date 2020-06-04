const { Router } = require('express');
const db = require('../db');

const apiRouter = Router();

apiRouter.get('/users/:name', (req, res) => {
});


module.exports = {
  apiRouter,
};
