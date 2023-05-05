const http = require("http");

const hostname = "127.0.0.1";
const port = 4000;

const server = http.createServer((req, res) => {
  res.setHeader(
    "Access-Control-Allow-Origin",
    "*"
  ); /* @dev First, read about security */
  res.setHeader("Access-Control-Allow-Methods", "OPTIONS, GET");
  res.setHeader("Access-Control-Max-Age", 2592000); // 30 days

  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify({
    message: "Hello World"
  }));
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
