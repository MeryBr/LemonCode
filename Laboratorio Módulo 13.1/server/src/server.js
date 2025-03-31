const jsonServer = require("json-server");
const path = require("path");

const server = jsonServer.create();
const router = jsonServer.router(path.join(__dirname, "data.json"));
const middlewares = jsonServer.defaults();

const loginMiddleware = require("./login.middleware");
const accountMiddleware = require("./account.middleware");

server.use(middlewares);
server.use(jsonServer.bodyParser);
server.use(loginMiddleware);
server.use(accountMiddleware);
server.use(router);

server.listen(3000, () => {
  console.log("JSON Server is running on port 3000");
});
