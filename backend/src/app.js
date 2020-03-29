const express = require("express");
const cors = require("cors");
const { errors } = require("celebrate");

class AppController {
  constructor() {
    this.express = express();

    this.middleware();
    this.database();
    this.routes();
  }

  middleware() {
    this.express.use(cors());
    this.express.use(express.json());
  }

  database() {}

  routes() {
    this.express.use(require("./routes"));
    this.express.use(errors());
  }
}

module.exports = new AppController().express;
