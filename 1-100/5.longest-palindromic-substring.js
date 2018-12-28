/**
 * @param {sources} https://leetcode-cn.com/problems/longest-palindromic-substring/
 */

/* 
给定一个字符串 s，找到 s 中最长的回文子串。你可以假设 s 的最大长度为 1000。

示例 1：

输入: "babad"
输出: "bab"
注意: "aba" 也是一个有效答案。
示例 2：

输入: "cbbd"
输出: "bb"
 */


/*  
 中心扩张法
 回文两侧互为镜像，可以通过以一个点为中心，向两边扩张的方式寻找最长回文 
 */

 /**
 * @param {string} s
 * @return {string}
 */

var longestPalindrome = function(s) {
    if(!s) return s
    let arr = s.split(''),
        count = 0,
        str = '',
        total = 2*arr.length - 1,
        len = arr.length;
    
    for(let i = 0; i < total; i++){
        let n, m, _str = '';
        if(i%2 == 0){
            let index = i / 2
            _str = arr[index]
            n = index - 1
            m = index + 1
        }else{ // 中间
            n = (i - 1)/2
            m = n + 1
        }
        while(n >= 0 && m < len && arr[n] == arr[m]){
            _str = arr[n] + _str + arr[m]
            n--
            m++
        }
        if(_str.length >= str.length) str = _str
    }

    return str
};
