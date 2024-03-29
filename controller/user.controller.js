const db = require('../db');

class UserController {
    async createUser(req, res) {
        const {name, lastname} = req.body;
        const newPerson = await db.query(`INSERT INTO person (name, lastname) values ($1, $2) RETURNING *`, [name, lastname])
        res.json(newPerson.rows[0]);
    }
    async getUsers(req, res) {
        const users = await db.query('SELECT * FROM person');
        res.json(users.rows);
    }
    async getOneUser(req, res) {
        const id = req.params.id
        const users = await db.query('SELECT * FROM person WHERE id = $1', [id]);
        res.json(users.rows[0]);
    }
    async updateUser(req, res) {
        const {id, name, lastname} = req.body;
        const user = await db.query(
            'UPDATE person SET name = $1, lastname = $2 WHERE id = $3 RETURNING *',
            [name, lastname, id]
        )
        res.json(user.rows[0])
    }
    async deleteUser(req, res) {
        const id = req.params.id
        const users = await db.query('DELETE FROM person WHERE id = $1 RETURNING *', [id]);
        res.json(users.rows[0]);
    }
}

module.exports = new UserController();