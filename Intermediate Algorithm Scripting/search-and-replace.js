function myReplace(str, before, after) {
  //compute only if before is even in str
  if(str.includes(before)){
    //find index of before
    var index = str.indexOf(before)

    //check if starting character of before is uppercase using regex
    var charAtIndex = str.charAt(index)
    var isUpper = (/[A-Z]/).test(charAtIndex)

    //replace before with after
    str= str.replace(before, after)

    //if character is uppercase, apply that to the replacement
    if(isUpper){
      var arr = str.split('');
      arr[index] = arr[index].toUpperCase();
      str = arr.join('');
      console.log();
      
    }
    return str;

  
  }

}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");
myReplace("He is Sleeping on the couch", "Sleeping", "sitting");