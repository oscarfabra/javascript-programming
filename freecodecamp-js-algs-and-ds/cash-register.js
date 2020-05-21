function checkCashRegister(price, cash, cid) {
  let result = {};
  let change = cash - price;
  let cashInDrawer = cid
    .reduce( (sum, arr) => sum + arr[1], 0)
    .toFixed(2);
  if(change == cashInDrawer){
    result.status = "CLOSED";
    result.change = cid.slice(0);
  } else if(change > cashInDrawer){
    result.status = "INSUFFICIENT_FUNDS";
    result.change = [];
  } else {  // change < cashInDrawer
    let changeArr = [];
    let drawerArr = [
      ["ONE HUNDRED", 100, cid[8][1]],
      ["TWENTY", 20, cid[7][1]],
      ["TEN", 10, cid[6][1]],
      ["FIVE", 5, cid[5][1]],
      ["ONE", 1, cid[4][1]],
      ["QUARTER", 0.25, cid[3][1]],
      ["DIME", 0.10, cid[2][1]],
      ["NICKEL", 0.05, cid[1][1]],
      ["PENNY", 0.01, cid[0][1]],
    ];
    // console.log(drawerArr);
    let drawn = 0;
    let i = 0;
    while(drawn < change && i < drawerArr.length){
      let unit = Number(drawerArr[i][1].toFixed(2));
      let unitAmount = Number(drawerArr[i][2].toFixed(2));
      // console.log(unit, unitAmount, change, drawn);
      while(unitAmount > 0 
        && (drawn + unit).toFixed(2) <= change ) {
        drawn += Number(unit.toFixed(2));
        unitAmount -= Number(unit.toFixed(2));
        // console.log((drawn + unit).toFixed(2), change);
      }
      drawn = Number(drawn.toFixed(2));
      // console.log(unit, unitAmount, change, drawn);
      // console.log();
      if(drawerArr[i][2] - unitAmount != 0) {
        changeArr.push([drawerArr[i][0], 
          Number((drawerArr[i][2] - unitAmount).toFixed(2))]);
      }
      i++;
    }
    // console.log(changeArr, drawn, change);
    if(drawn != change) {
      result.status = "INSUFFICIENT_FUNDS";
      result.change = [];
    } else {
      result.status = "OPEN";
      result.change = changeArr.slice(0);
    }
  }
  return result;
}

console.log(checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));
console.log();
console.log();
console.log();
console.log(checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));