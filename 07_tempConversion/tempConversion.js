
const ftoc = function(temp) {
    const ftocConvert = (temp - 32) * (5/9);
    const ftocResult = Math.round(ftocConvert * 10) / 10;
    return ftocResult;
};

const ctof = function(temp) {
  const ctofConvert = temp * (9/5) + 32;
  const ctofResult = Math.round(ctofConvert * 10) / 10;
  return ctofResult;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
