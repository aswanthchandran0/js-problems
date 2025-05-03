// Input: "I love fullstack development"
// Output: "development"
// Return the longest word.


 function longestWordFinder(str){
    let longestWord = ''
    str = str.split(" ")
     
    for(let i =0;i<str.length;i++){
        if(str[i].length >longestWord.length ){
            longestWord = str[i]
        }
    }

    return longestWord
 }


  const res = longestWordFinder("I love fullstack development")

  console.log(res)