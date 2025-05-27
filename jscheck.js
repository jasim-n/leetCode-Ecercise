
// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

 

var twoSum = function(nums, target) {
    for(let i=0;i<nums.length-1;i++){
        for(let k=1;k<nums.length-1;k++){
            if (k!=i ) {
            if(nums[i]+nums[k]==target){
            console.log(k,i)
            return [k,i]}
            }
        }
    }
};

var twoSum2 = function (nums, target) {
    const hash = {};            // Step 1: Create an empty object (hash map)
    let n = nums.length;

    for (let i = 0; i < n; i++) {
        const complement = target - nums[i];  // Step 2: What number do we need to find?

        if (complement in hash) {            // Step 3: Check if that number already exists
            return [hash[complement], i];    // Found the pair → return their indices
        }

        hash[nums[i]] = i;                   // Step 4: Store current number and its index
    }

    return []; // No pair found
};

twoSum([2,7,11,15],9)



/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    const hash ={}
    for (let i=0;i<nums.length;i++){
        if (nums[i] in hash)
        return true
        hash[nums[i]]=nums[i]
    }
    return false
    
};
containsDuplicate([1,2,3,1])

var containsDuplicate = function(nums) {
    const seen = new Set();
    for (let num of nums) {
        if (seen.has(num)) return true;
        seen.add(num);
    }
    return false;
};

/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    //  n * (n + 1) / 2
    let n=nums.length
    let missing=0
    let sum=  n * (n + 1) / 2

    for (let i=0;i<nums.length;i++){
missing+=nums[i]
    }
    return sum-missing

};