const connection = require('./connection');

const getAll = async () => {
  const QUERY = 'SELECT * FROM users_crud.users';

  const [result] = await connection.execute(QUERY);
  
  if (result.length === 0) return [];
  return result;
}

const getById = async (id) => {
  const QUERY = 'SELECT * FROM users_crud.users WHERE id = ?;';
  
  const [result] = await connection.execute(QUERY, [id]);

  if (result.length === 0) return null;
  return result;
}

const create = async ({ firstName, lastName, email, password }) => {
  const QUERY = 'INSERT INTO users_crud.users (first_name, last_name, email, password) VALUES (?, ?, ?, ?);';
  const [result] = await connection.execute(QUERY, [firstName, lastName, email, password]);
  return ({ id: result.insertId, firstName, lastName, email });
}

const change = async ({ id, firstName, lastName, email, password }) => {
  const QUERY = 'UPDATE users_crud.users SET first_name = ?, last_name = ?, email = ?, password = ? WHERE id = ?';

  await connection.execute(QUERY, [firstName, lastName, email, password, id]);
  return await getById(id);
}

module.exports = {
  create,
  getAll,
  getById,
  change,
}