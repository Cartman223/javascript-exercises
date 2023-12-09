const repeatString = function(str, n) {
    if ( n >= 0) {
        let catStr = "";
        for (let i = 0; i < n; i++) { 
            catStr += str;
        }
        return catStr;
    } else {
        return 'ERROR';
    }   
};

// Do not edit below this line
module.exports = repeatString;
