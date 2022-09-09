/*
367. Valid Perfect Square

Given a positive integer num, write a function which returns True if num is a perfect square else False.

Follow up: Do not use any built-in library function such as sqrt.

Example 1:

Input: num = 16
Output: true
Example 2:

Input: num = 14
Output: false
*/

let isPerfectSquare = function(x) {
      let previusX = x+1;
      let currentX = 0;
      let result = false;
      for(let i = 0; i < 20; i++){
            currentX = recursiveFunction(previusX,x);
            previusX = currentX;

      }
      if(Number.isInteger(currentX)){
            result = true;
      }
      console.log(result);
      return result;
};

let recursiveFunction = (xn,rootoCalculate)=>{
      xn = 0.5*(xn + (rootoCalculate/xn));
      return xn;
} 
