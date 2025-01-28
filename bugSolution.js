const http = require('http');

const requestListener = (request, response) => {
  response.setHeader('Content-Type', 'application/json');
  try {
    response.writeHead(200);
    const jsonData = {
      message: 'Hello from Node.js!',
    };
    response.end(JSON.stringify(jsonData));
  } catch (error) {
    console.error('Error handling request:', error);
    response.writeHead(500);
    response.end(JSON.stringify({ error: 'Internal Server Error' }));
  }
};

const server = http.createServer(requestListener);

server.on('error', (err) => {
  console.error('Server error:', err);
});

server.listen(8080, () => {
  console.log('Server is running on port 8080');
});