const log = console.log;

log("Learn Array");

// ## Declaration;
// Array Literal;
// element: สมาชิก;
// const friend = ["Money", "Non", "Peakpoon", "Fon"];

// Array Constructor;
// const height = new Array(150, 160, 175);
// log(height);

// ## Access, Modify, Add, Delete;
// Bracket Notation with Index;

// Access
// log(friend[0]);
// log(friend[2]);
// log(friend[-1]); // undefined;
// log(friend[10]); // undefined;

// Update;
// friend[0] = "Gold";
// log(friend);

// friend[1] = "Michael";
// log(friend);

// ถ้าพยายามอัพเดทใน index ที่ไม่มีอยู่ === add;
// friend[-1] = "Pavit";
// log(friend["-1"]);

// Add
// log(friend[3]);
// friend[4] = "Git";
// log(friend);

// // Delete;
// delete friend[2];
// log(friend);
// log(friend[2]);

// ## 3.basic Property and Method of Array;

// <arr>.length;
// log(friend.length);

// friend[5] = "Mix";
// friend[6] = "Mix";
// friend[4] = "Mix";
// friend[friend.length] = "Mix";
// log(friend);
// log(friend.length);

// for (let i = 0; i < friend.length - 1; i++) {
//     // 0,1,2,3,4,5 (length = 6);
//     log(friend[i]);
// };

// for (let i = 0; i < friend.length; i++) {
//     // 0,1,2,3,4,5 (length = 6);
//     log(friend[i]);
// };

// Method CRUD element;

const animals = ["Spider", "Cat", "Elephant"];

// Immutable : ไม่เปลี่ยนแปลงค่า (ถ้าจะเปลี่ยนต้องเขียนทับ);
// Mutable : เปลี่ยนแปลงค่าได้;

let r = animals.push("Dog");
log(animals);
log(r); //4

let s =animals.unshift("Snake", "Mountain Bird");
log(animals);
log(s); //6

let t = animals.pop();
log(animals);
log(t); // Dog

// const uncleHome = ["Bicycle", "Jar", "Dog"];
// const arr = [1, 2, 4];
// const newArr = arr; // Copied By Reference;

// arr[0] = 3;
// console.log(arr[0]);
// console.log(newArr[0]);

// ## 4. Loop;

// for loop

for(let i = 0; i < animals.length; i++) {
    console.log(animals[i]);
};

// for...in (มอง array เป็น object ประเภทหนึ่งได้)

/*
<key>:<value> => <index>:<value>;
const arr = {
    0: "Bird",
    1: "Cat",
    2: "Dog",
};
*/

// ไม่ต้องกำหนด i เอง;
// for(let index in animals) {
//     console.log(index, animals[index]);
// };

// 4C: for...of
for (let element of animals) {
    // 1st: element = "Snake";
    // 2nd: element = "Mountain Bird";
    // 3rd: element = "Spider";
    // 4th: element = "Cat";
    // 5th: element = "Elephant";
    console.log(element);
};

// #################################
// ### Higher Order Function #######
// #################################

// Aside Topic : Higher Order Function;
function add (x, y) {
    return x + y;
};
log(add(5, 6));

// Function Expression : FN as a value;
const a = console.log;
// const b = alert;
// a("Hi");

// สร้าง Function ที่รับ parameter เป็น function
function addAndShow (x, y, fn1) {
    let result = x + y;
    // call ShowFn
    fn1(`result is : ${result}`);
    return result;
};

// function show (result) {
//     console.log(result);
// };

// const fn1 = console.log;

addAndShow(5, 10, console.log);
// fn == console.log;
// fn("result is : ${result}") === console.log("result is : ${result}");  

// Main Fn
// cook : Higher Order Function (ฟังก์ชั่นที่รับฟังก์ขั่นเป็น parameter);
// fn1,fn2,fn3 จะถูกรันก็ต่อเมื่อ cook รันเท่านั้น;

function cook(fn1, fn2, fn3,) {
    fn1();
    fn2();
    fn3();
};

function step1() {
    log("Prepare ingredient");
};

function step2() {
    log("cooking");
};

function step3() {
    log("serve");
};

//call
// cook(step1, step1, step3);
cook(step1, step2, step3);

const item = ["Football", "Bag", "Dish"];

// 4d: forEach;
// SYNTAX : <array>.forEach(FN);
// array == Caller;
// Higher order FN == forEach (รับพารามิเตอร์เป็น FN);

// items.forEach( function () {});
// Callback จะถูกรันตามจำนวนสมาชิก;

// const myFunc = function () {
//     console.log("Hi");
// };
// item.forEach(myFunc);

// function iterateFn(a) {
//     console.log(a);
// };

// const iterateFn = item => console.log(item);
// const iterateFn = element => console.log(element);
// const iterateFn = (a, b, c) => console.log(a, b, c);
const iterateFn = (item, index, array) => console.log(index, item);

item.forEach(iterateFn);
// 1st Loop: ("Football", 0, items) => console.log("Football");
// 2nd Loop: ("Bag", 1, items) => console.log("Bag");
// 3rd Loop: ("Dist", 2, items) => console.log("Dish");

item.forEach((a, b, c) => {
    console.log(`At index ${b}, element = ${a}`);
});