const getTheTitles = function(book) {
    const array = [];
   
    for(const list of book) {
        array.push(list);
    }

    const result = [];
    for(i = 0; i < array.length; i++) {
        result.push(array[i].title);
    }

    return result;
};

// const books = [
//     {
//       title: 'Book',
//       author: 'Name'
//     },
//     {
//       title: 'Book2',
//       author: 'Name2'
//     }
//   ]

// console.log(getTheTitles(books));

// Do not edit below this line
module.exports = getTheTitles;
