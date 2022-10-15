const findTheOldest = function(person) {
    const ageArr = person.map(age => age.yearOfDeath - age.yearOfBirth);
    const max = Math.max(...ageArr);
    return person[ageArr.findIndex(n => n === max)];
};

// Do not edit below this line
module.exports = findTheOldest;
