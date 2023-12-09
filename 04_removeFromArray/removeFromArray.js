const removeFromArray = function(array, ...remove) {
   remove.forEach(element => {
    if (array.includes(element)) {
        array.splice(array.indexOf(element), 1);
    }
   })
   return array;
};

// Do not edit below this line
module.exports = removeFromArray;

/*I have two arrays
I need to remove the elements present in the second array from the first one
Since the Index numbers wont be the same across both of them better to compare element value
execute a function for each optional argument
    get index of the elements to be removed from original func
    splice the unwanted elements
    return the array*/