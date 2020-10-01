// You are in charge of the cake for a child's birthday. 
// You have decided the cake will have one candle for each year of their total age. 
// They will only be able to blow out the tallest of the candles. 
//Count how many candles are tallest. Return frequency

// i.e. candles = [4, 4, 1, 3]
// max candles height = 4, so return 2 becuase there are 2 cadles at that height 

function birthdayCakeCandles(candles) {
    // Write your code here
    // sort by height
    //  return frequency of largest

    const desc = candles.sort(function(a, b){return b-a});
    const tallestCandle = desc[0];
    const count = desc.filter(element => element === tallestCandle).length
    return count;
    

}

birthdayCakeCandles([4, 4, 4, 4, 1, 3]);