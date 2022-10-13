const palindromes = function (string) {
      const singleWord = string.toLowerCase().replace(/[.,!? ]/g,'');
      const result = singleWord.split('').reverse().join('');
      
      if(result === singleWord) {return true;}
      else {return false;}
};


// Do not edit below this line
module.exports = palindromes;
