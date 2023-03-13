let person = {
    name: 'Misho',
    age: 20,
    sayHello() {
        console.log(this.name + " " + this.age);
    }
};
let helloFunc = person.sayHello;
helloFunc.call(person)