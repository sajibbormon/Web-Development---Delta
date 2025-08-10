let arr = [1, 2, 3, 4, 5, 6, 7, 2, 9, 2];

// let max = -1;

// for(let i = 0; i<arr.length; i++){
//     if(max < arr[i]){
//         max = arr[i];
//     }
// }

// console.log(max);

//use reduce

let max_val = arr.reduce( (mx, el) => {
    if(mx < el){
        return el;
    }else{
        return mx;
    }
} );

console.log(max_val);