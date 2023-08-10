const isPalindrome = (string) =>
  string.replaceAll(' ', '').toLowerCase().split('').reverse().join('');

isPalindrome('топот');
