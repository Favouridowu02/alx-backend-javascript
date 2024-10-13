

export interface DirectorInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workDirectorTasks(): string;
}

export interface TeacherInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workTeacherTasks(): string;
}

export class Director implements DirectorInterface{
    workFromHome(): string {
        return "Working from home";
    }
    getCoffeeBreak(): string {
        return " Getting a coffee break";
    }
    workDirectorTasks(): string {
        return "Getting to director tasks";
    }
}

export class Teacher implements TeacherInterface{
    workFromHome(): string {
        return "Cannot work from home";
    }
    getCoffeeBreak(): string {
        return "Cannot have a break";
    }
    workTeacherTasks(): string {
        return "Getting to work";
    }
}

type salary = number | string;
// type createElementReturn = Director | Teacher
export function createEmployee(salary: salary): Director | Teacher {
    if (typeof(salary) === 'number' && salary < 500) {
        return new Teacher();
    } else {
        return new Director();
    }
}

export function isDirector(employee: any) {
    if (employee instanceof Director) {

    }

}

export function executeWork(employee: any): void {
    if (employee instanceof Director) {
        employee.workDirectorTasks();
    } else if (employee instanceof Teacher) {
        employee.workTeacherTasks();
    }
}

type Subjects = "Math" | "History";
export function teachClass(subject: Subjects) {
    if (subject === "Math") {
        return ("Teaching Math");
    } else if (subject === "History") {
        return ("Teaching History");
    }
}