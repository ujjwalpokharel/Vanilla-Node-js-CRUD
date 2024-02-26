const http = require("http");
const { getAllProduct } = require("./controller/productController");

const server = http.createServer((req, res) => {
  if (req.url === "/api/products" && req.method === "GET") {
    getAllProduct(req, res);
  } else {
    res.writeHead(404, { "Content-Type": "application/json" });
    res.end(
      JSON.stringify({
        message: "Route Not Found: Please use the api/products endpoint",
      })
    );
  }
});
const PORT = 5000;
server.listen(PORT, () => console.log("server is running on port 500"));
