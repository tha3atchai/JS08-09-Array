// จงสร้างฟังก์ชัน clone(arr) เพื่อ return ค่า Array ที่มี element เหมือน arr ทุกตัว

const arr = [1, 2, 3, 4];

const clone = (array) => {
    return array.slice(0);
}; 

// let a = clone(arr);
// a[0] = 5;

console.log(clone(arr));
// console.log(arr);
// console.log(a);