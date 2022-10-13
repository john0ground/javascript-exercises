const fibonacci = function(member) {
    
    if (typeof(member) == 'string') {
        member = Number(member);
    } else if (member < 0) {return 'OOPS';}
    
    series = [1, 1];
    for (i=0; i < 30; i++) {
        n = (series[series.length - 1]) + (series[series.length - 2]);
        series.push(n);
    }

    return series[member - 1]
};

// Do not edit below this line
module.exports = fibonacci;
