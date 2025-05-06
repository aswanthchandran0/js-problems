// Input: "mississippi"
// Output: { i: 4, s: 4, p: 2 }
// Return an object of characters with more than one occurrence.


function findRepeatedChars(str){
    let map = {}
    let result = {}

    for(let char of str){
        map[char] = (map[char] || 0) +1 
    }

    for(let key in  map){
        if(map[key] > 1){
          result[key] = map[key]
        }
    }

    return result
}



const result  = findRepeatedChars("mississippi")
console.log(result)