/*I've written five functions. Each function receives a parameter arr which is an array. 
Complete the functions using arr inside the function bodies.

    1. getLength(arr)    should return length of arr
    2. getFirst(arr)     should return the first element of arr
    3. getLast(arr)      should return the last element of arr
    4. pushElement(arr)  should push an element to arr, and then return arr
    5. popElement(arr)   should pop an element from arr, and then return arr

When you have finished the work, click "Run Tests" to see if your code is working properly.

In the end, click "Submit" to submit your code pass this kata.*/

//1
let arr=[10, 20,30, 4, 45, 60 ]
let arrLength=arr.length
export function getLength(arr) {
    
    return arrLength
} 
//console.log(getLength(arr))
let arrayFirst=arr[0]
export function getFirst(arr) {
    return arrayFirst
}
//console.log(getFirst(arr))
let lastArray=arr[5]
export function getLast(arr) {
    return lastArray
    
}
console.log(getLast(arr))
