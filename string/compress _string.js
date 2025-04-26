// Input: "aaabbcccc"
// Output: "a3b2c4"
// Implement basic string compression (char + count).


function compressString(str){
  let result = ''
  let count = 1

  for(let i =0;i<str.length;i++){
    if(str[i] == str[i+1]){
      count++
    }else{
      result +=str[i]+count
      count = 1
    }
  }
  return result
}



console.log(compressString("aaabbcccc")); // "a3b2c4"
console.log(compressString("abca"));      // "a1b1c1a1"
