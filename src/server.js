const http = require('http');
const app = require('./App');

const port = process.env.PORT || 3000;

const server = http.createServer(app); // Note the capitalization of `app` to `app` to match convention

server.listen(port, () => {
    console.log(`Started on port ${port}`); // Fixed template literal syntax
});
