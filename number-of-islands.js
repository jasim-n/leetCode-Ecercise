
var numIslands = function(grid) {
  
    let count = 0;
    for (let i = 0; i < grid.length; i++) {

        for( let j = 0; j < grid[i].length; j++) {
            if (grid[i][j] === '1') {

                count++;
                // Call the dfs function to mark all connected '1's as '0's
                dfs(grid, i, j);
            }
        }

    }
};

function dfs(grid, i, j) {

if(i<0 || i>=grid.length || j<0 || j>=grid[i].length || grid[i][j] === '0') {
    return;}

    grid[i][j] = '0'; // Mark the cell as visited
    dfs(grid, i + 1, j); // Down
    dfs(grid, i - 1, j); // Up
    dfs(grid, i, j + 1); // Right
    dfs(grid, i, j - 1); // Left

}