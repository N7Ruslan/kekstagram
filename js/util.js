function checkStringLength(string, maxLength) {
  return string.length <= maxLength;
}

checkStringLength('проверяемая строка', 20);

const isPalindrome = (string) => {
  string.replaceAll(' ', '').toLowerCase().split('').reverse().join('');
};

isPalindrome('топот');

const getNumberFromString = (value) => {
  if (typeof value === 'number') {
    return Math.abs(Number(String(value).replace('.', '')));
  }
  value = value.replaceAll(' ', '').split('');
  let newString = '';
  for (let i = 0; i < value.length; i++) {
    if (!isNaN(Number(value[i]))) {
      newString += value[i];
    }
  }
  while (newString.startsWith('0', 0)) {
    newString = newString.replace('0', '');
  }
  if (newString.length === 0) {
    return NaN;
  }
  return +newString;
};

getNumberFromString('1 кефир, 0.5 батона');

/* Второй вариант решения через рег.выражения
const getNumberFromString = (value) => {
  if (typeof value === 'number') {
    return Math.abs(Number(String(value).replace('.', '')));
  }
  value = value.replaceAll(/[\D]+/gi, '');
  while (value.length > 0 && value.startsWith('0', 0)) {
    value = value.replace('0', '');
  }
  if (value.length === 0) {
    return NaN;
  }
  return +value;
};

getNumberFromString('qwe123 a3');
*/

const creatString = (firstString, lengthString, secondString) => {
  while (firstString.length < lengthString) {
    firstString = secondString.slice(0, lengthString - firstString.length) + firstString;
  }

  return firstString;
};

creatString('1', 2, '0');
