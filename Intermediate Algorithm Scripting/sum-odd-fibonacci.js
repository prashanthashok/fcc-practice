function sumFibs(num) {
  var a = 1;
  var b = 1;
  var arr = [];
  arr.push(a);
  arr.push(b);
  var sum=0;

  //add the next fibonacci number to the front of the array
  //and loop until sum is less than or equal to input - num

  while((sum=arr[0]+arr[1])<=num){
    arr.unshift(sum);
  }

  
   var sumz = arr.filter(x=> x%2!=0).reduce((a,c) => a+c);
   console.log(sumz);

  return sumz;
}

sumFibs(4);
sumFibs(10);
sumFibs(20);
sumFibs(1000);
sumFibs(75024);