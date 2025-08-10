/*
Qs1. Square and sum the array elements using the arrow function and then find the
average of the array.
*/
//
let arr = [3, 4];

// let sqr = arr.map((el) => el*el );
// let sum = sqr.reduce( (sum, el ) => sum + el );
// let avg = sum / (arr.length);
// console.log(avg);

//shortcut way

let avgVal =  (arr.map( (el) => el*el ) ).reduce( (sum, el) =>  sum + el ) / arr.length;
console.log(avgVal);

/*
Qs2. Create a new array using the map function whose each element is equal to the
original element plus 5.
*/
//

let arr2 = [1, 2, 3, 4, 5];
let newArr2 = arr2.map( (el) => el + 5 );
console.log(newArr2);
/*
Qs3. Create a new array whose elements are in uppercase of words present in the
original array.
*/
//
let arr3 = ['S', 'a', 'j', 'i', 'b'];

let newArr3 = arr3.map( (el) => el.toUpperCase() );
console.log(newArr3);

/*
Qs4. Write a function called doubleAndReturnArgs which accepts an array and a
variable number of arguments. The function should return a new array with the original
array values and all of the additional arguments doubled.
*/
//

let arr4 = [2, 4, 6, 8, 10, 12, 14, 16];

function doubleAndReturnArgs(arr, ...args){
    let doubleArgsArr = args.map( (el) => el*2 );
    return newArr = [...arr, ...doubleArgsArr];
}

let ansArr4 = doubleAndReturnArgs(arr4, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32);
console.log(ansArr4);


/*
Qs5. Write a function called mergeObjects that accepts two objects and returns a new
object which contains all the keys and values of the first object and second object.

*/

const obj1 = {
    Hname: "Sajib",
    Hage: 26,
}
const obj2 = {
    Wname: "Payel",
    Wage: 16,
}

function mergeObjects(obj1, obj2){
    const newObj = { ...obj1, ...obj2 };
    return newObj;
}

const newObj = mergeObjects(obj1, obj2);
console.log(newObj);