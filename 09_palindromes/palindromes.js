const palindromes = function (string) {
      const singleWord = string.toLowerCase().replace(/[.,!? ]/g,'');
      const result = singleWord.split('').reverse().join('');
      
      return result === singleWord;
};


// Do not edit below this line
module.exports = palindromes;
