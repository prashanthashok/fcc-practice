function convertHTML(str) {
    // &colon;&rpar;
    var arr = str.split('');
    var newArr = [];
    for(let i =0;i<arr.length;i++){
      switch(arr[i]){
        case '&':
        newArr.push('&amp;');
        break;
        case '<':
        newArr.push('&lt;');
        break;
        case '>':
        newArr.push('&gt;');
        break;
        case '"':
        newArr.push('&quot;');
        break;
        case '\'':
        newArr.push('&apos;');
        break;
        default:
        newArr.push(arr[i]);
        break;
      }
    }
    console.log(newArr.join(''))
    return newArr.join('');
  }
  
  convertHTML("Dolce & Gabbana");
  convertHTML('Stuff in "quotation marks"')