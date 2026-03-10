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
 * 3. Tạo 1 biến đếm làm id (giá trị mặc định là 1)
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
// const name = prompt("Nhập vào name: ");
// const email = prompt("Nhập vào email: ");
// const phoneNumber = prompt("Nhập vào phone: ");
// const gender = prompt("Nhập vào gender: ");
// const position = prompt("Nhập vào position: ");
// const salary = prompt("Nhập vào salary: ");

for (let i = 0; i < numberOfEmployees; i++) {
  console.log(`\nNhân viên thứ ${i + 1}`);
  const employee = {
    id,
    name: prompt("Nhập vào name: "),
    email: prompt("Nhập vào email: "),
    phoneNumber: prompt("Nhập vào phone: "),
    gender: prompt("Nhập vào gender: "),
    position: prompt("Nhập vào position: "),
    salary: prompt("Nhập vào salary: "),
  };

  employees.push(employee);
  id++;
}
console.log("\nDanh sách nhân viên ");
console.log(employees);

// 7. Nhập để tìm kiếm nhân viên (Tìm theo tên)
const searchName = prompt("Nhập nhân viên tìm kiếm: ");
const foundEmployee = employee.find((employee) => employee.name === searchName);
console.log(foundEmployee);
