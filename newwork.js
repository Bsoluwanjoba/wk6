let arr = [2,3,7,23,9,4,675,8,0,-1,8,45,-69,30,55]
const numbers = arr.reverse ()

console.log(`The result of the reversed array is: (${numbers})`);

const min = Math.min(...arr)
const max = Math.max(...arr)

console.log(`The result of the minimum is: ${min}`, `The result of the maximum is: ${max}`);

const odd = arr.filter(oddNumbers)

function oddNumbers(arr) {
    return oddNumbers;
}

console.log(odd);



let sum = 0

for (let  i = 0; i < arr.length; ++i) {
    if (arr[i] > 0) {
        sum += arr[i];
    }
}

console.log(`This is the sum of `); 

// function sumPositive(arr) {
//     let newArr = []

//     for (let x of arr) {
//         if (x >= 1){

//         }
//     }
// }


const arr3 = [2, [7, 15], [39, 54, 69] [74, 43, 22], 16, 19 [-5, -6, -100]]

let results = arr3.flat(4)
console.log(results);

const arr1 = [3, 5, 6, 10, 11, 20]
const arr2 = [1, 2, 7, 8, 15, 19]

const result = [...arr1, ...arr2]
function mergeTwo(arr1, arr2) {
    return arr1.concat(arr2).sort((a,b) => a-b)
  }
  console.log(`This is the result of the merged array ${result}`)