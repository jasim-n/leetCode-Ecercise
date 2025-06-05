// first row ned to rpint as it array[0] 
// then last column that would be array[1-length][length-1]


let spiralOrder = function(matrix, result = []) {
    if (matrix.length === 0) return result;

    // Step 1: Top row (left to right)
    result.push(...matrix.shift());

    // Step 2: Right column (top to bottom)
    for (let i = 0; i < matrix.length; i++) {
        if (matrix[i].length > 0) {
            result.push(matrix[i].pop());
        }
    }

    // Step 3: Bottom row (right to left)
    if (matrix.length > 0) {
        result.push(...(matrix.pop() || []).reverse());
    }

    // Step 4: Left column (bottom to top)
    for (let i = matrix.length - 1; i >= 0; i--) {
        if (matrix[i].length > 0) {
            result.push(matrix[i].shift());
        }
    }

    // Recursive call
    return spiralOrder(matrix, result);
}

// Example usage:
console.log(spiralOrder([[1],[2],[3],[4],[5],[6],[7],[8],[9],[10]])); // Output: [1, 2, 3, 6, 9, 8, 7, 4, 5]