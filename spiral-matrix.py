
def spiralOrder(self, matrix):
    """
    :type matrix: List[List[int]]
    :rtype: List[int]
    """
    result=[]
    top,left=0,0
    bottom,right=len(matrix)-1,len(matrix[0])-1
    while top<=bottom and left<=right:
        # for the first row
        for i in range(left,right+1):
            result.append(matrix[top][i])
        top+=1
        # for the last column
        for i in range(top,bottom+1):
            result.append(matrix[i][right])
        right-=1
        if top<=bottom:
            # for the last row
            for i in range(right,left-1,-1):
                result.append(matrix[bottom][i])
            bottom-=1
        if left<=right:
            # for the first column
            for i in range(bottom,top-1,-1):
                result.append(matrix[i][left])
            left+=1
    return result

# Example usage:
if __name__ == "__main__":
    matrix = [
        [1, 2, 3,12],
        [4, 5, 6,11],
        [7, 8, 9,10]
    ]
    print(spiralOrder(None, matrix))  # Output: [1, 2, 3, 6, 9, 8, 7, 4, 5]