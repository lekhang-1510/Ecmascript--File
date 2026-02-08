let i = 1;
while (i <= 9) {
  //console.log("\n");
  console.log("=====================");
  console.log(`| Bảng cưu chương ${i} |`);
  console.log("=====================");
  let j = 0;
  while (j <= 10) {
    console.log(`  ${i} x ${j} = ${i * j}`);
    j++;
  }
  i++;
}
