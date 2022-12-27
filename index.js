// var name = "sunder";
// name = "shiv";
// console.log(name);

// var a = 5;
// var b = 5;
// var c = 6;
// var sum = a + b + c;
// console.log(sum);
// console.log();

// let a = 5;
// let b = 5;
// let c = "shiv";
// let sum = a + b + c;
// console.log(sum);

// const student = {
//   name1: "shiv",
//   roll: 34,
//   branch: "cse",
// };
// console.log(student);

// let num1 = 10,
//   num2 = 20;

// console.log(num1 + num2);
// console.log(num1 - num2);
// console.log(num1 * num2);
// console.log(num1 / num2);
// console.log(num1 % num2);

// let num = 10;
// console.log(num++);
// console.log(++num);

// let num = 10;
// console.log(num--);
// console.log(--num);

// let num1 = 20;
// console.log(num1--);
// console.log(--num1);

// assignment operator

// var x = 10,
//   y = 30;
// console.log((x += y));
// console.log((x -= y));
// console.log((x *= y));
// console.log((x /= y));
// console.log((x %= y));
// console.log(x ** y);

// comparison operator
// let a = 50,
//   b = 40;
// console.log(a == b);
// console.log(a != b);
// console.log(a !== b);
// console.log(a > b);
// console.log(a < b);
// console.log(a <= b);
// console.log(a >= b);
// console.log(a === b);

// Logical Operator

// let a = 0,
//   b = 1,
//   c = 15,
//   d = 13;

// console.log(a && b);
// console.log(a || b);
// console.log(!b);
// console.log(!a);
// console.log(c > d && c < d);
// console.log(c > d || c < d);

// conditional statement

// let age = 17;
// age >= 18
//   ? console.log("App saddi kar sakte hai ")
//   : console.log("App nabalic hai");

// let time = 20;
// if (time >= 0 && time < 12) {
//   console.log("Good Morning");
// } else if (time > 12 && time < 18) {
//   console.log("Good Afternoon");
// } else if (time > 18 && time < 20) {
//   console.log("Good Evening");
// } else {
//   console.log("Good Night");
// }

// let age = prompt("Enter the age");
// if (age > 18) {
//   console.log("You can drive");
// } else {
//   console.log("You can't drive");
// }

// for (let index = 0; index < 5; index++) {
//   console.log(index);
// }

// table  loop
// let number = 2;
// for (let index = 1; index <= 10; index++) {
//   let sum = number * index;
//   console.log(number, "X", index, "=", sum);
// }

// while loop table
// let number = 2,
//   index = 1;
// while (index <= 10) {
//   console.log(number, "X", index, "=", number * index);
//   index++;
// }

// do while loop table program
// let number = 2,
//   index = 1;
// do {
//   console.log(number, "X", index, "=", number * index);
//   index++;
// } while (index <= 10);

// const student = {
//   fname: "shiv kumar",
//   lname: "jha",
//   roll_no: "2020-CSE-01",
// };
// for (let i in student) {
//   console.log(student[i]);
// }

// function toCelsius(f) {
//   console.log((f - 32) * 5 / 9);
// }
// function toFahrenheit(c) {
//   console.log((c * 9 / 5) + 32);
// }
// var value = "celsius";
// // value = fahrenheit
// switch (value) {
//   case "celsius":
//     toCelsius(98);
//     break;
//   case "fahrenheit":
//     toFahrenheit(98);
//     break;
//   default:
//     break;
// }

// function add(a, b) {
//   console.log(Number(a) + Number(b));
// }
// var a = prompt("Enter the Value of a")
// var b = prompt("Enter the Value of b")
// add(a, b)

// let city = "Samastipur"
// console.log(city.length);
// console.log(city[0]);
// console.log(city[city.length - 1]);
// console.log(city.toUpperCase());
// console.log(city.toLocaleLowerCase());
// console.log(city.toLowerCase());
// console.log(city.toString());
// console.log(city.slice(6));
// let city2 = "sitamarhi"
// console.log(city.concat(city2));

// array
// let arr1 = [2, 4, 15, 3, 5, 6];
// let arr2 = [3, 15, 6, 7, 5, 7];
// let arr3 = [2, 3, 5, 6, 7, 8];
// console.log(arr1[3]);
// let vrr = arr1.toString();
// console.log(typeof vrr);
// console.log(arr1.join(" "));
// let a = arr1.concat(arr2, arr3);
// console.log(a);
// let arr4 = Number(arr1);
// console.log(arr1.sort());
// console.log(arr1.splice(0, 3));
// console.log(arr1.reverse());

