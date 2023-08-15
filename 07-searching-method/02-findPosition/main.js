// จงหา array ของตำแหน่ง (index) ของ 'a' ใน alphabets

const alphabets = ['a', 'b', 'a', 'c', 'a', 'd'];
// expexted result: [0, 2, 4]

let result = [];

alphabets.forEach((item, idx) => (item === "a")? result.push(idx): null);

console.log(result);


