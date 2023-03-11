class Student {
    constructor(name, age, grades) {
        this.name = name;
        this.age = age;
        this.grades = grades;
    }
    sayHello() {
        return `My name is ${this.name}`
    }
}

// function Constructor
function Student(name, age, grades){
        this.name = name;
        this.age = age;
        this.grades = grades;
    }

Student.prototype.sayHello = function() { // zakacha metodi -> prototype
    console.log(`Hello ${this.name}`)
}

const student1 = new Student("kiril" , 25, [3,4,5])
const student2 = new Student("Georgi" , 27, [4,4,5])
const student3 = new Student("Peter" , 23, [3,45,5])

console.log(student1.sayHello())
console.log(student1.name)