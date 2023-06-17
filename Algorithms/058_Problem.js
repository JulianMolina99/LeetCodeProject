/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLastWord = function(s) {
    let end = s.length - 1;
    while (end >= 0 && s[end] === ' ') {
        console.log(end);
        end--;
    }
    
    if (end < 0) { 
        return 0;
    }
    let start = end;
    while (start >= 0 && s[start] !== ' ') {
        start--;
    }
    return end - start;
};

/** My initial algorithm **/

/*
const lengthOfLastWord = function(s) {
    let palabras = s.split(" ").filter(Boolean);
    console.log(palabras);
    let lastword = palabras[palabras.length-1];
    return lastword.length
};
*/
