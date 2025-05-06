// Input: [1, 3, 2, 3, 4, 3]
// Output: 3

function findMostFrequentElem(arr) {
  let map = {}
  let maxCount = 0
  let maxElem = null

  for(let i =0;i<arr.length;i++){
    let val = arr[i]
    map[val] = (map[val] || 0)+1

    if(map[val] >maxCount){
        maxCount = map[val]
        maxElem = val
    }
  }

  return maxElem

}



console.log(findMostFrequentElem([1, 3, 2, 3, 4, 3])); // ➝ 3