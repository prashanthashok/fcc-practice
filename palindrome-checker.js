function palindrome(str) {
  //only extract alphanumeric characters
  var arr = str.match(/[a-z0-9]+/ig);

  console.log(arr)
  //join all characters and convert to lowercase
  var orig = arr.join('').toLowerCase();

  //reverse string
  var reverse = orig.split('').reverse().join('');

  //If true -> Palindrome
  if(orig === reverse) return true;
  else return false;
}



palindrome("1 eye for of 1 eye.")