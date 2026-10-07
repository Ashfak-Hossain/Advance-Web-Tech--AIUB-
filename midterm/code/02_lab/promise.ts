interface Student {
  name: string;
  age: number;
  grade: number;
}

// JavaScript continues while the timer is waiting.
function observeAsyncExecution(): Promise<void> {
  console.log('\n1. Asynchronous execution');
  console.log('First');

  const timerFinished = new Promise<void>((resolve) => {
    setTimeout(() => {
      console.log('Second');
      resolve();
    }, 1000);
  });

  console.log('Third');
  return timerFinished;
}

// Promise<Student> means that the Student will arrive later.
function getStudentInfo(requestSucceeded: boolean): Promise<Student> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (requestSucceeded) {
        resolve({
          name: 'Ashfak',
          age: 24,
          grade: 3.03,
        });
      } else {
        reject(new Error('Could not load the student'));
      }
    }, 1000);
  });
}

// A Promise can be consumed with .then().
function demonstrateThen(): Promise<void> {
  console.log('\n2. Consuming a Promise with .then()');

  return getStudentInfo(true).then((student) => {
    console.log('Promise resolved:', student);
  });
}

// await provides the resolved Student value.
async function showStudent(requestSucceeded: boolean): Promise<void> {
  console.log('\n3. Consuming a Promise with async/await');

  try {
    console.log('Loading...');

    const student = await getStudentInfo(requestSucceeded);

    console.log('Name:', student.name);
    console.log('Age:', student.age);
    console.log('Grade:', student.grade);
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error('Error:', error.message);
    }
  } finally {
    console.log('Finished');
  }
}

async function main(): Promise<void> {
  await observeAsyncExecution();
  await demonstrateThen();

  // Change true to false to test the rejected Promise and catch block.
  void showStudent(true);

  // This appears before the student because showStudent is still waiting.
  console.log('Program continues...');
}

void main();
