let subject1 = parseInt(prompt("Enter your mark for subject 1 : "));
let subject2 = parseInt(prompt("Enter your mark for subject 2 : "));
let subject3 = parseInt(prompt("Enter your mark for subject 3 : "));
let subject4 = parseInt(prompt("Enter your mark for subject 4 : "));
let subject5 = parseInt(prompt("Enter your mark for subject 5 : "));

// Calculate total Marks
let total = subject1 + subject2 + subject3 + subject4 + subject5;

// Calculate Average
let average = total / 5;

// Determine Grade
if (average >= 90 && average <= 100) {
  console.log("Grade A+");
} else if (average >= 80) {
  console.log(" Grade A");
} else if (average >= 70) {
  console.log("Grade B");
} else if (average >= 60) {
  console.log("Grade C");
} else if (average >= 50) {
  console.log("Grade D");
} else {
  console.log("Grade E");
}

console.log("total Marks: " + total);
console.log("Avarage Marks: " + total / 5);
