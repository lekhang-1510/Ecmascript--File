/**Bài tập thực hành 1:
 * - Cho 1 biến month, year có kiểu dữ liệu number
 * - Kiểm tra xem:
 *       + Nếu month = 1,3,5,7,8,10,12 thì in ra "Tháng ... có 31 ngày"
 *       + Nếu month = 4,6,9,11 thì in ra "Tháng ... có 30 ngày"
 *       + Nếu month = 2 thì thực hiên tính toán:
 *           Nếu year chia hết cho 4 và year không chia hết cho 100 thì in ra "Tháng 2 có 29 ngày"
 *           Còn không thì in ra "Tháng 2 có 28 ngày"
 *       + Còn lại in ra tháng không hợp lệ
 */
//Khai báo biến month , year
let month = 2;
let year = 2025;

switch (month) {
  // Các tháng có 31 ngày
  case 1:
  case 3:
  case 5:
  case 7:
  case 8:
  case 10:
  case 12: {
    console.log(`Tháng ${month} có 31 ngày`);
    break;
  }
  // Các tháng có 30 ngày
  case 4:
  case 6:
  case 9:
  case 11: {
    console.log(`Tháng ${month} có 30 ngày`);
    break;
  }
  //Xét tháng 2 có 28 hay 29 ngày theo năm (Câu điều kiện if -- else)
  case 2: {
    if (year % 4 === 0 && year % 100 !== 0) {
      console.log("Tháng 2 có 29 ngày");
    } else {
      console.log("Tháng 2 có 28 ngày");
    }
    break;
  }
  // Các tháng còn lại không hợp lệ -- nhập lại ( 1--12)
  default: {
    console.log("Tháng không hợp lệ");
  }
}

/**Bài tập thực hành 2:
 * Trong bài tập thực hành phần switch ... case, có phần tính toán năm nhuận đang sử dụng câu lệnh if...
 * else. Hãy thực hiện:
 *       - Tạo một biến isLeapYear và gán giá trị bằng tính toán
 *       - Kiểm tra xem (sử dụng toán tử 3 ngôi):
 *             + Nếu isLeapYear là true thì in ra "Tháng 2 có 29 ngày"
 *             + Nếu isLeapYear là false thì in ra "Tháng 2 có 28 ngày"
 */

// Nếu month = 2 thì mới thực hiện câu lệnh
if (month === 2) {
  let isLeapYear = year % 4 === 0 && year % 100 !== 0;
  isLeapYear === true
    ? console.log("Tháng 2 có 29 ngày")
    : console.log("Tháng 2 có 28 ngày");
}
