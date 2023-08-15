
// จงเขียนฟังก์ชัน filterRange(arr, a, b) เพื่อ return array ที่ประกอบด้วย element ของ arr ที่มีค่าอยู่ระหว่าง a กับ b

const nameList = [ 
    {id: 1, name: "one"},
    {id: 2, name: "two"},
    {id: 3, name: "three"},
    {id: 4, name: "four"},
    {id: 5, name: "five"},
    {id: 6, name: "six"},
];

const filterRange = (arr, a, b) => arr.filter(x => x.id >= a && x.id <= b);

const array = filterRange(nameList, 2, 5);

console.log(array);