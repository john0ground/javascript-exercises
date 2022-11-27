const fibonacci = function(num) {
    let array = [1, 1];

    if(num === 1) return 1;
    if(num < 0) return "OOPS";

    for(let i = 1; i < num; i++) {
        const newNum = array[i] + array[array.length - 2];
        array.push(newNum);
    }

    return array[num - 1];
}

// Do not edit below this line
module.exports = fibonacci;