var smallerNumbersThanCurrent = function(nums) {
    const result=[]
    for (let i = 0; i < nums.length; i++){
        result.push(0); // Initialize the count for each number
        for (let j = 0; j < nums.length; j++) {
            if (i == j) continue; // Skip comparison with itself
            if (nums[i] > nums[j]) {
                result[i] += 1;
            }
        }
    }
    return result
};

// Example usage:
console.log(smallerNumbersThanCurrent([8,1,2,2,3])); // Output: [4,0,1,1,3]



var smallerNumbersThanCurrent2 = function(nums) {
    const  map= new Map();
    const sorted=[...nums].sort((a,b)=>a-b); // Create a sorted copy of nums
sorted.forEach((num,index)=>{
    map.has(num) || map.set(num, index); // Store the index of the first occurrence of each number
})
    return nums.map(num => map.get(num)); // Map each number to its index in the sorted array


}

// Example usage:
console.log(smallerNumbersThanCurrent2([8,1,2,2,3])); // Output: [4,0,1,1,3]

