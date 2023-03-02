function printAndSum(start, end){
    let sum = 0;
    let output = [];
    for (let num = start; num <= end; num++) {
        sum += num;
        output.push(num);
    }
    console.log(`${output.join(" ")}`)
    console.log(`Sum: ${sum}`);
}
printAndSum(5, 10)
printAndSum(0, 26)
printAndSum(50, 60)