const connection = require("../database/connection");

class IncidentController {
  async index(request, response) {
    try {
      const { page = 1 } = request.query;

      const [count] = await connection("incidents").count();

      const incidents = await connection("incidents")
        .join("ongs", "ongs.id", "=", "incidents.ong_id")
        .limit(5)
        .offset((page - 1) * 5)
        // especificado os campos da tabela 'ongs' pois como o campo 'id' das tabelas
        // tem o mesmo nome acabou que o 'id' do 'incident' foi sobreposto pelo 'id'
        // da 'ong', assim não trazendo ele no select resolve o problema
        .select([
          "incidents.*",
          "ongs.name",
          "ongs.email",
          "ongs.whatsapp",
          "ongs.city",
          "ongs.uf"
        ]);

      response.header("X-Total-Count", count["count(*)"]);

      return response.status(200).json(incidents);
    } catch (err) {
      return response.status(400).json({
        message: "Error listing incidents!",
        error: err
      });
    }
  }

  async create(request, response) {
    try {
      const { title, description, value } = request.body;
      const ong_id = request.headers.authorization;

      const [id] = await connection("incidents").insert({
        title,
        description,
        value,
        ong_id
      });

      return response.status(201).json({ id });
      //
    } catch (err) {
      return response.status(400).json({
        message: "Error creating incident!",
        error: err
      });
    }
  }

  async delete(request, response) {
    try {
      const { id } = request.params;
      const ong_id = request.headers.authorization;

      const incident = await connection("incidents")
        .where("id", id)
        .select("ong_id")
        .first();

      if (incident.ong_id !== ong_id)
        return response
          .status(401)
          .json({ message: "Operation not permitted!" });

      await connection("incidents")
        .where("id", id)
        .delete();

      return response.status(204).send();
      //
    } catch (err) {
      return response.status(400).json({
        message: "Error deleting incident!",
        error: err
      });
    }
  }
}

module.exports = new IncidentController();
