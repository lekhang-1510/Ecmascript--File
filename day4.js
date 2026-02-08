//Tính tổng từ 1---5
/**let sum = 0;
for (let i = 0; i <= 5; i++) {
  sum += i;
}
{
  console.log("Tổng từ (1--5) = " + sum);
}
*/
// Vòng lặp while
/** 
let i = 10;
while (i >= 1) {
  console.log(i);
  i--;
}
  console.log("CHÚC MỪNG NĂM MỚI");
*/
// Tính tổng từ 1---5 ( bằng vòng lặp while)
let i = 1;
let sum = 0;
while (i <= 5) {
  sum += i;
  i++;
}
console.log(`Tổng từ 1--5 = ${sum}`);
