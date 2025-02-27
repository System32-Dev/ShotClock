const http = require("http");
const nodeStatic = require("node-static");

let fileServe = new nodeStatic.Server("./public/");
let server = http.createServer((req, res) => {
  fileServe.serve(req, res);
})

server.listen(8080, () => {
  console.log("Listening on 8080");
});