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
 */
const prompt = require("prompt-sync")();
const employees = [];

let name = prompt("Nhập name: ");
let email = prompt("Nhập email: ");
let phoneNumber = prompt("Nhập phone: ");
let gender = prompt("Nhập gender: ");
let position = prompt("Nhập position: ");
let salary = prompt("Nhập salary: ");

const id = 1;
const employees2 = {
  id: id,
  name: name,
  email: email,
  phoneNumber: phoneNumber,
  gender: gender,
  position: position,
  salary: salary,
};
employees.push(employees2);
console.log(employees);
