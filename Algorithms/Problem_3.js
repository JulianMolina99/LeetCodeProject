let lengthOfLongestSubstring = function(s) {
    s = separateString(s);
    let currentResult = [];
    let maxResult = 0;
    
    for(let i = 0; i < s.length ; i++){
        if(i !== s.indexOf(s[i])){
            if(currentResult.length > maxResult){
                maxResult = currentResult.length;
            }
            if (currentResult.indexOf(s[i]) !== -1){
                currentResult.splice(0, currentResult.indexOf(s[i]) + 1);
                currentResult.push(s[i]);
            } else {
                currentResult.push(s[i]);
            }
        } else {
            currentResult.push(s[i]);
        }
    }

    if(currentResult.length > maxResult){
        maxResult = currentResult.length;
    }
    return maxResult;
};

function separateString(string){
    return string.split("");
}
