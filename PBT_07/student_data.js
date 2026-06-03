
const students = [
    { name: "An", math: 8, physics: 7, cs: 9, gender: "M" },
    { name: "Bình", math: 6, physics: 9, cs: 7, gender: "F" },
    { name: "Chi", math: 9, physics: 6, cs: 8, gender: "F" },
    { name: "Dũng", math: 5, physics: 5, cs: 6, gender: "M" },
    { name: "Em", math: 10, physics: 8, cs: 9, gender: "F" },
    { name: "Phong", math: 3, physics: 4, cs: 5, gender: "M" },
    { name: "Giang", math: 7, physics: 7, cs: 7, gender: "F" },
    { name: "Huy", math: 4, physics: 6, cs: 3, gender: "M" },
];

let countGioi = 0, countKha = 0, countTB = 0, countYeu = 0;
let bestStudent = students[0];
let worstStudent = students[0];
let totalMath = 0, totalPhysics = 0, totalCS = 0;
let totalAvgMale = 0, countMale = 0;
let totalAvgFemale = 0, countFemale = 0;

console.log("| STT | Tên    | TB   | Xếp loại    |");
console.log("|-----|--------|------|-------------|");

for (let i = 0; i < students.length; i++) {
    let s = students[i];

    let rawAvg = (s.math * 0.4) + (s.physics * 0.3) + (s.cs * 0.3);
    s.avg = Number(rawAvg.toFixed(1));

    if (s.avg >= 8.0) {
        s.rank = "Giỏi";
        countGioi++;
    } else if (s.avg >= 6.5) {
        s.rank = "Khá";
        countKha++;
    } else if (s.avg >= 5.0) {
        s.rank = "Trung bình";
        countTB++;
    } else {
        s.rank = "Yếu";
        countYeu++;
    }

    let stt = String(i + 1).padEnd(3, ' ');
    let name = s.name.padEnd(6, ' ');
    let avgStr = String(s.avg).padEnd(4, ' ');
    let rankStr = s.rank.padEnd(11, ' ');

    console.log(`| ${stt} | ${name} | ${avgStr} | ${rankStr} |`);

    if (s.avg > bestStudent.avg) bestStudent = s;
    if (s.avg < worstStudent.avg) worstStudent = s;

    totalMath += s.math;
    totalPhysics += s.physics;
    totalCS += s.cs;

    if (s.gender === "M") {
        totalAvgMale += s.avg;
        countMale++;
    } else {
        totalAvgFemale += s.avg;
        countFemale++;
    }
}

console.log("\n--- THỐNG KÊ KẾT QUẢ ---");
console.log(`- Số lượng xếp loại: Giỏi (${countGioi}), Khá (${countKha}), Trung bình (${countTB}), Yếu (${countYeu})`);
console.log(`- SV cao điểm nhất: ${bestStudent.name} (${bestStudent.avg} đ)`);
console.log(`- SV thấp điểm nhất: ${worstStudent.name} (${worstStudent.avg} đ)`);

console.log("\n--- ĐIỂM TRUNG BÌNH TOÀN LỚP ---");
let totalStudents = students.length;
console.log(`- Môn Toán: ${(totalMath / totalStudents).toFixed(1)}`);
console.log(`- Môn Lý: ${(totalPhysics / totalStudents).toFixed(1)}`);
console.log(`- Môn CS: ${(totalCS / totalStudents).toFixed(1)}`);

console.log("\n--- ĐIỂM TRUNG BÌNH THEO GIỚI TÍNH ---");
let avgMale = countMale > 0 ? (totalAvgMale / countMale).toFixed(1) : 0;
let avgFemale = countFemale > 0 ? (totalAvgFemale / countFemale).toFixed(1) : 0;
console.log(`- Nam (M): ${avgMale}`);
console.log(`- Nữ (F): ${avgFemale}`);