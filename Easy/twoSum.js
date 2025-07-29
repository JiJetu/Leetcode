var twoSum = function (nums, target) {
  const hashMap = {};

  for (let i = 0; i < nums.length; i++) {
    const comp = target - nums[i];

    if (comp in hashMap) {
      return [
        [hashMap[comp], i],
        [comp, nums[i]],
      ];
    }
    hashMap[nums[i]] = i;
    console.log(hashMap);
  }
  return [];
};

console.log("ans => ", twoSum([-11, 3, 20, 6, 4, 5, 7, 2], 9));
// ans =>  { '-11': 0 }
// { '3': 1, '-11': 0 }
// ans =>  [ [ 0, 2 ], [ -11, 20 ] ]
