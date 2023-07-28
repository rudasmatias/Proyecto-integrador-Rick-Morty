//const http = require("http");
//const data = require("./utils/data");
//const getCharById = require("./controllers/getCharById");
//require("dotenv").config();

//const PORT = 3001;

//const server = http.createServer((req, res) => {
//res.setHeader("Access-Control-Allow-Origin", "*");

//web server
/*  if (req.url.includes("/rickandmorty/character")) {
    const id = req.url.split("/").at(-1);
    console.log(id);
    const character = data.find((element) => element.id === Number(id));

   if (character) {
      return res
        .writeHead(200, { "Content-type": "aplication/json" })
        .end(JSON.stringify(character));
    } else {
      const obj = { mensaje: "Not found", error: "Not found" };
      return res
        .writeHead(404, { "Content-type": "aplication/json" })
        .end(JSON.stringify(obj));
    }
  } */

//if (req.url.includes("/rickandmorty/character")) {
//const id = req.url.split("/").at(-1);
//getCharById(res, id);
//}
//});

//server.listen(PORT, "localhost", () => {
//console.log("Server escuchando");
//});

const express = require("express");
const server = express();
const router = require("./routes/index");
const cors = require("cors");

const PORT = 3001;

server.use(cors());

//middleware de las cors, permite el acceso del front al back, permimiento el acceso a todas las rutas
server.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Credentials", "true");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});

//Este middleware analiza los datos enviados desde el front en formato json (convertidos previamente por ajax) y los parsea a objetos de javascript
server.use(express.json());

//con este middleware, realizo el pasamanos de la modularización, enviando cada vez que reciba el path mencionado hacia router
server.use("/rickandmorty", router);

module.exports = server;
