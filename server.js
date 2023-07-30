const http = require("http");

const hostname = "127.0.0.1";
const port = 8080;

var again = "";

const server = http.createServer((req, res) => {
  console.log(
    "received request from " +
      req.socket.remoteAddress +
      " with " +
      req.headers["user-agent"]
  );
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("Hello World\n");
  console.log("we did it " + again + "!");
  again += "again ";
});

server.listen(port, () => {
  console.log(`Server running at ${hostname}:${port}`);
});
