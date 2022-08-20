let isPalindrome = function(x) {
    let array = Array.from(String(x));
    console.log(array);
    let count = Math.floor(array.length/2);
    let indexInit = array.length - 1;
    let result = true;
    for(let i = 0; i < count; i++){
        if(array[i] != array[indexInit - i]){
            result = false;
            break;
        }
    }
    return result;
};
