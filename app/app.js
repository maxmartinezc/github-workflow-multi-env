/*eslint-env node*/
const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/api/v1/hello', (req, res) => {
  res.send({ app: 'hello-api', version: `${process.env.npm_package_version}`});
});

module.exports = app;
