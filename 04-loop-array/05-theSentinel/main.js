let x = "";
let arr = [];

do {
  x = prompt("Enter your number") || ""; 
  if(x.trim() === "" || isNaN(x)) break;  
  arr.push(x);
} while (1);

let sum = 0;
arr.forEach(item => sum += +item);

console.log(sum);
