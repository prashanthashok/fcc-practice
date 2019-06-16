function checkCashRegister(price, cash, cid) {
  var change;
  console.log(cid[0][1])
  var numPenny = cid[0][1]/0.01;
  var numNickel = cid[1][1]/0.05;
  var numDime = cid[2][1]/0.1;
  var numQuarter = cid[3][1]/0.25;
  var numDollar = cid[4][1]/1;
  var numFive = cid[5][1]/5;
  var numTen = cid[6][1]/10;
  var numTwenty = cid[7][1]/20;
  var numHundred = cid[8][1]/100;
  console.log("Penny " +numPenny);
  console.log("Nickel " +numNickel);
  console.log("Dime " +numDime);
  console.log("Quarter " +numQuarter);
  console.log("Dollar " +numDollar);
  console.log("Five Dollars " +numFive);
  console.log("Ten Dollars " +numTen);
  console.log("Twenty Dollars " +numTwenty);
  console.log("Hundred Dollars " +numHundred);
  
  
  // Here is your change, ma'am.
  return change;
}

// Example cash-in-drawer array:
// [["PENNY", 1.01],
// ["NICKEL", 2.05],
// ["DIME", 3.1],
// ["QUARTER", 4.25],
// ["ONE", 90],
// ["FIVE", 55],
// ["TEN", 20],
// ["TWENTY", 60],
// ["ONE HUNDRED", 100]]

checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);