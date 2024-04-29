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

// let date = new Date();
// //console.log(date);
// let year = date.getFullYear();
// // console.log(year);
// let month = date.getMonth();

// let result = `${month + 1}-${year}`;
// console.log(result);

// let data = Math.sqrt(64);
// console.log(data);

//DOM

// let elems = document.getElementsByTagName("h1");

// for (let i = 0; i < elems.length; i++) {
//   const element = elems[i];
//   console.log(elems);
// }

// let elem = document.getElementsByClassName("test");
// console.log(elem);

//important
// let elem = document.getElementById("products");
// console.log(elem);

// let elems = document.querySelectorAll("#products h1");
// elems[1].style.backgroundColor = "Red";

// for (let i = 0; i < elems.length; i++) {
//   const element = elems[i];
//   console.log(element);
// }
// for (const item of elems) {
//   item.style.backgroundColor = "Red";
// }

//let h1 = document.querySelector("h1");
//console.log(h1.innerText);
//console.log(h1.innerHTML);
//h1.innerText = "Reshad Bey";
// h1.style.color = "Teal";
// h1.style.margin="200px"
//console.log(document.querySelector("#products ul li:nth-child(2)"));
//h1.className="active"
// h1.classList.add("active");
// h1.classList.remove("product");
//console.log(h1.classList.contains("active"));
// h1.setAttribute("id", "text");
// console.log(h1.getAttribute("id"));
// console.log(h1.hasAttribute("id"));

let button = document.querySelector(".add-product");
let h1 = document.querySelector("h1");

button.addEventListener("click", function () {
  this.style.backgroundColor = "Magenta";
  h1.style.backgroundColor = "Green";
  h1.style.color = "White";
  h1.style.width = "200px";
  h1.innerText = "salam fatime xanim";
  let btnText = this.innerText;
  this.innerText = h1.innerText;
  h1.innerText = btnText;
});
