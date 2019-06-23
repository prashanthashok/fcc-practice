function quickSort(array) {
  // change code below this line
  let pivotPosition = array.length - 1;
  var sortedArray = sort(0, pivotPosition, array.slice());

  // change code above this line
  return sortedArray;
}

function sort(left, right, array) {
  if (left >= right) return;

  let pivotPosition = partition(left, right, array);
  sort(left, pivotPosition - 1, array);
  sort(pivotPosition + 1, right, array);
  return array;
}

function partition(left, right, array) {
  let pivot = array[right];
  let pIndex = left;
  for (let i = left; i <=right - 1; i++) {
    if (array[i] <= pivot) {
      [array[i], array[pIndex]] = [array[pIndex], array[i]];
      pIndex++;
    }
  }
  [array[right], array[pIndex]] = [array[pIndex], array[right]];

  return pIndex;
}
// test array:
var array = [1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92];
console.log(quickSort(array));