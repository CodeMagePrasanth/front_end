// reverse string
// 1 ways for loop

// console.log(reverseString("interview"));

// using loop
// function reverseString(str) {
//     let reversed = ''
//     for (let i = str.length -1 ; i >=0; i--){
//         reversed += str[i];
//     }
//     return reversed;
// }

// console.log(reverseString("interview"));



// function findthelongestword(sentence){
//     const words = sentence.split(" ");
//     let longestword ="";
//     for (let word of words) {
//         if (word.length > longestword.length)
//             longestword = word
//     }
//     return longestword
// }
// console.log(findthelongestword("i love code"))

// palindoimrw

// function ispalindrome(str){
//     const reversedstr = str.split("").reverse().join("");
//     return str === reversedstr;
// }
// console.log(ispalindrome("racecar"));

// function isprime(number){
//     for (let i = 2; i<= number / 2; i++){
//         if (number % i === 0){
//             return false;
//         }
//     }
//     return true;
// }
// console.log(isprime(7));


function factorial(num){
    if (num === 0){
        return 1;
    }
    let factorial = 1;
    for (let i = 1; i <= num; i++){
        factorial *= i;
    }
    return factorial;
}
console.log(factorial(5));