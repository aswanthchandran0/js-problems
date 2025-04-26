//  1. Reverse Only Words

// Input: "hello world"
// Output: "olleh dlrow"
// Write a function to reverse each word in the string.

let str = "hello world";
str = str.split(" ");

for (let i = 0; i < str.length; i++) {
  str[i] = str[i].split("").reverse().join("");
}
str = str.join(" ");
console.log(str);
