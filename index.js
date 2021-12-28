const sum = require("../sum-from-a-to-b-test-js");

function sumItems(array) {
  // Sum all the numbers in the array
 
  let sum = 0;
  for (let i of array) {
  if (!Array.isArray(i)) {
    // console.log(sum);
       sum = sum + i;
    } else {
      sum = sum + sumItems(i);
    }
  }
  return sum;
  
}

module.exports = sumItems;