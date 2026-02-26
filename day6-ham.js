/**function myFunc(a) {
  console.log(a);
}
//a tham trị - biến trung gian
myFunc(5);//5,6,9,10 là tham số truyền vào
myFunc(6);
myFunc(9);
myFunc(10);
*/
/**
 * 1. Tạo 1 hàm tên là printName
 * 2. có 1 tham số tên là name
 * 3.Trong hàm, in ra lời chào name đó
 */
function printName(name) {
  console.log(`Xin chào ${name}`);
}
printName("khang");
printName("kim");
printName("sơn");

/**
 * 1. Tạo 1 hàm tên là introduce
 * 2. Hàm này sẽ nhận 3 tham số: name, age, address
 * 3. In ra câu: Xin chào, tôi tên là..., năm nay tôi...tuổi, Tôi đang sinh sống ở...
 */
function introduce(name, age, address) {
  console.log(
    `Xin chào, tôi tên là ${name}, năm nay tôi ${age}, Tôi đang sinh sống ở ${address} `,
  );
}

introduce("khang", 25, "TP Hồ Chí Minh");
