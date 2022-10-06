const sumAll = function(int1, int2) {
    let sum = 0;

    if(int1 < 0 
       || int2 < 0  
       || isNaN(int1) 
       || isNaN(int2)
       || typeof(int1) == 'string'
       || typeof(int2) == 'string') {
        sum = 'ERROR';

    } else if(int1 > int2) {
        for(i = int1; i >= int2; i--) {
            sum += i;
        };
    } else {
        for(i = int1; i <= int2; i++) {
            sum += i;
        };
    }
    
    return sum;
};

// console.log(sumAll(3, -2));

// Do not edit below this line
module.exports = sumAll;
