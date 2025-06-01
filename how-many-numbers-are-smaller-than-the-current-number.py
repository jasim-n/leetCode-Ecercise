
def smallerNumbersThanCurrent(nums):
  result = []
  for index, num in enumerate(nums):
    result.append(0)
    for index2,j in enumerate(nums):
        if index==index2:
            continue
        if num > j:
            result[index] += 1
  return result


nums = [8,1,2,2,3]
result = smallerNumbersThanCurrent(nums)
print(result)


def smallerNumbersThanCurrent2(nums):
  sortedArray = sorted(nums)
  result = []
  sortedDict = {}
  for index, num in enumerate(sortedArray):
    if num not in sortedDict:
      sortedDict[num] = index
  for num in nums:
    result.append(sortedDict[num])
  return result

nums2 = [8,1,2,2,3]
result2 = smallerNumbersThanCurrent2(nums2)
print(result2)