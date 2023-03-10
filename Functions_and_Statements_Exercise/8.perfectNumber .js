function isPerfect(number) {
    let divisors = [];

    for (let current = 1; current < number; current++) {
        if (number % current === 0) {
            divisors.push(current);
        }
    }
    let sum = 0;
    let divisorsSum = divisors.reduce((previousVal, currentValue) => {
        return previousVal + currentValue;
    }, sum);
    if (number === divisorsSum) {
        console.log("We have a perfect number!");
    }else {
        console.log("It's not so perfect.")
    }
    
} 

isPerfect(6);
isPerfect(28);
isPerfect(1236498);