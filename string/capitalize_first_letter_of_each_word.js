// Input: "hello my friend"
// Output: "Hello My Friend"
// Write a function to do this.



function capitalization(str){
   let splited = str.split(" ")
    
   for (let i = 0; i < splited.length; i++) {
    let word = splited[i];
    console.log(word);

    let asciValue = word.charCodeAt(0);
    const cap = String.fromCharCode(asciValue - 32);

    splited[i] = cap + word.slice(1); 
 }
    splited.join("")
}

capitalization("hello my friend")