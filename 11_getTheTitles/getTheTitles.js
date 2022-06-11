const getTheTitles = function(arr) {
    return arr.reduce((prev,curr) => [...prev, curr.title] ,[]);
};

// Do not edit below this line
module.exports = getTheTitles;
