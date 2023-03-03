function simpleCalculation(firstNum, secondNum, operation) {
const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const divide = (a, b) => a / b;
const multiply = (a, b) => a * b;

const operationMap = {
    add: add,
    subtract: subtract,
    divide: divide,
    multiply: multiply,
}
    return operationMap[operation](firstNum, secondNum); // return function
}
 
// switch (operation) {
//     case "add":
//         return add(firstNum, secondNum)
//         break;
//     case "subtract":
//         return subtract(firstNum, secondNum)
//         break;
//     case "divide": 
//         return divide(firstNum, secondNum)
//         break;
//     case "multiply":
//         return multiply(firstNum, secondNum)
//         break;
//     default:
//         console.log("Invalid Operation!");
//         break;
// }
// }

console.log(
    simpleCalculation(5,
        5,
        'multiply')
)