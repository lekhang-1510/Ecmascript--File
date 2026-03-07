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
let count = Number(prompt("Nhập số lượng nhân viên muốn thêm vào: "));
const employees = [];
let id = 1;
for (let i = 0; i < count; i++) {
  //const prompt = require("prompt-sync")();
  console.log(`Nhập nhân viên thứ ${i + 1}`);

  let name = prompt("Nhập name: ");
  let email = prompt("Nhập email: ");
  let phoneNumber = prompt("Nhập phone: ");
  let gender = prompt("Nhập gender: ");
  let position = prompt("Nhập position: ");
  let salary = prompt("Nhập salary: ");

  const employee = {
    id,
    name,
    email,
    phoneNumber,
    gender,
    position,
    salary,
  };
  id++;
  employees.push(employee);
}
console.log(employees);
