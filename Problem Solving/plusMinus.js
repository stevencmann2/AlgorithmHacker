
function plusMinus(arr) {
    // calculate the ratio of positive, negative and zero numbers in an array
    // calculate in decimal form to 6 decimal places
    // print each ratio on a new line
    let posCount = 0;
    let negCount = 0;
    let zeroCount = 0;
    
    
    for (let i = 0; i < arr.length; i++){
    
        if(arr[i] === 0){
            zeroCount++;
        }else if (Math.sign(arr[i]) === 1){
            posCount++;
        }else{
            negCount++;
        }
     }
        let posRatio = (posCount/arr.length).toFixed(6);
        let negRatio = (negCount/arr.length).toFixed(6);
        let zeroRatio = (zeroCount/arr.length).toFixed(6);
        console.log(posRatio +'\n' + negRatio +'\n'+ zeroRatio);
    
    };