/*
Qs1. Write a JavaScript function that returns array elements larger than a number.

Qs2. Write a JavaScript function to extract unique characters from a string.
Example: str = "abcdabcdefgggh"
ans = "abcdefgh"

Qs3. Write a JavaScript function that accepts a list of country names as input and
returns the longest country name as output.
Example : country = ["Australia", "Germany", "United States of America"]
output : "United States of America"

Qs4. Write a JavaScript function to count the number of vowels in a String argument.

Qs5. Write a JavaScript function to generate a random number within a range (start,
end).
*/

//qs 1

function largerArrayElm(n) {
    let a = [];

    for(let i = 0; i<5; i++){
        a[i] = n + i + 1;
    }

    return a;

}

let arr = [1, 2, 3];
console.log(largerArrayElm(5));


//q2

function uniqueCharString(str){
    let arr = new Array(26);

    for(let i = 0; i<arr.length; i++){
        arr[i] = false;
    }
    let indxOfa = 97;


    for(let i = 0; i<str.length; i++){
        let indx = str.charCodeAt(i);

        if(arr[indx - indxOfa] == false){
            arr[indx - indxOfa] = true;
        }

    }

    let newStr = "" ;

    for(let i = 0; i<arr.length; i++){
        if(arr[i] == true){
            let indxOftrue = i + indxOfa;
            let substr = String.fromCharCode(indxOftrue);
            newStr = newStr.concat(substr);
            
        }
    }

    return newStr;
}

console.log(uniqueCharString("abcdabcdefgggh"))

//q3

function largestName(countries){
    let maxlen = 0;
    let indx;
    for(let i = 0; i<countries.length; i++){
        let str = countries[i];
        if(str.length > maxlen){
            maxlen = str.length;
            indx = i;
        }
    }
    
    if(indx != NaN)
    return countries[indx];
}

let countries = ["Australia", "Germany", "United States of America"]
console.log(largestName(countries));


function vowelsCount(str){
    str = str.toLowerCase();
    let count = 0;
    for(let i = 0; i<str.length; i++){
        if(str[i] == 'a' || str[i] == 'e' || str[i] == 'i' || str[i] == 'o' || str[i] == 'u'){
            count++;
        }
    }

    return count;
}

let abc = "abc";

console.log(vowelsCount("United States of America"));

function randomRange(start, end){
    if(start == 0){
        return Math.floor(Math.random() * (end+1))  ;
    }else{
        return Math.floor(Math.random() * (start + 1)) + end - start    ;
    }
}

console.log(randomRange(0, 10));