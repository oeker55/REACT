const { resolve4 } = require("dns");
const http = require("http");

const myServer = http.createServer((req, res) => {
  if (req.method === "GET") {
    if (req.url === "/") {
      res.write("Home Page");
    } else if (req.url === "/about") {
      res.write("This Is About Page");
    } else if (req.url === "/newProducts") {
      res.write("This Is New Products Page");
    } else {
      res.write("404 Not Found !!!");
    }
  } else {
    res.write("This is Not GET metthod " + "method :" + req.method);
  }
  res.end();
});

myServer.listen(3000);
