//BUỔI LÀM BÀI TẬP (24/2)
//BÀI TẬP 1:
// let time = 15;
// const i = Math.floor(time / 2); // làm tròn dưới vd: 10.5 === 10
// while (time > 0) {
//   if (time === i) {
//     console.log("Đã qua nữa thời gian");
//   } else {
//     console.log(`Còn lại ${time} giây`);
//   }
//   time--;
// }
// console.log("Đã hết giờ ");

//BÀI TẬP 2:
let price = Math.ceil(Math.random() * 5000000);
if (price < 100) {
  price = 100;
}
let numOfOder = 5;
let total = 0;
for (i = 1; i <= numOfOder; i++) {
  price;
  total += price;
}
console.log(total);
