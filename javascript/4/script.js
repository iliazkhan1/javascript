function calculateGrade(marks) {
    let sum = 0;
    for (let mark of marks) {
      sum += mark;
    }
  
    let average = sum / marks.length;
  
    let grade;
    if (average >= 0 && average <= 70) {
      grade = "D";
    } else if (average >= 71 && average <= 80) {
      grade = "C";
    } else if (average >= 81 && average <= 90) {
      grade = "B";
    } else if (average >= 91 && average <= 100) {
      grade = "A";
    } else {
      grade = "Invalid Marks";
    }
  
    console.log("Sum:", sum);
    console.log("Average:", average);
    console.log("Grade:", grade);
  }

  let studentMarks = [85, 92, 78, 95, 88];
  calculateGrade(studentMarks);
  
  