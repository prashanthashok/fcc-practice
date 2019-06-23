function mergeSort(array) {
    // change code below this line
  
    if(array.length == 1) return array;
  
     let middle = array.length/2;
     let leftArray = array.slice(0, middle);
     let rightArray = array.slice(middle, array.length);
  
     let left = mergeSort(leftArray);
     let right = mergeSort(rightArray);
  
    return merge(left,right);
  
    // change code above this line
  }
  
  function merge(left, right){
      let i = 0;
      let j = 0;
      let k = 0;
      let tempArray =[];
      while(i<left.length && j<right.length){
        if(left[i]<right[j]){
          tempArray[k] = left[i];
          i++;
          k++;
        }
        else{
          tempArray[k]=right[j];
          j++;
          k++;
        }
      }
      while(i<left.length){
        tempArray[k]=left[i];
        k++;
        i++;
      }
      while(j<right.length){
        tempArray[k]=right[j];
        k++;
        j++;
      }
      return tempArray;
    }
  
  // test array:
  // [1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]