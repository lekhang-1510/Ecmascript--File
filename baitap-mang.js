/**
 * Bài 1 (Mức độ Cơ bản): Đếm số lượng test case đạt chuẩn bộ nhớ
 * Mô tả: Khi chấm điểm một bài nộp, hệ thống sẽ ghi nhận lại lượng bộ nhớ (tính bằng Megabyte - MB)
 * mà mỗi test case tiêu thụ, lưu thành một mảng các con số. Mỗi bài toán sẽ có một giới hạn bộ nhớ
 * cho phép (Memory Limit). Viết hàm countValidCases(memoryUsages,limit) để đếm xem có bao nhiêu
 * test case đã chạy dưới hoặc bằng mức giới hạn bộ nhớ này.
 */
//Khai báo hàm countValidCases với 2 tham số là:mãng memoryUsages và limit
const countValidCases = (memoryUsages, limit) => {
  // Tạo biến rổng để lưu các phần tử phần tử trong mãng memoryUsages <= limit
  let validCases = [];

  // tạo biến count đếm số test case thỏa điều kiện
  let count = 0;

  //Vòng lặp đếm các phẩn tử thỏa đk
  for (let i = 0; i < memoryUsages.length; i++) {
    if (memoryUsages[i] <= limit) {
      count++;
      validCases.push(memoryUsages[i] + "MB");
    }
  }
  console.log(
    `Số test case đã chạy dưới hoặc bằng ${limit}MB: là ${count} (${validCases})`,
  );
  return count;
};
countValidCases([32, 45, 28, 50, 64, 20], 40);
