// Inicie os exercícios criando uma aplicação Node.js com os comandos já aprendidos.
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());
// Crie uma rota GET /ping
// Sua rota deve retornar o seguinte JSON: { message: 'pong' }
app.get('/ping', (_req, res) => {
  res.status(200).json({ message: 'pong' });
});
// Crie uma rota POST /hello
// Sua rota deve receber, no body da requisição, o seguinte JSON: { "name": "<nome do usuário>" }
// Sua rota deve retornar o seguinte JSON: { "message": "Hello, <nome do usuário>!" } .
app.post('/hello', (req, res) => {
  const { name } = req.body;

  res.status(200).json({ message: `Hello, ${name}!` })
});
// Crie uma rota POST /greetings
// Sua rota deve receber o seguinte JSON: { "name": "<nome do usuário>", "age": <idade do usuário> } .
// Caso a pessoa usuária tenha idade superior a 17 anos, devolva o JSON { "message": "Hello, <nome do usuário>!" } com o status code 200 - OK .
// Caso a pessoa usuária tenha 17 anos ou menos, devolva o JSON { "message": "Unauthorized" } com o status code 401 - Unauthorized .
app.post('/greetings', (req, res) => {
  const { name, age } = req.body;

  if (age > 17) return res.status(200).json({ message: `Hello, ${name}!` });
  if (age <= 17) return res.status(401).json({ message: 'Unauthorized' });
});
// Crie uma rota PUT /users/:name/:age .
// Sua rota deve retornar o seguinte JSON: { "message": "Seu nome é <name> e você tem <age> anos de idade" } .
app.put('/users/:name/:age', (req, res) => {
  const { name, age } = req.params;

  res.status(200).json({ message: `Seu nome é ${name} e você tem ${age} anos de idade` });
});

// Crie uma API de dados das personagens de Simpsons
// Crie um arquivo chamado simpsons.json e popule com os seguintes dados:
// Utilize o modulo fs do Node para ler/escrever arquivos.
// Caso algum erro ocorra, deve ser retornado um código 500 (Internal Server Error).
// Caso dê tudo certo, a resposta deve voltar com status 200 OK .
// Para testar sua API durante o desenvolvimento, utilize ferramentas que permitem fazer requisições HTTP, como Postman , Insomnia ou httpie .
const fs = require('fs').promises;

async function readSimpson() {
  try {
    const content = await fs.readFile('./simpsons.json', 'utf-8');

    return content;
  } catch (error) {
    return null;
  }
}
async function writeSimpson(data) {
  try {
    const content = await fs.writeFile('./simpsons.json', data);

    return true;
  } catch (error) {
    return null;
  }
}
// Crie um endpoint GET /simpsons
// O endpoint deve retornar um array com todos os simpsons.
app.get('/simpsons', async (req, res) => {
  const token = req.headers.authorization;
  if (token.length !== 16) return res.status(401).json({message: 'Token inválido!'});
  const data = await readSimpson();
  res.status(200).send(data);
});
// Crie um endpoint GET /simpsons/:id
// O endpoint deve retornar o personagem com o id informado na URL da requisição.
// Caso não exista nenhum personagem com o id especificado, retorne o JSON { message: 'simpson not found' } com o status 404 - Not Found .
app.get('/simpsons/:id', async (req, res) => {
  const { id } = req.params;
  const data = JSON.parse(await readSimpson());
  
  const character = data.find((char) => char.id === id);
  if (!character) return res.status(404).json({ message: 'simpson not found' });
  
  res.status(200).send(character);
});
// Crie um endpoint POST /simpsons .
// Este endpoint deve cadastrar novos personagens.
// O corpo da requisição deve receber o seguinte JSON: { id: <id-da-personagem>, name: '<nome-da-personagem>' } .
// Caso já exista uma personagem com o id informado, devolva o JSON { message: 'id already exists' } com o status 409 - Conflict .
// Caso a personagem ainda não exista, adicione-a ao arquivo simpsons.json e devolva um body vazio com o status 204 - No Content .
// Para encerrar a request sem enviar nenhum dado, você pode utilizar res.status(204).end(); .
app.post('/simpsons', async (req, res) => {
  const { id, name } = req.body;
  const data = JSON.parse(await readSimpson());

  const character = data.find((char) => char.id === id);
  if (character) return res.status(409).json({ message: 'id already exists' });

  data.push({ id, name });
  await writeSimpson(JSON.stringify(data));

  res.status(204).end();
});

const crypto = require('crypto');

function generateToken() {
  return crypto.randomBytes(8).toString('hex');
}

app.post('/signup', (req, res) => {
  const { email, password, firstName, phone } = req.body;
  const token = generateToken();

  if (!email || !password || !firstName || !phone) return res.status(401).json({ message: 'missing fields' });
  res.status(200).json({ token })
})

app.listen(3000, () => console.log('Aplicação ouvindo na porta 3000'));