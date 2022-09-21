/*
2. Add Two Numbers

You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.
*/


let addTwoNumbers = function(l1, l2) {
    let array1 = listoArray(l1);
    let array2 = listoArray(l2);
    if(array1.length > array2.length){
            array2 = fillInArray(array2,array1.length);
      } else{
          if(array2.length > array1.length){
              array1 = fillInArray(array1,array2.length);
          }
      }
    let carry = 0;
    let sum = 0;
    let result = [];
    for(let i = 0; i < array1.length; i++){
        sum = array1[i] + array2[i] + carry;
        if(sum >= 10){
              carry = 1;
              result.push(sum-10);
              if(i== array1.length -1){
                    result.push(Math.floor(sum/10));
              }
        } else{
              carry = 0;
              result.push(sum);
        }
    }
    
     result = result.reverse().reduce((acc, curr) => {
      if (acc == null) {
        acc = new ListNode(curr);

      } else {
        acc = new ListNode(curr, acc);
      }
      return acc;
    }, null);
    console.log(result);
    return result;
};



function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
}


function fillInArray(array,length){
      let backFill = length - array.length;
      for(let i = 0; i < backFill; i++){
            array.push(0);
      }
      return array;
}


function listoArray (arr){
    let array = [arr.val];
    while(arr.next !== null){
       arr = arr.next;
       array.push(arr.val)
     }
    return array;
}

