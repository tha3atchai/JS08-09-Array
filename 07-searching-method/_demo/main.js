const arr = [2, 5, 10];
const newArr = arr.map(x => x**2);

console.log(arr);
console.log(newArr);

let lengths = ["Bilbo","Gandalf","Nazgul"].map(item => item.length);

console.log(lengths);

const navGuest = [
    "<li>Home</li>",
    "<li>About Us</li>"
];

// const navUser = [<li>Profile</li>, <li>SignOut</li>];

const a = navGuest.map(tag => "<li>Profile</li>");
console.log(a);

const nums = [2, 4, 6, 8];

const sales = [
    {price: 500, discount: 0.1},
    {price: 1000, discount: 0.2},
    {price: 1000, discount: 0.3},
];

// const r = nums.find(item => item === 6); // 6
// const r = nums.find(item => item === 20); // undefined
// console.log(r);

const foundIndex = sales.findIndex(obj => obj.price === 1000);

console.log(foundIndex);
if(foundIndex != -1) {
   const newObj = sales[foundIndex];
   newObj.price = 2000; 
   sales.splice(foundIndex, 1, newObj);
};

console.log(sales);

// console.log(r);
