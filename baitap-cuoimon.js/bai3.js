/** Bài tập 3: Chuẩn hóa dữ liệu dự án
 * Bối cảnh: Khi lấy dữ liệu từ server về, tên các dự án đôi khi không viết hoa chữ cái đầu. Yêu
 * cầu: Cho danh sách các dự án sau:*/

const projects = [
  { id: 1, name: "smart home", status: "completed" },
  { id: 2, name: "auto watering", status: "in-progress" },
  { id: 3, name: "weather stationstation", status: "planned" },
  { id: 4, name: "leetcode clone platform", status: "in-progress" },
  { id: 5, name: "excode landing page", status: "completed" },
  { id: 6, name: "custom mechanical keyboard", status: "planned" },
  { id: 7, name: "ai face recognition", status: "in-progress" },
  { id: 8, name: "smart traffic light", status: "completed" },
];
//10. Sử dụng map() để tạo ra một mảng mới, trong đó tên của tất cả các dự án đều được viết
//hoa toàn bộ (ví dụ: "SMART HOME").

// Tạo mảng mới với tên project viết hoa toàn bộ
const upperCaseProjects = projects.map((project) => {
  const { name } = project;
  return {
    ...project,
    name: name.toUpperCase(),
  };
});
console.log(upperCaseProjects);

//11. Sử dụng filter() để lấy ra một mảng chỉ chứa các dự án đang thực hiện (status là "in-progress").
// Lấy các project đang thực hiện
const inProjects = projects.filter(
  (project) => project.status === "in-progress",
);
console.log(inProjects);

//Cảm ơn thầy đã xem bài code 🫶
