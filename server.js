const http = require("http");
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  res.write(
    JSON.stringify([
      {
        name: "Server",
        platform: "Node js",
        tech: ["npm", "node", "javascript", "sql"],
      },
      {
        name: "Server1",
        platform: "Node js1",
        tech: ["npm", "node", "javascript", "sql"],
      },
    ])
  );
  res.end();
});
const PORT = 5000;
server.listen(PORT, () => console.log("server is running"));
