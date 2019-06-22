function selectionSort(array) {
  // change code below this line

  //if empty, return
  if(array.length === 0) return;

  //iterate through the entire array
  for(let i=0;i<array.length; i++){
  var leastIndex=i;
    //second loop to identify leastIndex
    for(let j=i+1;j<array.length;j++){
      
      if(array[j]<array[leastIndex]){
        leastIndex=j;
      }
    }

    //swap
    if(leastIndex!=i){
      var temp=array[i];
      array[i] = array[leastIndex];
      array[leastIndex] = temp;
    }
  }
  // change code above this line
  return array;
}

// test array:
// [1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]