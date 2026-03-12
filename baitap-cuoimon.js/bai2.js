/**Bài tập 2: Thống kê thời gian nghiên cứu
 *
 * - Bối cảnh: Mỗi cuối tuần, hệ thống sẽ tổng hợp số giờ code/nghiên cứu của một thành viên trong
 * suốt 7 ngày. Yêu cầu: Cho một mảng lưu số giờ làm việc: const workHours = [2, 4, 0, 5, 3, 6, 2];
 *    1. Viết một hàm tính tổng số giờ làm việc trong tuần bằng cách sử dụng vòng lặp for hoặc
 *    for...of.
 *    2. Mở rộng hàm: Nếu ngày nào làm việc từ 5 giờ trở lên, in ra thông báo: " Ngày thứ [i + 1] làm
 *    việc rất năng suất! "
 */
const workHours = [2, 4, 0, 5, 3, 6, 2];
const calculateWorkHours = (workHour) => {
  // Biến sum (lưu tổng số giờ trong tuần)
  let sum = 0;

  // Vòng lặp for - i < chiều dài mãng workHours
  for (let i = 0; i < workHour.length; i++) {
    // Cộng giờ làm từng ngày vào tổng
    sum += workHour[i];

    // Nếu làm từ 5 giờ trở lên -> ngày làm việc năng suất
    if (workHour[i] >= 5) {
      console.log(`Ngày thứ ${i + 1} làm việc rất năng suất! `);
    }
  }

  // In tổng số giờ làm trong tuần
  console.log(`Tổng số giờ làm trong tuần: ${sum}`);
};

// Gọi hàm và truyền mảng workHours vào
calculateWorkHours(workHours);

//Cảm ơn thầy đã xem bài code 🫶
