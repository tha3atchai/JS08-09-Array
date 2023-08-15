
// - ให้เขียนฟังก์ชัน squareArr(arr) เพื่อคืนค่า Array ที่มี element เป็นเลขยกกำลังสองของแต่ละ element ใน arr
// - ตัวอย่างผลลัพธ์

const arr = [2, 3, 5, 7, 11];
const newArr = [];
const squareArr = (arr) => {
    arr.forEach((item, idx) => {
       arr[idx] = item**2;
    });
    console.log(arr);
};

squareArr(arr); // [4, 9, 25, 49, 121]

//---------------------------------------------------------

const arr2 = [2, 3, 5, 7, 11];

const squareArr2 = (array) => {
    array.forEach((item) => {
        newArr.push(item);
    });
   console.log(newArr); 
};

squareArr2(arr);