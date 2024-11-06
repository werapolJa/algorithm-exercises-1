function findOdd(nums) {
  let sum = 0
  const newarray = []
  for (let i = 0; i < nums.length; i++) {
    console.log(nums[i]);
    if(nums[i] % 2 === 0){
      sum = nums[i];
    }
   

  }

  return sum
}

let result1 = findOdd([0]);
let result2 = findOdd([1, 1, 2]);
let result3 = findOdd([1, 2, 2, 3, 3, 4, 3, 3, 1]);

console.log(result1); // 0
console.log(result2); // 2
console.log(result3); // 4
