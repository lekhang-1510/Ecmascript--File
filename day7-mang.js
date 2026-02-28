//Vị trí bắt đầu từ 0
let fruits = ["Táo", "Xoài", "Cam", "Quất", "Nho", "Chuối"];

//Truy xuất dữ liêu (tênmảng[vị trí])
console.log(fruits[1]);

//Đếm có bao nhiêu phần tử bên trong mảng (tenmang.lenght)
//index (vị trí) nhỏ hơn lenght(độ dài) 1 đơn vị ( index = lenght-1 = vị trí cuối cùng )
//

/**
 * 1. Tạo 1 mãng tên là carts
 * 2. Thêm vào mãng carts 8 - 10 món hàng dự định sẽ mua
 * 3. Viết đoạn code để in ra tổng số món hàng trong giỏ hàng
 * 4. Viết đoạn code để in ra món hàng thêm vào đầu tiên và sau cùng
 */
//Rest Parameter
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

//Thêm phần tử vào mảng ==> vào cuối mãng (tenmang.push('ten muon them');)
carts.push("Toán", "Lí", "Hóa", "Sử");
console.log(carts);

//Xóa phần tử cuối ra khỏi mãng (carts.pop())
//Thêm ở đầu (carts.unshift())
//Xóa ở đầu (carts.shift())
//carts.splice ///

/**
 * - Thuộc tính length (Trả về độ dài của mãng)
 * -Phương thức :
 *     + push: Thêm các phần tử vào cuối mãng
 *     + pop: Xóa 1 phần tử ở cuối mãng
 *     + unshift: Thêm phần tử vào đầu mãng
 *     + shift: Xóa phần tử ở đầu mãng
 *     + splice (number bắt đầu thêm hoặc muốn xóa, 0 = không xóa = thêm / > 0 vị trí muốn xóa, "Phần tử muốn thêm vào"... )
 */
// mảng lồng nhau --- search googl thêm -----------------------------------------------------------------------------
const nameRelative = ["Sơn", "Kim", "Như"];
nameRelative.push("Khang");
console.log(`Số người bạn thân là: ${nameRelative.length}`);
console.log(`Tên người bạn đầu là: ${nameRelative[0]}`);

nameRelative.unshift("Đào");
nameRelative.pop();
nameRelative.splice(2, 0, "Khang");
for (let i = 0; i < nameRelative.length; i++) {
  console.log(`Bạn của tôi : ${nameRelative[i]}`);
}
