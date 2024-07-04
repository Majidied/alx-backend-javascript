"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Director = /** @class */ (function () {
    function Director() {
    }
    Director.prototype.workFromHome = function () {
        return 'Working from home';
    };
    Director.prototype.getCoffeeBreak = function () {
        return 'Getting a coffee break';
    };
    Director.prototype.workDirectorTasks = function () {
        return 'Getting to director tasks';
    };
    return Director;
}());
var Teacher = /** @class */ (function () {
    function Teacher() {
    }
    Teacher.prototype.workFromHome = function () {
        return 'Cannot work from home';
    };
    Teacher.prototype.getCoffeeBreak = function () {
        return 'Cannot have a break';
    };
    Teacher.prototype.workTeacherTasks = function () {
        return 'Getting to work';
    };
    return Teacher;
}());
function createEmployee(salary) {
    if (typeof salary === 'number' && salary < 500) {
        return new Teacher();
    }
    return new Director();
}
console.log(createEmployee(200));
console.log(createEmployee(1000));
function isDirector(employee) {
    return employee.workDirectorTasks !== undefined;
}
function executeWork(employee) {
    if (isDirector(employee)) {
        return employee.workDirectorTasks();
    }
    return employee.workTeacherTasks();
}
console.log(executeWork(new Director()));
console.log(executeWork(new Teacher()));
console.log(executeWork(createEmployee(200)));
var Subjects = ['Math', 'History', 'Programming'];
function teachClass(todayClass) {
    if (Subjects.includes(todayClass)) {
        return "Teaching ".concat(todayClass);
    }
    return 'Invalid class';
}
console.log(teachClass('Math'));
console.log(teachClass('PE'));
