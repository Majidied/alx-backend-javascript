"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.printTeacher = void 0;
var teacher3 = {
    firstName: 'John',
    fullTimeEmployee: false,
    lastName: 'Doe',
    location: 'London',
    contract: false,
};
console.log(teacher3);
var director1 = {
    firstName: 'Jane',
    lastName: 'Smith',
    fullTimeEmployee: true,
    location: 'California',
    numberOfReports: 17,
};
console.log(director1);
var printTeacher = function (firstName, lastName) { return "".concat(firstName.charAt(0), ". ").concat(lastName); };
exports.printTeacher = printTeacher;
console.log((0, exports.printTeacher)('John', 'Doe'));
var StudentClass = /** @class */ (function () {
    function StudentClass(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    StudentClass.prototype.workOnHomework = function () {
        return 'Currently working';
    };
    StudentClass.prototype.displayName = function () {
        return this.firstName;
    };
    return StudentClass;
}());
var studentClass = StudentClass;
var student = new studentClass('John', 'Doe');
console.log(student.workOnHomework());
