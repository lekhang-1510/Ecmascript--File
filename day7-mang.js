//Vị trí bắt đầu từ 0
let fruits = ["Táo", "Xoài", "Cam", "Quất", "Nho", "Chuối"];

//Truy xuất dữ liêu tênmảng[vị trí]
console.log(fruits[1]);

//Đếm có bao nhiêu phần tử bên trong mảng tenmang.lenght
//index (vị trí) nhỏ hơn lenght(độn dài) 1 đơn vị ( index = lenght-1 )

/**
 * 1. Tạo 1 mãng tên là carts
 * 2. Thêm vào mãng carts 8 - 10 món hàng dự định sẽ mua
 * 3. Viết đoạn code để in ra tổng số món hàng trong giỏ hàng
 * 4. Viết đoạn code để in ra món hàng thêm vào đầu tiên và sau cùng
 */

const carts = [
  "Máy ảnh",
  "Ống kính",
  "Pin",
  "Túi",
  "Áo",
  "Quần",
  "Nón",
  "Kính",
  "Giày",
  "Vàng",
];
console.log(`Tổng số món hàng trong giỏ hàng là : ${carts.length}`);
console.log(`Món hàng đầu tiên: ${carts[0]}`);
console.log(`Món hàng cuối cùng : ${carts[carts.length - 1]}`);
