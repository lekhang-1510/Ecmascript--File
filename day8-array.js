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

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumber = numbers.filter((number, index) => {
  return number % 2 === 0;
});
console.log(` Số chẵn lọc từ mãng numbers: ${evenNumber}`);
