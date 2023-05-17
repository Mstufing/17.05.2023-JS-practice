
// TODO ----- EASY -----

// ? Task #1
// ? Omnipresent Value
// ! How to enter more than 1 array in HTML?

// function isOmnipresent(arr, val) {
//     return arr.every(elem => {
//         return elem.includes(val)
//     })
// }

// let myBtn = document.querySelector(".btn");

// myBtn.onclick = () => {
//     let firstInp = document.querySelector(".inp1");
//     let secondInp = document.querySelector(".inp2");
//     let myResult = document.querySelector(".result");
//     let myArr = firstInp.value.trim().split(" ");

//     myResult.innerHTML = isOmnipresent(myArr, secondInp.value);
// }

// console.log(isOmnipresent([[1, 1], [1, 3], [5, 1], [6, 1]], 1));
// console.log(isOmnipresent([[1, 1], [1, 3], [5, 1], [6, 1]], 6));

// ? Task #2
// ? Numbers to Arrays and Vice Versa

// function toArray(num) {
//     return num.toString().split('').map(elem => Number(elem));
// }

// let myButton = document.querySelector(".btn");

// myButton.onclick = () => {
//     let inp = document.querySelector('.inp');
//     let result = document.querySelector('.result');

//     result.innerHTML = toArray(inp.value);
// }

// function toNumber(arr) {
//     return Number(arr.join(''));
// }

// let myBtn = document.querySelector(".button");

// myBtn.onclick = () => {
//     let inp1 = document.querySelector('.inp1');
//     let result = document.querySelector('.res');
//     let arr = inp1.value.trim().split(' ');

//     result.innerHTML = toNumber(arr);
// }

// ? Task #3
// ? Is One Array a Subset of Another?

// function isSubset(arr1, arr2) {
//     return arr1.every(elem => arr2.includes(elem))
// }

// let myBtn = document.querySelector(".btn");

// myBtn.onclick = () => {
//     let firstInp = document.querySelector(".inp1");
//     let secondInp = document.querySelector(".inp2");
//     let myResult = document.querySelector(".result");
//     let firstArr = firstInp.value.trim().split(" ");
//     let secondArr = secondInp.value.trim().split(' ');
//     myResult.innerHTML = isSubset(firstArr, secondArr);
// }
