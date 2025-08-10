//Practice Qs

//Check if all numbers in our aray are multiples of 10 or not.

let nums = [10, 20, 30, 40, 100];

console.log(nums.every( (el) => (el % 10 ==0) ));

//Create a function to find the min number in an array.

let min = nums.reduce( (min, el) => {
    if(min > el){
        return el;
    }else{
        return min;
    }
} );

console.log(min);