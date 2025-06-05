
def maxProfit(prices):
    """
    This function calculates the maximum profit that can be achieved by buying and selling a stock.
    
    :param prices: List[int] - A list of integers representing the stock prices on different days.
    :return: int - The maximum profit that can be achieved.
    """
    buy=prices[0]
    profit=0
    for i in range(1,len(prices)):
        if prices[i]<buy:
            buy=prices[i]
        elif prices[i]-buy>profit:
            profit=prices[i]-buy
    return profit