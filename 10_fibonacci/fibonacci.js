const fibonacci = function(num) {
    if(num == 1 || num == 2) return 1;
    let num1 = 1,
        num2 = 1,
        newValue;
    if(num < 0) return 'OOPS';
    for(let i = 3; i <= num; i++) {
        newValue = num1 + num2;
        num1 = num2;
        num2 = newValue;
    }
    return newValue;
};

// Do not edit below this line
module.exports = fibonacci;
