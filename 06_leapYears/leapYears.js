const leapYears = function(year) {
    if(Number.isInteger(year / 100)) return year % 400 === 0;
    return year % 4  === 0;
};

// Do not edit below this line
module.exports = leapYears;
