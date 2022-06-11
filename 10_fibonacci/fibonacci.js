const fibonacci = function(num) {
    // (1, 1, 2, 3)
    //Initialize num1 and num2 variable
    if(num == 1 || num == 2) return 1;
    let num1 = 1,
        num2 = 1,
        newValue;
        //If num === 2 return 1
        //If num === 1 return 1 or,
    if(num < 0) return 'OOPS';
    for(let i = 3; i <= num; i++) {
        //Inside a loop equal initialize index with 3, less than or 
        //equal to num
        //New value will be num1 + num2
        newValue = num1 + num2;
        //Num1 will equal to num2
        num1 = num2;
        //Num2 will equal to newValue
        num2 = newValue;
    }
    return newValue;
};

// Do not edit below this line
module.exports = fibonacci;
