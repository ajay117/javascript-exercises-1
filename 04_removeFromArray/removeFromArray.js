const removeFromArray = function(arr,...num) {
    return arr.filter(elem => !num.includes(elem));
};

// Do not edit below this line
module.exports = removeFromArray;
