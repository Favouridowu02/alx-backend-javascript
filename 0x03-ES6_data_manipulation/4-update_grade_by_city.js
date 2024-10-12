export default function updateStudentGradeByCity(arr = [], city = '', newGrades = []) {
  /**
    * If a student does not have a grade in newGrades the final grade should be N/A
    * the Filter and map methods must be used
    */
  if (Array.isArray(arr)) {
    const newArr = arr.filter((obj) => obj.location === city);
    return newArr.map((obj) => {
      const newData = newGrades.filter((obj2) => (obj2.studentId === obj.id));
      if (newData.length === 1 && newData[0].hasOwnProperty('grade')) {
        obj.grade = newData[0].grade;
      } else {
        obj.grade = 'N/A';
      }
      return obj;
    });
  }
  return [];
}
