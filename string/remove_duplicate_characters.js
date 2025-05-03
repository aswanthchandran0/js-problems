// Input: "programming"
// Output: "progamin"
// Remove all duplicate characters and return unique characters only.




function uniqueCharFinder(str){
   let result = ''

   for(let i =0;i<str.length;i++){
    let isDuplicate = false 

    for(let j =0;j<result.length;j++){
        if(str[i] ==result[j]){
            isDuplicate = true
            break 
        }
    }

    if(!isDuplicate){
        result +=str[i]
    }
   }
   return result
}

const res = uniqueCharFinder("programming")
console.log(res)