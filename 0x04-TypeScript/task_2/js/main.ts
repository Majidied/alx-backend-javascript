import { fail } from "assert";

interface DirectorInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workDirectorTasks(): string;
}

interface TeacherInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workTeacherTasks(): string;
}

class Director implements DirectorInterface {
    workFromHome() {
        return 'Working from home';
    }

    getCoffeeBreak() {
        return 'Getting a coffee break';
    }

    workDirectorTasks() {
        return 'Getting to director tasks';
    }
}

class Teacher implements TeacherInterface {
    workFromHome() {
        return 'Cannot work from home';
    }

    getCoffeeBreak() {
        return 'Cannot have a break';
    }

    workTeacherTasks() {
        return 'Getting to work';
    }
}

function createEmployee(salary: number | string): Director | Teacher {
    if (typeof salary === 'number' && salary < 500) {
        return new Teacher();
    }

    return new Director();
}

console.log(createEmployee(200));
console.log(createEmployee(1000));


function isDirector(employee: Director | Teacher): employee is Director {
    return (employee as Director).workDirectorTasks !== undefined;
}

function executeWork(employee: Director | Teacher): string {
    if (isDirector(employee)) {
        return employee.workDirectorTasks();
    }

    return employee.workTeacherTasks();
}

console.log(executeWork(new Director()));
console.log(executeWork(new Teacher()));
console.log(executeWork(createEmployee(200)));


const Subjects = ['Math', 'History', 'Programming'];

function teachClass(todayClass: string): string {
    if (Subjects.includes(todayClass)) {
        return `Teaching ${todayClass}`;
    }

    return 'Invalid class';
}

console.log(teachClass('Math'));
console.log(teachClass('PE'));