/*eslint-env node*/
const app = require('../app/app');
const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Listening on: ${port}`));