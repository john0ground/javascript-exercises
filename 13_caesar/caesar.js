const caesar = function(...args) {
    const str = args[0];
    const shift = args[1];
    const convertedStr = [];
    
    for (let i = 0; i < str.length; i++) {
        if (str[i].match(/[!,.';?" ]/)) {
            convertedStr.push(str[i]);
        }
        else {
        let num = str.charCodeAt(i) + shift;
        convertedStr.push(String.fromCharCode(num));
        }
    }

    return convertedStr.join('');
};
console.log(caesar('D!og', -1));

// Do not edit below this line
module.exports = caesar;
