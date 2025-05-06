// Input: [1, 2, 2, 3, 4, 4, 5]
// Output: [1, 2, 3, 4, 5]


function removeDuplicates(arr){
    let len = arr.length

    for(let i =0;i<len;i++){
        
        while(arr[i] ==arr[i+1]){
            arr.splice(i+1,1)
            len--
        }
    }

    return arr
}

const result  = removeDuplicates([1, 2, 2, 3, 4, 4, 5])
console.log(result)