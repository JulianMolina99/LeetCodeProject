/*
67. Add Binary

Given two binary strings a and b, return their sum as a binary string.

 

Example 1:

Input: a = "11", b = "1"
Output: "100"
Example 2:

Input: a = "1010", b = "1011"
Output: "10101"

*/

let addBinary = function(a, b) {
    a = a.split("");
    b = b.split("");
    let carry = "0";
    let result = [];
    if(a.length > b.length){
        b = fullIn(a.length - b.length,b);
    } else{
        if(a.length < b.length){
            a = fullIn(b.length - a.length,a);
        }
    }
    let count = a.length - 1;
    while(count >= 0){
        let sum = sumBinary(a[count],b[count],carry);
        carry = sum.carry;
        result.unshift(sum.result);
        count--;
    }
    if(carry === "1"){
        result.unshift(1);
    }

    let binaryResult = result[0];
    for(let i = 1; i < result.length ; i++){
        binaryResult = binaryResult + result[i];
    }
    return binaryResult;
};

let fullIn = function(length, a){
    for(let i = 0; i < length; i++){
        a.unshift("0");
    }
    return a;
}

let sumBinary = function (a,b,carry){
    let result;
    if(carry === "0"){
        if ( a === "0" && b === "0"){
            carry = "0";
            result = "0";
        } else if ( a != b){
            carry = "0";
            result = "1";
        } else if (a === "1" && b === "1"){
            carry = "1";
            result = "0";
        }
    }else{
        if ( a === "0" && b === "0"){
            carry = "0";
            result = "1";
        } else if ( a != b){
            carry = "1";
            result = "0";
        } else if (a === "1" && b === "1"){
            carry = "1";
            result = "1";
        }
    }
    return {result,carry};
}
