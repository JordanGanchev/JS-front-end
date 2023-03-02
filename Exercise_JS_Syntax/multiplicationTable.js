function solve(number) {
    let count = 1;
    let sum = 0;
    for (let i = 1; i <= 10; i++) {
        let totalSum = number * i
        console.log(`${number} X ${count} = ${totalSum}`);
        count += 1;
    }

}
solve(5)
solve(2)