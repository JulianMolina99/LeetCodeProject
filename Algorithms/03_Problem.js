/*
3. Longest Substring Without Repeating Characters
Given a string s, find the length of the longest substring without repeating characters.

 

Example 1:

Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.
Example 2:

Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
Example 3:

Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.

*/

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
