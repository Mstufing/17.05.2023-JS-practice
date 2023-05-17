
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

// ? Task #4
// ? Count Ones in a 2D Array
// ! Can't get the result in HTML !!!

// function countOnes(matrix) {
//     let myArr = matrix.map(elem => {
//         return elem.filter(e => e === 1)
//     })
//     return myArr.flat(Infinity).length;
// }

// let myBtn = document.querySelector(".btn");

// myBtn.onclick = () => {
//     let firstInp = document.querySelector(".inp1");
//     let myResult = document.querySelector(".result");
//     let firstArr = firstInp.value.trim().split(" ");
//     myResult.innerHTML = countOnes(firstArr);
// }

// console.log(countOnes([
//     [1, 1, 1],
//     [0, 0, 1],
//     [1, 1, 1]
// ]));

// ? Task #5
// ? Summing a Slice

// function sliceSum(arr, n) {
//     let myArr = arr.slice(0, n);
//     if (n === 0)
//         return 0;
//     return myArr.reduce((acc, cur) => Number(acc) + Number(cur));
// }

// let myBtn = document.querySelector(".btn");

// myBtn.onclick = () => {
//     let firstInp = document.querySelector(".inp1");
//     let secondInp = document.querySelector(".inp2");
//     let myResult = document.querySelector(".result");
//     let firstArr = firstInp.value.trim().split(" ");
//     myResult.innerHTML = sliceSum(firstArr, secondInp.value);
// }





// TODO ----- MEDIUM -----

// ? Task #1
// ? How Much is True?

// function countTrue(arr) {
//     let myArr = arr.filter(elem => elem === 'true')
//     return myArr.length;
// }

// let myBtn = document.querySelector(".btn");

// myBtn.onclick = () => {
//     let firstInp = document.querySelector(".inp1");
//     let myResult = document.querySelector(".result");
//     let firstArr = firstInp.value.trim().split(" ");
//     myResult.innerHTML = countTrue(firstArr);
// }

// ? Task #2
// ? Converting Objects to Arrays

// function toArray(obj) {
//     return Object.entries(obj);
// }

// ? Task #3
// ? Concatenate Variable Number of Input Arrays

// function concat(...args) {
// 	return args.flat(Infinity);
// }

// ? Task #4
// ? Array of Multiples

// function arrayOfMultiples(num, length) {
//     let arr = [];
//     for (let i = 1; i <= length; i++) {
//         arr.push(num * i);
//     }
//     return arr;
// }

// let myBtn = document.querySelector(".btn");

// myBtn.onclick = () => {
//     let firstInp = document.querySelector(".inp1");
//     let secondInp = document.querySelector(".inp2");
//     let myResult = document.querySelector(".result");

//     myResult.innerHTML = arrayOfMultiples(firstInp.value, secondInp.value);
// }

// ? Task #5
// ? Convert Key, Values in an Object to Array

// function objectToArray(obj) {
// 	return Object.entries(obj);
// }

// ? Task #6
// ? Sort the Unsortable

// function sortIt(arr) {
// 	return arr.sort()
// }
