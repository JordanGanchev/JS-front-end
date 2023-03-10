// function calculations(firstNum, secondNum, thirdNum) {
//     const sum = (a, b) => a + b;
//     const subtract = (mtSum, num, b) => mtSum - num;
    
//     return subtract(sum(firstNum, secondNum), thirdNum);
// }
// console.log(
//     calculations(42, 58, 100 )
// )

const calculations = (firstNum, secondNum, thirdNum) => {
    const sum = (a, b) => a + b;
     const subtract = (mtSum, num, b) => mtSum - num;
    
     return subtract(sum(firstNum, secondNum), thirdNum);
}