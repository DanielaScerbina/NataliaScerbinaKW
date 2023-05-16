const http = require("http");

const hostname = "127.0.0.1";
const port = 4000;

const server = http.createServer((req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "*");
  res.setHeader("Access-Control-Allow-Headers", "*");
  res.setHeader("Access-Control-Max-Age", "86400");
  res.setHeader("Content-Type", "application/json");
  if (req.method === "POST") {
    let chunks = "";

    req.on("data", (chunk) => {
      chunks += chunk.toString();
    });

    req.on("end", () => {
      console.log(chunks);
      setTimeout(() => {
        res.end(
          JSON.stringify({
            message: "thanks",
            data: JSON.parse(chunks),
          })
        );
      }, 3000);
    });
  } else {
    res.end();
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
