const express = require('express');
const bodyParser = require('body-parser');

const User = require('./models/User');

const app = express();
app.use(bodyParser.json());

app.get('/user', async (_req, res) => {
  const users = await User.getAll();

  res.status(200).json(users);
})

app.get('/user/:id', async (req, res) => {
  const { id } = req.params;

  const user = await User.getById(id);

  if (!user) return res.status(404).json({ error: true, message: 'Usuário não encontrado' })
  res.status(200).json(user);
})

app.post('/user', async (req, res) => {
  const { firstName, lastName, email, password } = req.body;

  if (!firstName || typeof firstName !== 'string') return res.status(400).json({ error: true, message: 'O campo "firstName" deve ser uma string e é obrigatório!' });
  if (!lastName || typeof lastName !== 'string') return res.status(400).json({ error: true, message: 'O campo "lastName" deve ser uma string e é obrigatório!' });
  if (!email || typeof email !== 'string') return res.status(400).json({ error: true, message: 'O campo "email" deve ser uma string e é obrigatório!' });
  if (!password || typeof password !== 'string') return res.status(400).json({ error: true, message: 'O campo "password" deve ser uma string e é obrigatório!' });
  if (password && password.length < 6) return res.status(400).json({ error: true, message: 'O campo "password" deve ter pelo menos 6 caracteres' })

  const newUser = await User.create({ firstName, lastName, email, password });
  res.status(201).json(newUser);
})

app.put('/user/:id', async (req, res) => {
  const { id } = req.params;
  const { firstName, lastName, email, password } = req.body;

  if (!firstName || typeof firstName !== 'string') return res.status(400).json({ error: true, message: 'O campo "firstName" deve ser uma string e é obrigatório!' });
  if (!lastName || typeof lastName !== 'string') return res.status(400).json({ error: true, message: 'O campo "lastName" deve ser uma string e é obrigatório!' });
  if (!email || typeof email !== 'string') return res.status(400).json({ error: true, message: 'O campo "email" deve ser uma string e é obrigatório!' });
  if (!password || typeof password !== 'string') return res.status(400).json({ error: true, message: 'O campo "password" deve ser uma string e é obrigatório!' });
  if (password < 6) return res.status(400).json({ error: true, message: 'O campo "password" deve ter pelo menos 6 caracteres' })

  const changedUser = await User.change({ id, firstName, lastName, email, password });
  if (!changedUser) return res.status(404).json({ error: true, message: 'Usuário não encontrado!' });
  res.status(201).json(changedUser);
})

app.listen(3001, () => console.log('Listening on port 3001'));