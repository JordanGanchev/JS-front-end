function printCertificate(grade, [firstName, lastName], printHeader, printNames, printGrade){
    if (getGradeAsText(grade) !== "Fail (2)") {
    printHeader();
    printNames(firstName, lastName);
    printGrade(grade);
    }else {
        console.log("Student does not quality");
    }
    function printHeader() {
        console.log('~~~-   {@}   -~~~');
        console.log('~- Certificate -~');
        console.log('~~~-  ~---~  -~~~');
    }
    function printNames(firstName, lastName) {
        console.log(`${firstName} ${lastName}`)
    }

    function printGrade() {
        console.log(getGradeAsText(grade));
    }

    function getGradeAsText(grade){
        if (grade >= 5.5) {
            return `Excellent (${formatToSecondDecimal(grade)})`
            ;
        }else if (grade < 5.5 && grade >= 4.5) {
            return `Very good (${formatToSecondDecimal(grade)})`
        }else if (grade < 4.5 && grade >= 3.5){
            return `Good (${formatToSecondDecimal(grade)})`
        }else if (grade < 3.5 && grade >= 3){
            return `Poor (${formatToSecondDecimal(grade)})`
        }
        return `Fail (2)`
    }

    function formatToSecondDecimal(g) {
        return (g.toFixed(2));
    }
}

// printCertificate(
//     3.5,
//     ['riton', 'button'],
//     printHeader,
//     printNames,
//     printGrade

// );

// function sayHello() {
//     return function () {
//         console.log('Hello');
//     }
// }
// sayHello()()

// let numbers = [1, 2, 3, 4, 5, 7];
// numbers.map(multiplyByTwo)
// let mappedNumbers = numbers.map(multiplyByTwo);

// console.log(mappedNumbers);

// function multiplyByTwo(value) {
// return value * 2;
// }

// Arrow Functions

let increment = x => x + 1;
console.log(increment(5))

// let increment = function(x) {
//     return x + 1;
// } 