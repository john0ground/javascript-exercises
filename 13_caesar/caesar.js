const caesar = function(str, shift) {
    const convertedStr = [];
    
    for (let i = 0; i < str.length; i++) {
        if (str[i].match(/[!,.';?" ]/)) {
            convertedStr.push(str[i]);
        }
        else {    
            let num = str.charCodeAt(i) + shift;
           
            if(str[i].toUpperCase() === str[i]) {

                if(num < 65) {
                    for (let i = num; i <= 90; i += 26) {
                        if (i >= 65) {num = i;}
                    }
                } else if(num > 90) {
                    for (let i = num; i >= 65; i -= 26) {
                        if (i <= 90) {num = i;}
                    }
                }

            } else if(str[i].toLowerCase() === str[i]) {

                if(num < 97) {
                    for (let i = num; i <= 122; i += 26) {
                        if (i >= 97) {num = i;}
                    }
                } else if(num > 122) {
                    for (let i = num; i >= 97; i -= 26) {
                        if (i <= 122) {num = i;}
                    }
                }
            }

            convertedStr.push(String.fromCharCode(num));
        }
    }

    return convertedStr.join('');
};
console.log(caesar('And', -1));

// Do not edit below this line
module.exports = caesar;
