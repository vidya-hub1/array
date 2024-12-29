// How would you use map() to multiply each number in this array [1, 2, 3] by 3?
// Write the code that uses map() to achieve this.

let numbers = [1,2,3]
let data =numbers.map(num=>num*3)
console.log(data)

// How can you use filter() to get only the even numbers from the array [1, 2, 3, 4, 5]?
// Write the code that filters out only even numbers.

const a =[1,2,3,4,5];
const b =a.filter(x => x%2==0)
console.log(b)

// How would you check if the number 10 is present in the array [5, 10, 15] using includes()?
// Write the code to check if 10 exists in the array.

let number = [5, 10, 15];
let present = number.includes(10);
console.log(present)

// How can you use find() to return the first number greater than 20 from the array [10, 15, 25, 30]?
// Write the code to find the first number greater than 20.

let a1 = [10, 15, 25, 30];
let b1 = a1.find(x => x>20);
console.log(b1)

// How would you flatten this array [1, [2, [3, 4]], 5] to a depth of 1 using flat()?
// Write the code that uses flat() to flatten the array to one level.

let a2 =  [1,
         [2,[3, 4]],
          5] ;
let b2 = a2.flat(2);
console.log(b2)        


