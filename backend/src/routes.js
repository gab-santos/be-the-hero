const routes = require("express").Router();

const SessionController = require("./controllers/SessionController");
const OngController = require("./controllers/OngController");
const IncidentController = require("./controllers/IncidentController");
const ProfileController = require("./controllers/ProfileController");

const Validators = require("./validators");

routes.get("/hw", (req, res) =>
  res.status(200).json({ success: "Hello World :)" })
);

routes.post("/sessions", Validators.session(), SessionController.create);

routes.post("/ongs", Validators.ongsCreate(), OngController.create);
routes.get("/ongs", OngController.index);

routes.post(
  "/incidents",
  Validators.incidentsCreate(),
  IncidentController.create
);
routes.get("/incidents", Validators.incidentsIndex(), IncidentController.index);
routes.delete(
  "/incidents/:id",
  Validators.incidentsDelete(),
  IncidentController.delete
);

routes.get("/profile", Validators.profileIndex(), ProfileController.index);

module.exports = routes;
