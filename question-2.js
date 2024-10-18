const students = [
  { name: "Alice", score: 42 },
  { name: "Bob", score: 55 },
  { name: "Charlie", score: 68 },
  { name: "David", score: 48 },
  { name: "Eve", score: 91 },
];

// เริ่มเขียนโค้ดตรงนี้

let result = students
  .filter((students) => students.score > 50)
  .map((students) => (students.score = students.score * 1.1))
  .reduce((acc, cur) => {
    return acc + cur;
  }, 0);

console.log(`Total score is ${result}`);

