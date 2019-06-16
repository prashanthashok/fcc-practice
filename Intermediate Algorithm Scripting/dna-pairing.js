function pairElement(str) {
  
  //create DNA master list
  var DNA = {
    A:"T", T:"A", G:"C", C:"G"
  }

  //test DNA master list
  var prop = "A";
  console.log(DNA[prop]);

  //split incoming string
  var arr = str.split("");
  var DNAPairs = [];
  console.log(arr);
  
  //for each DNA in incoming string, 
  //find the corresponding pair from DNA master list
  //and push it to new Array
  for(let i =0;i<arr.length; i++){
    var newArr = [];
    newArr.push(arr[i]);
    newArr.push(DNA[arr[i]]);
    console.log(newArr)
    DNAPairs.push(newArr);
  }
  console.log(DNAPairs)
  return DNAPairs;
}

pairElement("GCG");