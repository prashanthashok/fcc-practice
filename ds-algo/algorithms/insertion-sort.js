function insertionSort(array) {
    // change code below this line
    if(array.length === 0) return 
    
    // //Let sorted array = array[0] and unsorted array = array[1,]
    // //Traverse through the unsorted array
    // for(let i=1; i<array.length; i++){
    //   //For each element to the left of the unsorted array 
    //   //i.e., in the sorted array
    //   for(let j=0; j<i; j++){
    //     if(array[i]<array[j]){
    //       swap(i, j);
    //     }
    //   }
    // }
  
  // function swap(i,j){
  //     var temp = array[j];
  //     array[j] = array[i];
  //     array[i] = temp;
  //   }
  
    for(let i=1; i<array.length; i++){
      let curr = array[i];
      for(var j=i-1; j>=0 && array[j] > curr; j--){
        array[j+1] = array[j];
      }
      array[j+1] = curr;
    }
    
    console.log(array);
    // change code above this line
    return array;
  }
  
  
  
  // test array:
  var arr = [1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92];
  insertionSort(arr);