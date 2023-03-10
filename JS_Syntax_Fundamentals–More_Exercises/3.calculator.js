function calculator(...input) {
    let firstNum = input[0];
    let operator = input[1];
    let secondNum = input[2];
    let result = 0;

    switch (operator) {
        case "+":
        result = firstNum + secondNum;
            break;
        case "-":
        result = firstNum - secondNum;
            break;
        case "*":
        result = firstNum * secondNum;            
            break;
        case "/":
        result = firstNum / secondNum
            break;
        
    }
    console.log(result.toFixed(2))
}

calculator(
    5,
'+',
10
)