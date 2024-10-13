interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}


const student1: Student = { 
    firstName: "Favour",
    lastName: "idowu",
    age: 18,
    location: "Canada"
}

const student2: Student = { 
    firstName: "Samuel",
    lastName: "idowu",
    age: 18,
    location: "Silicon Valley"
}

const studentsList: Array<Student> = [student1, student2];
  /**
   * Displays information about students in a table
   */
  export const displayStudents = (students: Array<Student>): void => {
    const table = document.createElement('table');
    const tableHead = document.createElement('thead');
    const headRow = document.createElement('tr');
    const tableBody = document.createElement('tbody');
    headRow.insertAdjacentHTML("beforeend", "<td>firstName</td>");
    headRow.insertAdjacentHTML("beforeend", "<td>Location</td>");
    tableHead.insertAdjacentElement("beforeend", headRow);

    for (const student in students) {
      const bodyRow  = document.createElement('tr');
      bodyRow.insertAdjacentHTML("beforeend",`<td>${student.firstName}</td>`);
      bodyRow.insertAdjacentHTML("beforeend",`<td>${student.location}</td>`);
      tableBody.insertAdjacentElement("beforeend",bodyRow);
    }
    table.insertAdjacentElement("beforeend", tableHead);
    table.insertAdjacentElement("beforeend", tableBody);
    document.body.insertAdjacentElement("beforeend", table);
  }

  displayStudents(studentsList);
  document.title = "Task 0";