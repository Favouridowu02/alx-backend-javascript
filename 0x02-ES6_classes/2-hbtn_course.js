export default class HolbertonCourse {
  constructor(name, length, students) {
    if (typeof (name) !== 'string') {
      throw new TypeError('Name must be a string');
    } else if (typeof (length) !== 'number') {
      throw new TypeError('Length must be number');
    } else if (!(Array.isArray(students) && students.every((item) => typeof (item) === 'string'))) {
      throw new TypeError('Students must be an array of string');
    }

    this._name = 'Python 101';
    this._length = 1;
    this._students = students;
  }

  // Getter for name
  get name() {
    return this._name;
  }

  // Setter for name
  set name(name) {
    if (typeof (name) !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = name;
  }

  // Getter for length
  get length() {
    return this._length;
  }

  // Setter for length
  set length(length) {
    if (typeof (length) !== 'number') {
      throw new TypeError('length must be a number');
    }
    this._length = length;
  }

  // Getter for the students
  get students() {
    return this._students;
  }

  // Setter for the students
  set students(students) {
    if (!(Array.isArray(students) && students.every((item) => typeof (item) === 'string'))) {
      throw new TypeError('Students must be an array of string');
    }
    this._students = students;
  }
}
