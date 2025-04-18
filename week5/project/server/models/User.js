//models/Goat.js
const db = require('../database/connect')

class User {
  constructor(data) {
    this.id = data.id
    this.firstName = data.firstName
    this.familyName = data.familyName
    this.email = data.email
    this.password = data.password
    this.score = data.score
  }

  static async getAll() {
    const response = await db.query("SELECT * FROM users;");
    if (response.rows.length === 0) {
      throw new Error("No users available.")
    }
    return response.rows.map(g => new User(g));
  }

  static async findById(user_id) {
    try {
      const userData = await db.query('SELECT * FROM users WHERE user_id = $1', [user_id])
      const user = new User(userData.rows[0]);
      return user;
    } catch (err) {
      throw new Error('This user does not exist!');
    }
  }

  static async create(data) {
    if (!data.name || !data.firstName || !data.familyName || !data.email || !data.password) {
       throw new Error("Information is missing")
      }
    const { first_name, family_name, email, password } = data;
    const user = await db.query("SELECT email FROM users WHERE LOWER(email) = LOWER($1)", [email])

    if (user.rows.length === 0){
    const response = await db.query("INSERT INTO users(first_name, family_name, email, password) VALUES ($1, $2) RETURNING *;", [first_name, family_name, email, password])
    return new User(response.rows[0])
    } else {
      throw new Error ('User does not exist.\nIf you have forgot your password,\nPlease submit forgotten password request.')
    }
  }
  async updateFirstName(data) {
    if (!data.firstName) {
      throw new Error("Missing name")
    }

    try {
      const response = await db.query("UPDATE users SET first_name = $1 WHERE id = $2 RETURNING *", [data.firstName, this.id])
      return new User(response.rows[0])
    } catch (err) {
      throw new Error(err.message)
    }
  }

  async updateFamilyName(data) {
    if (!data.familyName) {
      throw new Error("Missing name")
    }

    try {
      const response = await db.query("UPDATE users SET family_name = $1 WHERE id = $2 RETURNING *", [data.familyName, this.id])
      return new User(response.rows[0])
    } catch (err) {
      throw new Error(err.message)
    }
  }

  async updateEmail(data) {
    if (!data.email) {
      throw new Error("Missing email address")
    }

    try {
      const response = await db.query("UPDATE users SET email = $1 WHERE id = $2 RETURNING *", [data.email, this.id])
      return new User(response.rows[0])
    } catch (err) {
      throw new Error(err.message)
    }
  }

  async updatePassword(data) {
    if (!data.password) {
      throw new Error("Missing password")
    }

    try {
      const response = await db.query("UPDATE users SET password = $1 WHERE id = $2 RETURNING *", [data.password, this.id])
      return new User(response.rows[0])
    } catch (err) {
      throw new Error(err.message)
    }
  }

  async destroy() {
    try {
      const response = await db.query("DELETE FROM users WHERE id = $1 RETURNING *", [this.id])
      return new User(response.rows[0])
    } catch(err) {
      throw new Error("Cannot delete.")
    }
  }
}

module.exports = User
