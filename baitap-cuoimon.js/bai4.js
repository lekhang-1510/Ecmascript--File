// Bài tập 4: Tổng hợp điểm số
// Bối cảnh: Sau các bài test kỹ năng, mỗi học viên sẽ có một bảng điểm cho từng phần (Git,
// HTML/CSS, JS). Yêu cầu: Cho mảng kết quả sau:
const examResults = [
  { skill: "Git/GitHub", score: 8.0 },
  { skill: "HTML/CSS", score: 9.0 },
  { skill: "JavaScript", score: 7.5 },
  { skill: "ReactJS", score: 8.5 },
  { skill: "NodeJS", score: 7.0 },
  { skill: "Docker", score: 6.5 },
  { skill: "Python", score: 8.0 },
  { skill: "Machine Learning", score: 7.5 },
];

// 10. Chỉ sử dụng phương thức reduce(), hãy viết đoạn code tính điểm trung bình của cả 3 kỹ
// năng trên (Git, HTML/CSS, JS)

// Dùng reduce để tính tổng điểm của 3 kĩ năng trên
const totalScore = examResults.reduce((sum, item) => {
  const { skill, score } = item;
  if (
    skill === "Git/GitHub" ||
    skill === "HTML/CSS" ||
    skill === "JavaScript"
  ) {
    return sum + score;
  }
  return sum;
}, 0);

// Tính điểm trung bình
const average = totalScore / 3;

// 11. Trả về kết quả đã được làm tròn đến 1 chữ số thập phân.

const result = Number(average.toFixed(1));

console.log("Điểm trung bình 3 kỹ năng:", result);

//Cảm ơn thầy đã xem bài code 🫶
