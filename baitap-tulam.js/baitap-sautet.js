//BÀI TẬP WHITE / BÀI 1
/**console.log(
  'Đếm ngược (Countdown) từ 10 -- 0, sau đó in ra "Chúc mừng năm mới !"',
);
let i = 10;
while (i >= 1) {
  console.log(i);
  i--;
}
console.log("Chúc mừng năm mới !");
*/

//BÀI TẬP 2
// console.log("Tính tổng từ 1 ---10");
// let sum = 0;
// let i = 1;
// while (i <= 10) {
//   sum += i;
//   i++;
// }
// console.log(sum);

// console.log("Bài tập 3: In bảng cửu chương  từ 1 đến 9");
// let i = 1;
// while (i <= 9) {
//   console.log(`\nBảng cửu chương ${i}`);
//   let j = 1;
//   while (j <= 10) {
//     console.log(`${i} x ${j} = ${i * j}`);
//     j++;
//   }
//   i++;
// }

//BÀI TẬP FOR
console.log("In bảng cửu chương từ 1 --- 9 bằng vòng lặp for ");
for (i = 1; i <= 9; i++) {
  console.log(`\nBảng cửu chương ${i}`);
  for (j = 1; j <= 10; j++) {
    console.log(`${i} x ${j} = ${i * j}`);
  }
}
