function solve(num1, num2, num3,) {
    let result;

    if (num1 > num2 && num1 > num3) {
        console.log(`The largest number is ${num1}.`);

    }else if (num2 > num1 && num2 > num3) {
        console.log(`The largest number is ${num2}.`)

    }else if (num3 > num1 && num3 > num2) {
        console.log(`The largest number is ${num3}.`)
    }
}



solve (8,  7, -1)