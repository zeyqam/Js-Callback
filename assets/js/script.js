"use strict";
// setTimeout(() => {
//   alert("Salam");
// }, 3000);
// function checkOddNum(num) {
//   return num % 2 == 1;
// }
// function checkEvenNum(num) {
//   return num % 2 == 0;
// }

// function sumOfNumsByConditions(arr, callback) {
//   let sum = 0;
//   for (const item of arr) {
//     if (callback(item)) {
//       sum += item;
//     }
//   }
//   console.log(sum);
// }

// let nums = [1, 2, 3, 4, 5];
// //sumOfNumsByConditions(nums, (m) => m % 2 == 0);
// sumOfNumsByConditions(nums, (m) => m > 5);

// function sumOfEvenNums(arr) {
//   let sum = 0;
//   for (const item of arr) {
//     if (item % 2 == 0) {
//       sum += item;
//     }
//   }
//   console.log(sum);
// }
let nums = [1, 4, 5, 6, 9];

//let result = nums.filter((m) => m > 5);
//console.log(nums);
//console.log(result);
// let result = nums.find((m) => m > 5);
// console.log(result);
// let result=nums.findIndex(m=>m>5);
// console.log(result);

// class Animal {
//   constructor(height, width) {
//     this.height = height;
//     this.width = width;
//   }
// }

//let animal = new Animal(100, 200);
//console.log(animal.height);

//let animal = new Animal(200, 300);
// class Bird extends Animal {
//   constructor(a, b) {
//     super(a, b);
//     this.name = "Devequshu";
//   }

//   getName(t) {
//     console.log("test");
//   }
// }

// let bird = new Bird();
// bird.getName(100);

// let name = "sasa";
// let surname = new String();
// //String surname=new String("salamlar");
// surname = "Salamlar";
// console.log(surname);

// let isMarried = new Boolean();
// isMarried = true;
// console.log(isMarried);
//class Test {
//   constructor(name) {
//     this.name = name;
//   }
// }

// //console.log(test.name);
// Test.prototype.surname = "Surname for test";
// Test.prototype.getName = function () {
//   console.log("this is test name");
// };
// let test = new Test("salam");
// test.getName();

// String.prototype.customContains = function (searchText) {
//   return this.includes(searchText);
// };
// let name = "Reshad";
// let surname = "Agayev";
// console.log(name.customContains("c"));
// console.log(surname.customContains("A"));

let date = new Date();
console.log(date);
