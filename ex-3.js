function singleNumber(nums) {
  let num1 = nums[0]
  let sum = 0
  for (let i = 0; i < nums.length; i++) {
    console.log(nums[i]);
    if(nums[i] === nums[0]){
      sum = nums[i];
    }else{
      nums[i];
    }
  }
 return sum

  // Start coding here
}

let result1 = singleNumber([2, 2, 1]);
let result2 = singleNumber([4, 1, 2, 1, 2]);
let result3 = singleNumber([10]);

console.log(result1); // 1
console.log(result2); // 4
console.log(result3); // 10
console.log(typeof result1); // "number"
