function bubbleSort(array) {
  // change code below this line
  
  //If empty array, return
  if(array.length <=0) return;

  //Index to track the "bubble", initially set to the end of the array
  var unsortedIndex = array.length-1;

  //Initialize sorted = false;
  var sorted = false;

  //To calculate steps taken
  var steps = 0;

  //While array is not sorted
  while(!sorted){
    //Preliminarily set sorted = true
    sorted = true;
    //for each index until unsortedIndex, do the swap
    for(let i=0;i<=unsortedIndex;i++){
      steps++;
      //if current > next, swap
      if(array[i]>array[i+1]) {
        sorted=false;
        var temp = array[i];
        array[i]=array[i+1];
        array[i+1]=temp;
      }
    }

    //decrement bubble index
    unsortedIndex--;
  }
  console.log('Steps taken ' + steps);
  console.log(array);
  // change code above this line
  return array;
}

// test array:
var arr = [1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92];
bubbleSort(arr)