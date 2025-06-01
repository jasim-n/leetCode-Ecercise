var minTimeToVisitAllPoints = function(points) {
 //MAX DIST
//    Key: The time to visit from point (x1, x2) and (y1, y2) is given by
//          min(dx, dy) + abs(dx - dy);
//          where, dx = abs(x2-x1) , dy = abs(y2-y1)
// HERE WE WILL USE max(abs(y2-y1), abs(x2-x1)) to calculate the time
 
    let totalTime=0
    let res=0;
   for(let i=0; i<points.length-1; i++){
 res+=Math.max(Math.abs(points[i+1][0]-points[i][0]), Math.abs(points[i+1][1]-points[i][1]));

    }
 return res;
};

// Example usage:
console.log(minTimeToVisitAllPoints([[1,1],[3,4],[-1,0]])); // Output: 7    