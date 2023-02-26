function solve(n, inputArr) {
    index = 0;
    let arr=[];
    for(let i=1; i<=n; i++){
        arr.push(inputArr[index])
        index += 1
    }
    arr.reverse()
    console.log(arr.join(" "))
}

solve(3, [10, 20, 30, 40, 50])
solve(4, [-1, 20, 99, 5])
solve(2, [66, 43, 75, 89, 47])