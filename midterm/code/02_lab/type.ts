interface Student {
  name: string;
  age: number;
  grade: number;
}

const studentName: string = 'Ashfak';
const studentAge: number = 24;
const studentGrade: number = 3.03;

console.log('Name:', studentName);
console.log('Age:', studentAge);
console.log('Grade:', studentGrade);

const a: number = 20;
const b: number = 30;
const sum: number = a + b;
console.log('Sum:', sum);

console.log('Addition:', a + b);
console.log('Subtraction:', a - b);

function getStudentName(): string {
  return 'Ashfak';
}

function getStudentAge(): number {
  return 24;
}

function getStudentGrade(): number {
  return 3.03;
}

function getStudentInfoSync(): Student {
  const student: Student = {
    name: getStudentName(),
    age: getStudentAge(),
    grade: getStudentGrade(),
  };

  return student;
}

console.log(getStudentInfoSync());
