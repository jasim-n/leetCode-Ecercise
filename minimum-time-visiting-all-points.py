def minTimeToVisitAllPoints(self, points):
    """
    :type points: List[List[int]]
    :rtype: int
    """
    time=0
    for INDEX in range(len(points)-1):
        x1, y1 = points[INDEX]
        x2, y2 = points[INDEX+1]
        time += max(abs(x2-x1), abs(y2-y1))
    return time