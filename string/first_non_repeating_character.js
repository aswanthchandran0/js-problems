// Input: "aabbcddee"
// Output: "c"
// Return the first non-repeating character.


function firstUniqueChar(str){
 let list = {}

 for(let ch of str){
    list[ch] = (list[ch] | 0)+1
 }

 for(let ch of str){
    if(list[ch] ==1){
        return ch
    }
 }
 return false
}


console.log(firstUniqueChar("aabbcddee"))