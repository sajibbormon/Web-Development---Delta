const sum = (a, b) => a + b;

const mul = (a, b) => a * b;

const g = 9.8;

const PI = 3.1416;

// module.exports = 123;

// let obj = {
//     sum: sum,
//     mul: mul,
//     g: g,
//     PI: PI
// }

// module.exports = obj;


//another way


// module.exports = {
//     sum: sum,
//     mul: mul,
//     g: g,
//     PI: PI
// }


// another way 

module.exports.pow = (a, b) => {
    let ans = 1;
    for(let i = 0; i<b; i++){
        ans = ans * a;
    }
    return ans;
}

/*
antoher way: 

exports.pow = (a, b) => {
    let ans = 1;
    for(let i = 0; i<b; i++){
        ans = ans * a;
    }
    return ans;
}

but we cann't do the below line:
exports = 5;
bcz here js will treat exports as a variable;

*/