const palindromes = function (str) {
    let plainStr = str.toLowerCase().split('')
        .filter(elem => elem !== '!' && elem !== ' ' && elem !== ',' & elem !== '.')
        .join('');
    let reversedStr = plainStr.split('').reverse().join('');
    if(plainStr === reversedStr) return true;
    return false;
};

// Do not edit below this line
module.exports = palindromes;
