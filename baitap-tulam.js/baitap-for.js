/**Vòng lặp For: Dùng biết trước số lần lặp lại
 * CÚ PHÁP:
 * for (giá_trị_bắt_đầu; điều_kiện; bước_nhảy){
 *        code chạy mỗi dòng
 * }
 */
//BÀI TẬP 1 (easy)--  biến i
console.log("In các số từ 1--20");
for (let i = 1; i <= 20; i++) {
  console.log(i);
}

//BÀI TẬP 2 (easy) - biến j
console.log("In các số chia hết cho 3 từ 1--30");
for (let j = 1; j <= 30; j++) {
  if (j % 3 === 0) {
    // phải có if(Điều kiện){lệnh};
    console.log(j);
  }
}

//BÀI TẬP 3 (Difficult) - Biến k
let sum = 0;
console.log("Tính tổng các số chẵn từ 1--50");
for (k = 1; k <= 50; k++) {
  if (k % 2 === 0) {
    sum += k;
  }
}
console.log(sum);

//BÀI TẬP 4 (Difficult) - Biến l
console.log(`Cho mảng:
    let numbers = [3, 7, 2, 9, 5 ]
    Tìm số lớn nhất`);
//khai báo biến chứa max và biến numbers mảng
let numbers = [3, 7, 2, 9, 5];
let max = numbers[0]; // gán giá trị đầu tiên làm max
for (let l = 1; l < numbers.length; l++) {
  if (
    numbers[l] > max
  ) // numbers[l] = l chạy vòng lặp các giá trị trong mảng numbers
  // gán giá trị max
  {
    max = numbers[l];
  }
}
console.log(max);
// cần chú ý điều kiện , gán biến max = number[l] sau khi so sánh

//BÀI TẬP 5 (difficult) - Biến a ,b
console.log("In bảng cửu chương từ 1--9");
for (a = 1; a <= 9; a++) {
  console.log(`\nBảng cửu chương ${a}`);
  for (b = 1; b <= 10; b++) {
    console.log(`${a} x ${b} = ${a * b}`);
  }
}

//BÀI TẬP 6 (advanced) nâng cao - biến s
console.log(`Vẽ tam giác
         *
        ***
       ****
       *****`);
let line = "";
for (let s = 1; s <= 5; s++) {
  line += "*";
  console.log(line);
}
