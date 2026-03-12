// Bài tập 5: Thiết kế bộ lọc thành viên
// Bối cảnh: ExCode đang cần tìm các bạn có định hướng làm Web (Frontend/Backend) để ghép
// vào một nhóm dự án mới. Yêu cầu: Cho mảng danh sách các bạn đăng ký:

const candidates = [
  { name: "An", skills: ["C++", "Python"], role: "AI" },
  { name: "Bình", skills: ["HTML", "CSS", "JavaScript"], role: "Frontend" },
  { name: "Châu", skills: ["NodeJS", "MongoDB"], role: "Backend" },
  { name: "Dương", skills: ["Python", "TensorFlow"], role: "AI" },
  { name: "Trung", skills: ["HTML", "CSS", "ReactJS"], role: "Frontend" },
  { name: "Thảo", skills: ["NodeJS", "Express", "Docker"], role: "Backend" },
  { name: "Hải", skills: ["Figma", "UI/UX"], role: "Design" },
  {
    name: "Linh",
    skills: ["Python", "Pandas", "Scikit-Learn"],
    role: "Data Science",
  },
];

// Viết một hàm buildWebTeam(data) xử lý mảng trên để:
// 1. Lọc ra những ứng viên có role là "Frontend" hoặc "Backend".

const buildWebTeam = candidates.filter((data) => {
  const { role } = data;
  return role === "Frontend" || role === "Backend";
});
console.log("\n===== Danh sách WebTeam (Frontend & Backend) =====");
console.log(buildWebTeam);
console.log("==================================================");

// 2. Trả về một mảng chỉ chứa tên của những ứng viên đó, kèm theo lời chào. Kết quả mong
// đợi: ["Chào Bình, mời bạn vào team Web!", "Chào Châu, mời bạn vào team Web!"].

// 2. Tạo mảng lời chào
const welcomeMessages = buildWebTeam.map((data) => {
  const { name } = data;
  return `Chào ${name}, mời bạn vào team Web! `;
});

console.log("\n===== Lời chào thành viên =====");
console.log(welcomeMessages);
console.log("================================");

//Cảm ơn thầy đã xem bài code 🫶
