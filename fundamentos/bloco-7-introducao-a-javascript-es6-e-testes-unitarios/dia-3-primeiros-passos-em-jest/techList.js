const techList = (array, name) => {
  let sortedArray = array.sort();
  let returnArray = [];
  if (array.length === 0) {
    return 'Vazio!';
  } else {
    for (let item of sortedArray) {
      let object = {
        tech: item,
        name,
      };
      returnArray.push(object);
    }
    return returnArray;
  }
}

module.exports = techList;