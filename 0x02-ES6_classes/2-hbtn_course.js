export default class HolbertonCourse {
  constructor(name, length, students) {
    if (typeof name !== "string") {
      throw TypeError("Name must be a string");
    }
    if (typeof length !== "number") {
      throw TypeError("Length must be a number");
    }
    if (!Array.isArray(students)) {
      throw TypeError("Students must be an array");
    }
    if (students.some((student) => typeof student !== "string")) {
      throw TypeError("Students must be an array of strings");
    }
    this._name = name;
    this._length = length;
    this._students = students;
  }

  get name() {
    return this._name;
  }

  set name(newName) {
    this._name = newName;
  }

  get length() {
    return this._length;
  }

  set length(newLength) {
    this._length = newLength;
  }

  get students() {
    return this._students;
  }

  set students(newStudents) {
    this._students = newStudents;
  }
}
