/*Given a square matrix, calculate the absolute difference between the sums of its diagonals.

For example, the square matrix  is shown below:

1 2 3
4 5 6
9 8 9

1 + 5 + 9 = 15 
3 + 5 + 9 = 17

| 15 -17 | = 2



1 2 3 4
4 5 6 5
9 8 9 6 
9 8 9 6 
*/

/*

 * Complete the 'diagonalDifference' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts 2D_INTEGER_ARRAY arr as parameter.
 */

function diagonalDifference(arr) {
    // Write your code here
    // arr is going to be a square with length n*n
    //check if arr is square first
    // make 2D table of array i.e. [  [1, 2, 3],
                            //        [4. 5. 6],
                              //      [7, 8, 8]  ]

   const squareRoot  = Math.sqrt(arr.length)
    if (!Number.isInteger(squareRoot)){
        return console.log('the input is not the appropriate length to make a square');
    }
        // helper function to create 2D array 
        const matrix = tableArray(arr, squareRoot);
        let ltoR = []; // array to push values from left to right
        let rtoL = []; // array to push values from right to left
    
    for (let r = 0 ; r < matrix.length; r++){
        // results for tef to right 
        let leftResults = matrix[r][r];
        // results for right to left diagonal 
        let rightResults = matrix[r][matrix.length - r - 1];
       //push results into new arrays
        ltoR.push(leftResults);
        rtoL.push(rightResults);
    }
    // reduce sums
    console.log(ltoR)
    const leftSum = ltoR.reduce((accumulator, currentValue ) => {
        return accumulator + currentValue;
    },0);

    console.log(rtoL)
    const rightSum = rtoL.reduce((accumulator, currentValue ) => {
        return accumulator + currentValue;
    },0);

    return Math.abs(leftSum - rightSum);
    
};

// HELPER FUNCTION 

function tableArray(array, size) {
    // array to return tabled array
    const resultsArray = []; 
    //current index of loop   
    let index = 0;

    while (index < array.length) {
                        // slice array start and including curernt index 
                        // and ending on exclusive to the size
        resultsArray.push(array.slice(index, index + size));
        // increment index by seize variable for next iteration of loop
        index += size;

    }

    // return results array 
    return resultsArray;

};

// diagonalDifference([1, 2, 3, 4, 5, 6, 9, 8, 9]); // true
// diagonalDifference([1, 2, 3, 4]) //true
// diagonalDifference([1, 2, 3, 4, 5]) // false
// diagonalDifference([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]) //true
