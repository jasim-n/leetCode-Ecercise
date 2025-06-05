def numIslands(self, grid):
        """
        :type grid: List[List[str]]
        :rtype: int
        """
        count =0
        for i in range(len(grid)):
            for j in range(len(grid[0])):
                if grid[i][j] == '1':
                    count += 1
                    self.dfs(grid,i,j)
        return count
def dfs(self, grid, i, j):
    if i<0 or i>=len(grid) or j<0 or j>=len(grid[0]) or grid[i][j] != '1':
        return
    grid[i][j] = '0'  # Mark the cell as visited
    self.dfs(grid, i+1, j)  # Down
    self.dfs(grid, i-1, j)  # Up
    self.dfs(grid, i, j+1)  # Right
    self.dfs(grid, i, j-1)  # Left