/*

Qs1. Write a JS program to delete all occurrences of element 'num' in a given array.
Example : if arr = [1, 2, 3, 4, 5, 6, 2, 3] & num = 2
Result should be arr = [1, 3, 4, 5, 6, 3]

*/

// let arrq1 = [1, 2, 3, 4, 5, 6, 2, 3];
// let numq1 = 2;

// for(let i = 0; i<arrq1.length; i++){
//     if(arrq1[i] == numq1){
//         arrq1.splice(i,1);
//     }
// }

// for(let i = 0; i<arrq1.length; i++){
//     console.log(arrq1[i]);
// }

/*

Qs2. Write a JS program to find the no of digits in a number.
Example : if number = 287152, count = 6

*/

// let numq2 = 287152;

// let  count = 0;
// let copyq2 = numq2;

// while(copyq2 > 0){
//     copyq2 = Math.floor(copyq2/10);
//     count++;
// }
// console.log(count);

/*

Qs3. Write a JS program to find the sum of digits in a number.
Example : if number = 287152, sum = 25
*/


// let numq3 = 287152;

// let  sum = 0;
// let copyq3 = numq3;

// while(copyq3 > 0){
//     let lastDigit = copyq3 % 10;
//     sum += lastDigit;
//     copyq3 = Math.floor(copyq3 / 10);
// }
// console.log(sum);

/*
Qs4. Print the factorial of a number n.
[Factorial of a number n is the product of all positive integers less than or equal to a
given positive integer and denoted by that integer. ]
Example :

7! (factorial of 7) = 1x2x3x4x5x6x7 = 5040
5! (factorial of 5) = 1x2x3x4x5 = 120
3! (factorial of 3) = 1x2x3 = 6
0! Is always 1
*/

// let numq4 = 5;
// let fact = 1;
// while(numq4>0){
//     fact = fact * numq4;
//     numq4--;
// }

// console.log(fact);


/*
Qs5. Find the largest number in an array with only positive numbers.
*/

let arrq5 = [1, 2, 3, 4, 5, 6, 2, 3];

let largest = 0;

for(let i = 0; i<arrq5.length; i++){
    if(arrq5[i] > largest){
        largest = arrq5[i];
    }
}

console.log("Largest number is", largest);