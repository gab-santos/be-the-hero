const connection = require("../database/connection");
const generateUniqueId = require("../utils/generateUniqueId");

class OngCOntroller {
  async create(request, response) {
    try {
      const { name, email, whatsapp, city, uf } = request.body;

      const id = generateUniqueId();

      await connection("ongs").insert({
        id,
        name,
        email,
        whatsapp,
        city,
        uf
      });

      return response.status(201).json({ id });
    } catch (err) {
      return response.status(400).json({
        message: "Error registering ONG!",
        error: err
      });
    }
  }

  async index(request, response) {
    try {
      const ongs = await connection("ongs").select("*");

      return response.status(200).json(ongs);
    } catch (err) {
      return response.status(400).json({
        message: "Error listing ONGS!",
        error: err
      });
    }
  }
}

module.exports = new OngCOntroller();
