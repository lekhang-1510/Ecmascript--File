// const allProvinces = [
//   "Bạc Liêu",
//   "Sóc Trăng",
//   "Cà Mau",
//   "Vĩnh Long",
//   "Cần Thơ",
//   "An Giang",
// ];
// allProvinces.forEach((allprovince, index) => {
//   console.log(`Tên tỉnh ${index}: ${allprovince}`);
// });

//Filter
/**
 * 1. Tạo 1 mãng gồm 10 số nguyên dương
 * 2. Dùng filter lặp qua và lọc ra những số nguyên nào là số chẵn
 
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumber = numbers.filter((number) => number % 2 === 0);
console.log(` Số chẵn lọc từ mảng numbers: ${evenNumber}`);
*/
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const isAllOddNumber = numbers.every((number) => number % 2 !== 0);
console.log(isAllOddNumber);

/**
 * 1. Tạo 1 mảng chứ điểm trung bình của 1 lớp ( 10 bạn, thang điểm 10)
 * 2. Dùng arry method tích hợp để:
 *     - Kiểm tra xem lớp đó, có bạn nào dưới trung bình hay không (<5)
 *     - Kiểm tra xem lớp đó, toàn bộ lớp có qua môn hay không (>=5)
 */
const scores = [7, 4, 7.5, 8, 6.5, 4.5, 6, 9, 6.5, 8.5];
const failScores = scores.some((score) => score < 5);
console.log(
  failScores ? "Có bạn dưới trung bình" : "Không có bạn nào dưới trung bình",
);
const highScores = scores.every((score) => score >= 5);
console.log(highScores ? "Toàn bộ lớp qua môn" : "Qua môn không hết lớp");
