const db = require('../database/connect')

class Snack {

  constructor({ id, name, description, healthy, vegetarian, votes }) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.healthy = healthy;
    this.vegetarian = vegetarian;
    this.votes = votes;
  }

  static async getAll() {
    const response = await db.query("SELECT * FROM snacks ORDER BY name;");

    if (response.rows.length === 0) {
      throw new Error("No snacks available.")
    }

    return response.rows.map(g => new Snack(g));
  }

  static async getTopSnack() {
    const response = await db.query("SELECT * FROM snacks ORDER BY votes DESC LIMIT 1;");

    if (response.rows.length != 1) {
      throw new Error("Unable to locate snack.")
    }

    return new Snack(response.rows[0]);
  }

  static async getOneById(id) {
    try {
      const response = await db.query("SELECT * FROM snacks WHERE id = $1;", [id]);
      const snack = new Snack(response.rows[0])
      return snack
    } catch (err) {
      throw new Error("Unable to locate snack.")
    }
  }

  static async create(data) {
    if (!data.name) {
      throw new Error("Name is missing")
    }
    
    const { name, description, healthy = false, vegetarian = false} = data;
    const snack = await db.query("SELECT name FROM snacks WHERE LOWER(name) = LOWER($1)", [name])
    
    if(snack.rows.length === 0) {
      const response = await db.query("INSERT INTO snacks (name, description, healthy, vegetarian) VALUES ($1, $2, $3, $4) RETURNING *;", [name, description, healthy, vegetarian]);
      return new Snack(response.rows[0])
    } else {
      throw new Error(`The snack ${name} already exists`)
    }
  }

  async update(data) {
    if (!data.votes) {
      throw new Error("Votes missing")
    }

    try{ 
      const response = await db.query("UPDATE snacks SET votes = $1 WHERE id = $2 RETURNING id, votes;",
        [this.votes + parseInt(data.votes), this.id]);
      return new Snack(response.rows[0]);
    } catch (err) {
      throw new Error("Unable to update votes.")
    }
  }

  async destroy() {
    try {
      const response = await db.query("DELETE FROM snacks WHERE id = $1 RETURNING *;", [this.id]);
      return new Snack(response.rows[0]);
    } catch (err) {
      throw new Error("Unable to delete snack.")
    }
  }
}

module.exports = Snack;
