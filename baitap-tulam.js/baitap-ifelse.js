/**
 * Điều kiện IF - ELSE
 * if (điều kiện){
 *  code -chạy khi điều kiện true}
 * else {
 * code - chạy khi điều kiện false}
 */

/**
 * Điều kiện if - elsr if - else
 * if (điều kiện 1){
 *    code - chạy khi điều kiện 1 true}
 * else if (điều kiện 2){
 *    code - chạy khi điều kiện 2 true}
 * else {
 *    code - chạy các điều kiện còn lại }
 */

//BÀI TẬP 1 (easy) - biến n
console.log("Kiểm tra số âm / dương / bằng 0 ");
//khai báo n
let n = 9;
if (n > 0) {
  console.log(`${n} là số dương`);
} else if (n < 0) {
  console.log(`${n} là số âm `);
} else {
  console.log(`${n} bằng 0`);
}

//BÀI TẬP 2 ( easy) - biến m
console.log("Kiểm tra chẵn / lẻ");
//khai báo m
let m = -90;
if (m < 0) {
  if (m % 2 === 0) {
    console.log(`${m} là số chẳn âm`);
  } else {
    console.log(`${m} là số lẽ âm`);
  }
} else if (m > 0) {
  if (m % 2 === 0) {
    console.log(`${m} là số chẳn dương`);
  } else {
    console.log(`${m} là số lẽ dương`);
  }
} else {
  console.log(`${m} là số 0`);
}

//BÀI TẬP 3 (medium - trung bình) - biến a,b
console.log("So sánh 2 số a và b");
// khai báo a,b
let a = 9;
let b = 4;
if (a > b) {
  console.log(`${a} lớn hơn ${b}`);
} else if (a < b) {
  console.log(`${a} nhỏ hơn ${b}`);
} else {
  console.log(`${a} bằng ${b}`);
}

//BÀI TẬP 4 (medium) - biến avaragescore - điểm trung bình
console.log("Xếp loại điểm 0 - 10 ");
//khai báo biến điểm trung bình
let averageScore = 9;
if (averageScore >= 8) {
  console.log("Học sinh giỏi");
} else if (averageScore >= 6.5) {
  console.log("Học sinh khá");
} else if (averageScore >= 5) {
  console.log("Học sinh trung bình");
} else {
  console.log("Học sinh yếu");
}

/**BÀI TẬP 5 (medium) - biến year
 * Logic chuẩn:
 * -year chia hết cho 400 --- nhuận
 * -year chia hết cho 4 nhưng không chia hết cho 100 -- nhuận
 * -Còn lại là năm không nhuận
 */
console.log("Kiểm tra năm nhuận ");
// khai báo biến year
let year = 2000;
if (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)) {
  console.log(`Năm ${year} là năm nhuận`);
} else {
  console.log(`Năm ${year} là năm không nhuận`);
}

//BÀI TẬP 7 (difficult) - biến x, y ,z
console.log(`Nhập 3 cạnh x, y , z --- kiểm tra:
  - Có phải tam giác
  - Nếu có -- Tam giác đều / cân / vuông / thường`);
// khai báo 3
let x = 5;
let y = 3;
let z = 4;
// điều kiện để thành 1 tam giác
if (x + y > z && y + z > x && z + x > y) {
  console.log("Đây là tam giác");
  // tam giác đều khi có 3 cạnh bằng nhau
  if (x === y && y === z) {
    console.log("Tam giác đều");
    // tam giác cân khi có 2 cạnh bằng nhau
  } else if (x === y || y === z || z === x) {
    console.log("Tam giác cân");
    //Tam giác vuông khi thỏa định lí Pythagoras x**2 + y**2 = z**2 ( xét cạnh lớn nhất 2 cạnh nhỏ **2 = cạnh lớn **2)
  } else if (
    x ** 2 + y ** 2 === z ** 2 ||
    x ** 2 + z ** 2 === y ** 2 ||
    z ** 2 + y ** 2 === x ** 2
  ) {
    console.log("Tam giác vuông");
  } else {
    console.log("Tam giác thường");
  } // điều kiện không dũ để hình thành 1 tam giác ---> không phải tam giác
} else {
  console.log("KHÔNG phải tam giác");
}
