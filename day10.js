// const prompt = require("prompt-sync")();

// const name = prompt("Nhập tên của bạn: ");

// console.log(`Xin chào ${name}`);
/**
 * 1. Tạo một list rỗng (employees)
 * 2. Cho phép người dùng nhập vào từ bàn phím các thông tin:
 *     - name
 *     - email
 *     - phoneNumber
 *     - gender
 *     - position
 *     - salary
 * 3. Tạo 1 biến đếm làm id (giá trin mặc định là 1)
 * 4. Thêm cái object vào list
 * 5. Cho phép người dùng nhập vào số lượng nhân viên muốn thêm vào
 * 6. Tái sử dụng lại đoạn mã trên để tạo mới và thêm những nhân viên đó vào
 */
const prompt = require("prompt-sync")();
let numberOfEmployees = Number(
  prompt("Nhập số lượng nhân viên muốn thêm vào: "),
);
const employees = [];
let id = 1;

for (let i = 0; i < numberOfEmployees; i++) {
  console.log(`\nNhập nhân viên thứ ${i + 1}`);

  // const name = prompt("Nhập name: ");
  // const email = prompt("Nhập email: ");
  // const phoneNumber = prompt("Nhập phone: ");
  // const gender = prompt("Nhập gender: ");
  // const position = prompt("Nhập position: ");
  // const salary = Number(prompt("Nhập salary: "));

  // tạo object employee
  const employee = {
    id,
    name: prompt("Nhập name: "),
    email: prompt("Nhập email: "),
    phoneNumber: prompt("Nhập phone: "),
    gender: prompt("Nhập gender: "),
    position: prompt("Nhập position: "),
    salary: Number(prompt("Nhập salary: ")),
  };

  //tăng id
  id++;

  //push object employee vào mãng employees
  employees.push(employee);
}

//in ra mãng employees
console.log("\nDanh sách nhân viên:");
console.log(employees);

// 7. Nhập để tìm kiếm nhân viên (Tìm theo tên)
//Nhập tên nhân viên cần tìm
const searchName = prompt("Nhập tên nhân viên cần tìm: ");

//Tìm nhân viên trong mảng employees
const foundEmployee = employees.find(
  (employee) => employee.name === searchName,
);

//Nếu foundEmployee = True - Tìm thấy nhân viên
if (foundEmployee) {
  console.log("Nhân viên tìm được: ");
  console.log(foundEmployee);
} else {
  console.log("Không tìm thấy nhân viên! ");
}

// 8. Chỉnh sửa thông tin nhân viên (Nhập vào id nhân viên để sửa thông tin  ) - KO LÀM

// 9. Tìm kiếm tương đối ( includes ), trả về danh sách nhân viên tương ứng (Dùng filter)
// nhập từ khóa tìm kiếm
const keyWord = prompt(
  "Nhập tên cần tìm (trả kết quả tên cần tìm & tên gần giống): ",
);

// lọc nhân viên - toLowerCase(ko phân biệt chữ thường và hoa) - includes(Tìm gần giống keyWord))
const result = employees.filter((employee) =>
  employee.name.toLowerCase().includes(keyWord.toLowerCase()),
);

console.log("Danh sách nhân viên tìm được:");
console.log(result);
