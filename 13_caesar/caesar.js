const caesar = function(...args) {
    const str = args[0].split('');
    const shift = args[1];

    const newStr = str.map((item) => {
        let num = item.charCodeAt(item) + shift;
        return String.fromCharCode(num);
    });
    return newStr.join('');
    
    // for (let i = 0; i < str.length; i++) {
    //     if (str[i].match(/[!,.';?" ]/)) {
    //         convertedStr.push(str[i]);
    //     }
    //     else {
    //     let num = str.charCodeAt(i) + shift;
    //     convertedStr.push(String.fromCharCode(num));
    //     }
    // }

    return convertedStr.join('');
};
console.log(caesar('Dog', -1));

// Do not edit below this line
module.exports = caesar;
