/**
 * Vòng lặp while dùng khi không biết trước số lần lặp, chỉ biết điều kiện dừng (CÒN ĐÚNG thì CÒN LẶP)
 * Cú pháp:
 * while (điều kiện) {
 * //code được lặp}
 */

//BÀI TẬP 1 (easy) - biến i
console.log("In ra các số từ 1 -- 10 bằng vòng lặp while");
let i = 1;
while (i <= 10) {
  console.log(i);
  i++;
}

//BÀI TẬP 2 (easy) - biến j
console.log("In ra các số chẵn từ 2 -- 20");
let j = 1;
while (j <= 20) {
  if (j % 2 === 0) {
    console.log(j);
  }
  j++;
}

//BÀI TẬP 3 (easy) - biến a
console.log("In ra các số lẽ nhỏ hơn 20");
let a = 1;
while (a < 20) {
  if (a % 2 != 0) {
    console.log(a);
  }
  a++;
}

//BÀI TẬP 4 (easy) - biến b
console.log("In ra các số từ 10 về 1");
let b = 10;
while (b >= 1) {
  console.log(b);
  b--;
}

//BÀI TẬP 5 (easy) - biến q
console.log("Tính tổng các số từ 1 -- 100 bằng while ");
let q = 1;
let sum = 0;
while (q <= 100) {
  sum += q;
  q++;
}
console.log(sum);
