//Given time in 12-hour AM/PM format, convert it to military (24-hour) time.

// Note: - 12:00:00AM on a 12-hour clock is 00:00:00 on a 24-hour clock.
// - 12:00:00PM on a 12-hour clock is 12:00:00 on a 24-hour clock.

// example:
// s = '12:01:00:PM'
 // returns '12:01:00'
// s ='12:01:00AM'
 //returns '00:01:00'


function timeConversion(s) {
    /*
     * Write your code here.
     */

    if (s.includes('AM')){
        let digits = s.slice(0,8).split(':');
             if(digits[0] === '12'){
                    digits.splice(0, 1, '00')
                }
       return digits.join(':')
     
    }else{
        let digits = s.slice(0,8).split(':');
            if(digits[0]!== '12'){
                let hour = (parseInt(digits[0]) + 12).toString();
                digits.splice(0, 1, hour);
                return digits.join(':')
            }else{
                return digits.join(':')
            }   
        }

}

timeConversion('04:01:00PM');
timeConversion('01:01:00AM')
