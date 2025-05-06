// Reverse an array without using .reverse()
// Input: [1, 2, 3, 4]
// Output: [4, 3, 2, 1]





function reverseArr(arr){
 let left = 0
 let right = arr.length-1

 while(left < right){
    let temp = arr[left]
    arr[left] = arr[right]
    arr[right] = temp

    left++
    right--
 }
 return arr
}


const result =  reverseArr([1, 2, 3, 4])
console.log(result)