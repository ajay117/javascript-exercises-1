const findTheOldest = function(obj) {
    let objCopy = [...obj];
    let oldest = objCopy.sort(function(a,b) {
            aAge = (a.yearOfDeath || new Date().getFullYear()) - a.yearOfBirth;
            bAge = (b.yearOfDeath || new Date().getFullYear()) - b.yearOfBirth;
        return bAge - aAge;
    })
    return oldest[0];
};

// Do not edit below this line
module.exports = findTheOldest;
