def twoSum(nums, target):
    """
    Find two numbers in the list that add up to the target.

    :param nums: List of integers
    :param target: Target sum
    :return: Tuple of the two numbers that add up to the target, or None if no such pair exists
    """
    for i in range(len(nums)):
        for j in range(i+1, len(nums)):
            if nums[i] + nums[j] == target:
                return (i, j)


print("Two numbers that add up to the target:", twoSum([2, 7, 11,4,2, 15], 4))


def test_twoSum(nums, target):
    num_map = {} 
    for i, num in enumerate(nums):
        complement = target - num
        if complement in num_map:
            return (num_map[complement], i)
        num_map[num] = i

print("Two numbers that add up to the target:", test_twoSum([2, 7, 11, 4, 2, 15], 4))