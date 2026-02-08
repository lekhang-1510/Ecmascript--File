/**Bài tập thực hành: điều kiện if/else(else if)
 * -Cho 1 biến sleepHours có kiểu dữ liệu number
 * -Kiểm tra xem:
 *     +Nếu sleepHours < 5 thì in ra " Rấ buồn ngũ vì hôm qua ngũ chỉ có ... tiếng"
 *     +Nếu sleepHours >= 5 và sleepHours < 7 thì in ra " Hơi mệt vì hôm qua ngũ chỉ có"
 */
/** 
let sleepHours = 8;
if (sleepHours > 0) {
  if (sleepHours < 5) {
    console.log(`Rất buồn ngũ vì hôm qua ngũ chỉ có ${sleepHours} tiếng`);
  } else if (sleepHours >= 5 && sleepHours < 7) {
    console.log(`Hơi mệt vì hôm qua ngũ chỉ có ${sleepHours} tiếng`);
  } else if (sleepHours >= 7 && sleepHours < 9) {
    console.log(`Tỉnh táo vì hôm qua ngũ đũ ${sleepHours} tiếng`);
  } else {
    console.log(`Nhứt đầu vì hôm qua ngũ tận ${sleepHours} tiếng `);
  }
} else if (sleepHours < 0) {
  console.log("Giờ ngũ không được âm");
}
*/

let month = 2;
switch (month) {
  case 1:
  case 3:
  case 5:
  case 7:
  case 8:
  case 10:
  case 12:
    console.log(`Tháng ${month} có 31 ngày`);
    break;
  case 4:
  case 6:
  case 9:
  case 11:
    console.log(`Tháng ${month} có 30 ngày`);
    break;
  case 2: {
    console.log(`Tháng ${month} có 29 ngày`);
    break;
  }
  default: {
    console.log("Tháng không hợp lệ");
  }
}
