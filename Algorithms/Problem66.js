let plusOne = function(digits) {
    let numElements = digits.length -1;
    let carry = 1;
    let result = [];
    while (numElements >= 0){
        let number = digits[numElements]
        let sum = number + carry;
        if(sum === 10){
            carry = 1;
            result.unshift(0);
            numElements --;
        } else {
            carry = 0;
            result.unshift(sum);
            numElements --;
        }
    }
    if(carry === 1){
        result.unshift(1);
    }
    return result;
};
