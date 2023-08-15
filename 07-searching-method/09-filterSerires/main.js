
// ให้สร้าง array result ให้ได้ผลลัพธ์ตามเงื่อนไขที่กำหนด โดยใช้ arr.filter


const array = [9, 17, 23, 5];
// ค่าที่มากกว่า 10
const result = array.filter(x => x > 10);

const array1 = [1, 2, 3, 4];
// ค่าที่เป็นเลขคี่
const result1 = array1.filter(x => x%2 != 0);

const array2 = [1, '1', 2, {}];
// ค่าที่ประเภทข้อมูลเป็น Number
const result2 = array2.filter(x => typeof(x) === "number");

const array3 = ['apple', 'banana', 'orange', 'pineapple', 'watermeon'];
// ค่าที่มีตัวอักษรมากกว่า 6 ตัว
const result3 = array3.filter(x => x.length > 6);

const array4 = [1, -3, 2, 8, -4, 5];
// ค่าที่เป็นเลขบวก
const result4 = array4.filter(x => x > 0);

const array5 = [1, 3, 4, 5, 6, 7, 8];
// ค่าที่หาร 3 ลงตัว
const result5 = array5.filter(x => x%3 === 0);

const array6 = ['Elephant', 'Ant', 'Cat', 'Eagle', 'Zebra'];
// ค่าที่ขึ้นต้นด้วยตัว E
const result6 = array6.filter(x => x[0] === "E");

const array7 = ['APPLE', 'oRanGE', 'PEACH', 'PaPAYA'];
// ค่าที่เป็นตัวพิมพ์ใหญ่ทั้งหมด
const result7 = array7.filter(x => x === x.toUpperCase());

const array8 = ['Krabi', 'Chonburi', 'Buriram', 'Saraburi','Phrae'];
// ค่าที่มีคำว่า buri เป็นส่วนประกอบโดยไม่สนใจตัวพิมพ์เล็กหรือตัวพิมพ์ใหญ่
const result8 = array8.filter(x => x.toLowerCase().includes("buri"));

const array9 = [
  { name: 'Ben', age: 14 },
  { name: 'Phil', age: 18 },
  { name: 'John', age: 32 },
  { name: 'Ann', age: 16 },
  { name: 'Paul', age: 24 }
];
// อายุไม่น้อยกว่า 18 
const result9 = array9.filter(x => x.age >= 18);


const array10 = [
  { id: 1, name: 'Pepsi' },
  { id: 2, name: 'Mirinda' },
  { id: 3, name: 'Coke' },
  { id: 4, name: 'Fanta' },
  { id: 5, name: 'Sprite' }
];
// id ไม่เท่ากับ 4
const result10 = array10.filter(x => x.id !== 4);

const array11 = [
  { name: 'John', birth: '2001-07-31' },
  { name: 'Jack', birth: '1990-06-24' },
  { name: 'Jim', birth: '1984-12-13' },
  { name: 'Jeff', birth: '1996-02-05' },
  { name: 'Joe', birth: '2002-06-13' }
];
// เกิดเดือน 6
const result11 = array11.filter(x => x.birth.startsWith("06", 5));

console.log(result);
console.log(result1);
console.log(result2);
console.log(result3);
console.log(result4);
console.log(result5);
console.log(result6);
console.log(result7);
console.log(result8);
console.log(result9);
console.log(result10);
console.log(result11);