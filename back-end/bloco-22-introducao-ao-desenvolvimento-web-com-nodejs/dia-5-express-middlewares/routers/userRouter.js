const router = require('express').Router();

const {
  checkUsername,
  checkEmail,
  checkPassword
} = require('../middlewares/validations');

// Crie uma rota POST /user/register que receba uma requisição que envie username , email e password no body da requisição, onde:
router.post('/register', checkUsername, checkEmail, checkPassword, (_req, res) => {
  // Caso tenha sucesso deve ser retornado uma resposta com o código de status e um JSON com uma mensagem de sucesso, ex: status 201 e { "message": "user created" } ;
  res.status(201).json({ message: "user created" });
})

// Crie uma rota POST /user/login que receba uma requisição que envie email / password no body da requisição e devolva um token como resposta, onde:
router.post('/login', checkEmail, checkPassword, (req, res) => {
  // Caso tenha sucesso deve ser retornado uma resposta com o código de status e um JSON com uma mensagem de sucesso, ex: status 200 e { "token": "86567349784e" } ;
  res.status(200).json({ token: '86567349784e' })
},
(_err, _req, res, _next) => {
  res.status(400).json({ message: "email or password is incorrect" });
})

module.exports = router;