const sumAll = function(num1, num2) {
    if (typeof num1 !== "number" || typeof num2 !== "number" || num1 < 0 || num2 < 0) {
        return 'ERROR';
    } else {
        let sum = 0;
        if (num1 > num2) {
            let number1 = num2;
            let number2 = num1;
            for (let n = number1; n <= number2; n++) {
                sum += n;
            }
        } else {
            let number1 = num1;
            let number2 = num2
            for (let n = number1; n <= number2; n++) {
                sum += n;
            }
        }
        return sum;
    }
};

// Do not edit below this line
module.exports = sumAll;