/**
 * @param {sources} https://leetcode-cn.com/problems/longest-substring-without-repeating-characters/ 
 */

/* 
给定一个字符串，请你找出其中不含有重复字符的 最长子串 的长度。

示例 1:

输入: "abcabcbb"
输出: 3 
解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。
示例 2:

输入: "bbbbb"
输出: 1
解释: 因为无重复字符的最长子串是 "b"，所以其长度为 1。
示例 3:

输入: "pwwkew"
输出: 3
解释: 因为无重复字符的最长子串是 "wke"，所以其长度为 3。
     请注意，你的答案必须是 子串 的长度，"pwke" 是一个子序列，不是子串。
*/

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    var strArray = s.split('');
    var childStr = '',
        max = 0;
    
    strArray.forEach((letter) => {
        let repeatPos = childStr.indexOf(letter),
            _max = childStr.length;
            childStr += letter
        if(repeatPos == -1){
            _max++
            if(_max > max) max = _max
        }else{
           childStr = childStr.slice(repeatPos+1)
        }
        
    })
    
    return max
};