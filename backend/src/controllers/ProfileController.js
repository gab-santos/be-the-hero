const connection = require("../database/connection");

class ProfileController {
  async index(request, response) {
    try {
      const ong_id = request.headers.authorization;

      const incidents = await connection("incidents")
        .where("ong_id", ong_id)
        .select("*");

      response.status(200).json(incidents);
      //
    } catch (err) {
      return response.status(400).json({
        message: "Error listing incidents!",
        error: err
      });
    }
  }
}

module.exports = new ProfileController();
