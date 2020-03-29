const connection = require("../database/connection");

class SessionController {
  async create(request, response) {
    try {
      const { id } = request.body;

      const ong = await connection("ongs")
        .where("id", id)
        .select("name")
        .first();

      if (!ong)
        return response
          .status(400)
          .json({ message: "No ONG found with this ID!" });

      return response.status(200).json(ong);
      //
    } catch (err) {
      return response.status(400).json({
        message: "Error creating session!",
        error: err
      });
    }
  }
}

module.exports = new SessionController();
