/**BÀI TẬP 1:   Quản lý thiết bị
 * 
 * - Bối cảnh: Lab cần một hàm kiểm tra xem một yêu cầu mượn thiết bị (ví dụ: Arduino, Raspberry
 * Pi) có hợp lệ hay không. Yêu cầu: Viết một hàm checkBorrowRequest(deviceName, quantity,
 * availableStock) nhận vào 3 tham số.

 *     + Nếu số lượng yêu cầu (quantity) lớn hơn số lượng đang có sẵn (availableStock), in ra màn
 *       hình: " Yêu cầu từ chối: Không đủ thiết bị [deviceName] ";.
 *     + Nếu số lượng yêu cầu nhỏ hơn hoặc bằng 0, in ra: " Yêu cầu không hợp lệ! ".
 *     + Nếu hợp lệ, in ra: " Đã duyệt mượn [quantity] [deviceName] ".
 */

const checkBorrowRequest = (deviceName, quantity, availableStock) => {
  // Trường hợp 1: Số lượng yêu cầu lớn hơn số lượng có sẵn
  if (quantity > availableStock) {
    console.log(`Yêu cầu từ chối: Không đủ thiết bị ${deviceName}`);

    // Trường hợp 2: Số lượng yêu cầu không hợp lệ
  } else if (quantity <= 0) {
    console.log("Yêu cầu không hợp lệ! ");

    // Trường hợp 3: Yêu cầu hợp lệ -> duyệt mượn
  } else {
    console.log(`Đã duyệt mượn ${quantity} ${deviceName}`);
  }
};

// Test hàm
checkBorrowRequest("Arduino", 5, 2);
//checkBorrowRequest("Sensor", -1, 10);
//checkBorrowRequest("Raspberry Pi", 2, 5);

/**CÁCH 2: if - return
 * const checkBorrowRequest = (deviceName, quantity, availableStock) => {
 * if (quantity <= 0) return console.log("Yêu cầu không hợp lệ!");
 *
 * if (quantity > availableStock)
 *   return console.log(`Yêu cầu từ chối: Không đủ thiết bị ${deviceName}`);
 *
 * console.log(`Đã duyệt mượn ${quantity} ${deviceName}`);
 * };
 */

//Cảm ơn thầy đã xem bài code 🫶
