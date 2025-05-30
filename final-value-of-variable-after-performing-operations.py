
def finalValueAfterOperations(self, operations):
        """
        :type operations: List[str]
        :rtype: int
        """
        x=0
        for i in operations:
            if i[1] == '+':
                x += 1
            else:
                x -= 1
        return x

# Example usage
operations = ["--X", "X++", "X++"]
result = finalValueAfterOperations(None, operations)
print("Final value of variable after performing operations:", result)

def finalValueAfterOperations2(operations):
    """
    :type operations: List[str]
    :rtype: int
    """
    return sum(1 if op[1] == '+' else -1 for op in operations)

def finalValueAfterOperations3(operations):
    """
    :type operations: List[str]
    :rtype: int
    """
    x=0
    for op in operations:
        if op[1] == '+':
            x += 1
        else:
            x -= 1
    return x

# Example usage for the second function
result2 = finalValueAfterOperations2(operations)
print("Final value of variable after performing operations (using the second function):", result2)

# Example usage for the third function
result3 = finalValueAfterOperations3(operations)
print("Final value of variable after performing operations (using the third function):", result3)
# Note: The third function will raise an error because 'x' is not defined before use.
# To fix the third function, we need to initialize 'x' before using it. 