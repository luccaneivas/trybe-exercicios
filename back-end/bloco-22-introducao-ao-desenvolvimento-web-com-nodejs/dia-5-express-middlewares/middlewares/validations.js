// username deve ter mais de 3 caracteres;
function checkUsername(req, _res, next) {
  const { username } = req.body;

  if (!username || username.length < 3) next(err);
  next();
};
// email deve ter o formato email@mail.com;
function checkEmail(req, _res, next) {
  const { email } = req.body;
  
  const regex = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/;
  if (!email || !regex.test(email)) next(err);
  next();
};

// password deve conter no mínimo 4 caracteres e no máximo 8 (todos números);
function checkPassword(req, _res, next) {
  const { password } = req.body;
  const passwordRegex = /^[0-9]*$/;
  
  if (password.length < 3 || password.length > 8 || !password.match(passwordRegex)) next(err);
  next();
}

module.exports = {
  checkUsername,
  checkEmail,
  checkPassword
}