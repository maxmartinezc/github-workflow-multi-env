// aws lambda function handler
const serverless = require('serverless-http');
const app = require('../app/app');

module.exports.handler = serverless(app);
