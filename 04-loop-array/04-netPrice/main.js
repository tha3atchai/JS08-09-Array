// - จงสร้างตัวแปร summary โดยใช้ค่าจากตัวแปร sales
// - netPrice = price x discount (ถ้าไม่มี discount ให้ถือว่า netPrice = price)

const sales = [
  { price: 1000, discount: 0.1 },
  { price: 500, discount: 0.05 },
  { price: 100 }
];

// const summary = [
//   { netPrice: 900 }, 
//   { netPrice: 475 },
//   { netPrice: 100 }
// ];

let summary = [];

sales.forEach((item) => {
    let netPrice = 0; 
    (item.discount)? netPrice = item.price - (item.price * item.discount) : netPrice = item.price;
    summary.push({netPrice});
});

console.log(summary);

// obj = {price: 1000, discount: 0.1};
// sales.forEach((obj) => {
//     let newPrice = obj.price * (1 - (obj.discount || 0));
//     newArr.push({newPrice});
// });

// sales.forEach(obj => newArr.push({ newPrice : obj.price * (1 - (obj.discount || 0))}));
