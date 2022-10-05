const removeFromArray = function(...arg) {
    const array = arg[0];
    const newArray = [];

    array.forEach((item) => {
        if(!arg.includes(item)) {
            newArray.push(item);
        }
    });

    return newArray;
};
