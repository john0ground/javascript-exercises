const findTheOldest = function(array) {
    return array.reduce((oldest, current) => {
        if (!oldest.yearOfDeath) {
            oldest.yearOfDeath = new Date().getFullYear();
        } 
        if (!current.yearOfDeath) {
            oldest.yearOfDeath = new Date().getFullYear();
        }
        return (oldest.yearOfDeath - oldest.yearOfBirth) < (current.yearOfDeath - current.yearOfBirth)? current : oldest       
    })
}

// Do not edit below this line
module.exports = findTheOldest;


