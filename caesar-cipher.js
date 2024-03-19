function caesarCipher(str, num) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  const alphabetArr = alphabet.split('');
  const strArr = str.split('');
  let newStr = '';

  strArr.forEach((char) => {
    if (char === ' ') {
      newStr += ' ';
    } else {
      const index = alphabetArr.indexOf(char);
      const newIndex = (index + num) % 26;
      newStr += alphabetArr[newIndex];
    }
  });

  return newStr;
}

module.exports = caesarCipher;