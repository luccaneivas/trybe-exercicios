// const express = require('express');
// const bodyParser = require('body-parser');

// const app = express();
// app.use(bodyParser.json());

// Atividade 1
// const routerUser = require('./routers/userRouter');
// app.use('/user', routerUser);

// // Para todos os casos não atendidos acima deve ser retornado o código de status e um JSON com uma mensagem de erro, ex: status 400 e { "message": "invalid data" } ;
// app.use(function (_err, _req, res, _next) {
//   res.status(400).json({ message: 'Invalid data!' });
// });

// app.listen(3001, () => console.log('rodando na porta 3001!'));

// ######################################################################################################################

// Atividade 2:
// Crie uma rota GET /btc/price que receba uma requisição com um token na chave Authorization do headers da requisição e verifique se ele está correto, onde:
// O token deve ser uma string de 12 caracteres contendo letras e/ou números.
// Para todos os casos não atendidos acima deve ser retornado o código de status e um JSON com uma mensagem de erro, ex: status 401 e { "message": "invalid token" } ;
// Caso tenha sucesso deve ser feito um fetch em uma API externa de sua preferência e retorne os dados da API como resposta;
// Dicas: - Sugestão de API ( https://api.coindesk.com/v1/bpi/currentprice/BTC.json);
//- O token será passado pelo header da seguinte forma: authorization: 86567349784e;
// - Utilize middlewares para validar o token;
//- Para fazer uma requisição a uma API externa utilizer o NODE-FETCH ou AXIOS, parecido com que vimos em Front-end;
// const express = require('express');
// const axios = require('axios');

// const app = express();

// app.get('/btc/price', async (req, res) => {
//   const { authorization } = req.headers;

//   if (!authorization || typeof authorization !== 'string' || authorization.length !== 12) return res.status(401).json({ message: 'invalid token' });
//   const response =
//     await axios.get('https://api.coindesk.com/v1/bpi/currentprice/BTC.json');
//   res.status(200).json(response.data);
// })

// app.listen(3001);

// #################################################################################################################

// Atividade 3:
// Crie uma rota GET /posts/:id que receba uma requisição com um id como param route , verifique existência do post com aquele id, onde:
// O id deve existir;
// Para todos os casos não atendidos acima deve ser retornado o código de status e um JSON com uma mensagem de erro, ex: status 404 e { "message": "post not found" } ;
// Caso tenha sucesso deve ser retornado uma resposta com o código de status e um JSON com as informações do respectivo post;
// Crie uma rota GET /posts que deve trazer todos os posts cadastrados, onde:
// Se não existir posts cadastrados retorne um array vazio e um status code, ex: status 200 e { "posts": [] } ;
// Se existir posts cadastrados retorne um array com os posts e um status code;
// Faça um middleware de erro. Caso tenha sido requisitada uma rota inexistente deve ser retornado o código de status e um JSON , ex: status 404 e { "message": "Opsss, route not found!" }
// Dicas: separe suas rotas em arquivos e utilize middleware de erro para capturar uma rota inexistente.
// index.js
// const express = require('express');
// const bodyParser = require('body-parser');
// const postRouter = require('./routers/postRouter');
// const errors = require('./middlewares/routerNotFound');
// const PORT = 3000;

// const app = express();
// app.use(bodyParser.json());

// app.use('/posts', postRouter);

// app.use('*', (_req, _res, next) => next({ statusCode: 404, message: 'Opsss router not found' }));
// app.use(errors.routerNotFound);

// app.listen(PORT, () => console.log('Run server http://localhost:3000'));

// ##################################################################################################################

// Atividade 4:
// Crie uma rota POST /teams que receba uma requisição que envie name , initials , country e league no body da requisção, onde:
// name deve ter mais de 5 caracteres;
// initials deve conter no máximo 3 caracteres em caixa alta;
// country deve ter mais de 3 caracteres;
// league este campo é opcional;
// Para todos os casos não atendidos acima deve ser retornado o código de status e um JSON com uma mensagem de erro, ex: status 400 e { "message": "invalid data" } ;
// Caso tenha sucesso deve ser gravado em um arquivo o dado recebido e retornado uma resposta com o código de status e um JSON com as informações do time criado;
// Na rota GET /teams deve trazer todos os times cadastrados, onde:
// Se não existir times cadastrados retorne um array vazio e um status code, ex: status 200 e { "teams": [] } ;
// Se existir times cadastrados retorne um array com os times e um status code;
// Dicas: separe suas rotas em arquivos e para gravar/ler dados do arquivo, utilize o módulo FS do Node.js (Não esqueça de criar o arquivo teams.json na raiz do projeto)
// middlewares/validations.js
const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs').promises;

const app = express();
app.use(bodyParser.json());

// validations
function checkName(req, _res, next) {
  const { name } = req.body;

  if (!name || name.length < 6) return next({ statusCode: 400, message: 'name is invalid' });
  return next();
}
function checkInitials(req, _res, next) {
  const { initials } = req.body;

  if (!initials || initials.length > 3) return next({ statusCode: 400, message: 'initials are invalid' });
  return next();
}
function checkCountry(req, _res, next) {
  const { country } = req.body;

  if (!country || country.length < 4) return next({ statusCode: 400, message: 'country is invalid' });
  return next();
}

async function readFile(path) {
  try {
    const data = await fs.readFile(path, 'utf-8');
    
    if (!data) return [];
    return JSON.parse(data);
  } catch (err) {
    return null;
  }
}

async function writeFile(path, content) {
  try {
    const data = await readFile(path);

    data.push(content);

    await fs.writeFile(path, JSON.stringify(data));
    return content;
  } catch (err) {
    return null;
  }
}

app.get('/teams', async (req, res) => {
  const pathName = 'teams.json';

  const data = await readFile(pathName);
  return res.status(200).json(data);
})

app.post('/teams', checkName, checkInitials, checkCountry, async (req, res, next) => {
  const team = { ...req.body, initials: req.body.initials.toUpperCase() };
  const pathName = 'teams.json';

  const operation = await writeFile(pathName, team);

  if (!operation) return next({ statusCode: 400, message: 'oops... some error ocurred' })

  return res.status(200).json(team);
})

app.use((err, _req, res, _next) =>
res.status(err.statusCode).json({ message: err.message }));

app.listen(3001, () => console.log('Ouvindo na porta 3001!'));