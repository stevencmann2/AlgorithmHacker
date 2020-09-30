function staircase(n) {
    
    for (let row = 0; row < n; row++) {
        let stair = ''
        for (let column = n - 1; column >= 0; column--){
            if (column <= row) {
                stair += '#';
                }else{
                stair+= ' '
                }
        }
        console.log(stair);
    }
    
}

staircase(7)
/* 

      #
     ##
    ###
   ####
  #####
 ######
####### 

*/