// let date = new Date();
// document.getElementById("date").innerHTML = date;

// var a = 1;
// for (var i = 0; i <h1h1 10; i++) {
//   if (i == 6) {
//     break;
//   }
//   console.log(a + i);
// }

// let chaatpuja = document.createElement("ol");

// let listItem1 = document.createElement("li");
// listItem1.innerHTML = "Nariyal";
// document.body.appendChild(listItem1);

// let listItem2 = document.createElement("li");
// listItem2.innerHTML = "Nariyal";
// UnorderedList.appendChild(listItem2);

// let listItem3 = document.createElement("li");
// listItem3.innerHTML = "Nariyal";
// UnorderedList.appendChild(listItem3);

// document.body.appendChild(UnorderedList);

// let div = document.createElement("div");
// div.innerHTML = "<h1>Hello World</h1>";
// document.body.appendChild(div);

// let parent1 = document.querySelector("#main");

// let sibling1 = parent1.parentElement;
// console.log(sibling1);

// function validateform() {
//   var name = document.myform.name.value;
//   var password = document.myform.password.value;

//   if (name == null || name == "") {
//     alert("Name can't be blank");
//     return false;
//   } else if (password.length < 6) {
//     alert("Password must be at least 6 characters long.");
//     return false;
//   }
// }

// function formval() {
//   var age = document.myForm.age.value;
//   if (age >= 18) {
//     alert("aap gadi chala sakte hai");
//     return;
//   } else {
//     alert("aap nahi chala sakte");
//     return false;
//   }
// }
// document.getElementById("main").style.backgroundColor = "red";

// event listner

//bom in java script
// window.open("https://www.youtube.com/");
// console.log(window.close());
// console.log(window.moveTo());
// console.log(window.resizeTo());
// window.confirm("kuch bhi");

// myFucntion(a,b)=>{
//     return a+b;
// }

// myFucntion(2,4)

// var ninth = {
//   sectionA: {
//     student1: {
//       name: `Shiv Kumar Jha`,
//       branch: `CSE`,
//       roll: 101,
//       session: 2020,
//     },
//   },
//   sectionB: {
//     student2: {
//       name: `Shiv Kumar Jha`,
//       branch: `CSE`,
//       roll: 101,
//       session: 2020,
//     },
//   },
//   sectionC: {
//     student3: {
//       name: `Shiv Kumar Jha`,
//       branch: `CSE`,
//       roll: 101,
//       session: 2020,
//     },
//   },
//   sectionD: {
//     student4: {
//       name: `Shiv Kumar Jha`,
//       branch: `CSE`,
//       roll: 101,
//       session: 2020,
//     },
//   },
// };
// // console.log(ninth.sectionA.student.session);

// for (const key in ninth) {
//   console.log(key, ":", ninth[key]);
// }

// callback function
// function myDisplayer(some) {
//   console.log(some);
// }

// function myCalculator(num1, num2) {
//   let sum = num1 + num2;
//   return sum;
// }
// myDisplayer(myCalculator(5, 5));

// var a = setTimeout(myFunction, 4000);

// function myFunction() {
//   alert("Hello");
// }

// setInterval(date1, 1000);
// function date1() {
//   var d = new Date();
//   document.getElementById("main1").innerHTML =
//     d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
//   document.getElementById("main1").style.backgroundColor = "red";
// }

// const number = 2;
// let promise = new Promise(function (resolve, reject) {
//   if (number > 4) {
//     resolve("Promise Resolved");
//   } else {
//     reject("Promise Rejected");
//   }
// });
// console.log(promise);
let p1 = new Promise((resolve, reject) => {
  console.log("Promise is Pending");
  setTimeout(() => {
    console.log("i am a promise and i am resolved");
    resolve(true);
  }, 5000);
});

let p2 = new Promise((resolve, reject) => {
  console.log("Promise is fullfiled");
  setTimeout(() => {
    console.log("I am promise and i am rejected");
    reject(true);
  }, 3000);
});
p1.then = (value) => {
  console.log(value);
};
