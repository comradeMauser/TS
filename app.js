"use strict";
function combine(n, m, resultConversion) {
    return resultConversion === 'str' ? String(n) + String(m) :
        resultConversion === 'num' ? Number(n) + Number(m) : "resultConversion is " + resultConversion;
}
var combineNumbers = combine(100, 99.9, '');
console.log(combineNumbers);
var combineStrings = combine('100', '99.9', 'none');
console.log(combineStrings);
var combineNumbersToString = combine(100, 99.9, 'str');
console.log('combineNumbersToString:', combineNumbersToString);
var combineStringsToNumber = combine('100', '99.9', 'num');
console.log('combineStringsToNumber:', combineStringsToNumber);
