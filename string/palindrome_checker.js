// Palindrome Checker (Ignore case & spaces)

// Input: "Was it a car or a cat I saw"
// Output: true
// Check if the string is a palindrome (ignore spaces & case).



function palindromeChecker(str){
  let proccesed_str = str.toLowerCase().split(" ").join("")
  let reversed_str = proccesed_str.toLowerCase().split("").reverse().join("")

return proccesed_str == reversed_str
}



const res = palindromeChecker("Was it a car or a cat I saw")
console.log(res) // true