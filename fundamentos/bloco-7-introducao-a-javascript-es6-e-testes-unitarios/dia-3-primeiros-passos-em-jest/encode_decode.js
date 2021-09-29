const encode = string => {
  let returnString = '';
  for (let letter of string) {
    switch (letter) {
    case 'a':
      returnString += '1';
      break;
    case 'e':
      returnString += '2';
      break;
    case 'i':
      returnString += '3';
      break;
    case 'o':
      returnString += '4';
      break;
    case 'u':
      returnString += '5';
      break;
    default:
      returnString += letter;
      break;
    }
  }
  return returnString;
}

const decode = string => {
  let returnString = '';
  for (let letter of string) {
    switch (letter) {
    case '1':
      returnString += 'a';
      break;
    case '2':
      returnString += 'e';
      break;
    case '3':
      returnString += 'i';
      break;
    case '4':
      returnString += 'o';
      break;
    case '5':
      returnString += 'u';
      break;
    default:
      returnString += letter;
      break;
    }
  }
  return returnString;
}

module.exports = { encode, decode };