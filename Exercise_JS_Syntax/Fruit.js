function solve(article, grams, kilograms){
    let sum1 = grams / 1000;
    let sum2 =  sum1 * kilograms;
    console.log(`I need $${sum2.toFixed(2)} to buy ${sum1.toFixed(2)} kilograms ${article}.`)

}
solve('orange', 2500, 1.80)
solve('apple', 1563, 2.35)