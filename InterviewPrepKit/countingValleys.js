function countingValleys(steps, path) {
    // Write your code here
    // first line is string/ steps length
    // the second is the string describing the path (UDDU)
    // Count the number of valleys (below sea level)
    let currentLevel = 0;
    let valleys = 0;
    let mountains = 0;
    const hikeArr = path.split('');
    
    for ( let step of hikeArr ){
        
            if(step === 'D'){
                console.log('down')
                currentLevel--;
                if(currentLevel === 0){
                    mountains++;
                } ;
            }else if(step === 'U'){
                currentLevel++
                if(currentLevel === 0){
                    valleys++;
                }
            }    
    }

    console.log(valleys)
    return valleys;
}


countingValleys(8, 'DUDUDUDU')

