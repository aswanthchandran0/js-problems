// str1 = "listen", str2 = "silent"
// Return true if the strings are anagrams (contain same characters).



function areAnagrams(str1,str2){
    let cleanedStr1 = str1.replace(/\s/g,'')
    let cleanedStr2 = str2.replace(/\s/g, '')

    if(cleanedStr1.length !== cleanedStr2.length) return false

    let sorted1 = cleanedStr1.split('').sort().join('')
    let sorted2 = cleanedStr2.split('').sort().join('')

    return sorted1 === sorted2
}



// Example usage:
console.log(areAnagrams("listen", "silent"));      // true
console.log(areAnagrams("Hello World", "dlroW olleH")); // true
console.log(areAnagrams("node", "done"));          // true
console.log(areAnagrams("test", "tent"));          // false