function translatePigLatin(str) {
//regex for vowel
var vowelRegex = /\b([aeiou]\w*)\b/;
//regex for consonant
var consRegex = /^([^aeiou]+)(\w+)/;
//if vowel found as first character
  //remove vowel
  if(vowelRegex.test(str)){
    return str.replace(vowelRegex,'$1way');
  }
  //add way to the end of the string

//if consonant found as first character
  //remove consonant
  if(consRegex.test(str)){
  var consonant = str.match(consRegex);
  console.log(consonant);
  console.log(str.substring(1)+consonant+'ay');
  console.log(str.replace(consRegex, '$2$1ay'))
  return str.replace(consRegex, '$2$1ay');
  }

if(!vowelRegex.test(str) &&)

  return str;
}

translatePigLatin("consonant");
translatePigLatin("eightway");
