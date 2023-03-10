function sumEvenOdd(number) {
    let strNum = number.toString()
    let evenSum = 0;
    let oddSum = 0;

    for (const num of strNum) {
        if (num % 2 === 0) {
            evenSum += Number(num);
        }else {
            oddSum += Number(num);
        }
    }
    return `Odd sum = ${oddSum}, Even sum = ${evenSum}`
}
console.log(
sumEvenOdd(3495892137259234)
)