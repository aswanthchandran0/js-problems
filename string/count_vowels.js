


function countVowels(str){
    let count = 0
    let vowels = 'aeiouAEIOU'
     
    for(let char of str){
        if(vowels.includes(char)){
            count++
        }
    }
    return count
}


let res = countVowels("hello world")
console.log(res)