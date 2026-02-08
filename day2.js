//var name = "Nguyen van A"; // khai báo biến var - in hết ra tất cả các biến - ko nên dùng
//console.log(name);

//khai báo let = không dc khai báo lại, cho phép gán lại giá trị khác,biến có thể thay đổi
// khai báo const = không dc gán lại , biến cố định
// quy tắt đặt tên biến: không bắt đầu bằng số , khoảng trắng, kí tự đặt biệt (trừ $ và _), không trùng từ khóa
const FULLNAME = "LÊ TIỂU KHANG";
const BIRTHDAY = "15/11/2001";
const HOMETOWN = "Cà Mau";
let currentAddress = "TP HCM";
let objective = "Biết thiết kế giao diện website và ứng dụng";
console.log(typeof FULLNAME);

console.log(`Họ và tên: ${FULLNAME}`); // phải có dấy phẩy ,sử dụng ` và $
console.log(`Ngày tháng năm sinh:  ${BIRTHDAY}`);
console.log(`Quê quán: ${HOMETOWN}`);
console.log(`Nơi ở hiện tại: ${currentAddress}`);
console.log(`Mục tiêu 2026: ${objective}`);

//Toán tử number1 và number2
let number1 = 8;
let number2 = 2;

console.log(`Phép tính ${number1} + ${number2} = ${number1 + number2}`);
console.log(`Phép tính ${number1} - ${number2} = ${number1 - number2}`);
console.log(`Phép tính ${number1} * ${number2} = ${number1 * number2}`);
console.log(`Phép tính ${number1} / ${number2} = ${number1 / number2}`);
