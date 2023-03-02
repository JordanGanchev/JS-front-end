// function solve(list, index){
//     let list1 = [];

//     let num = 0
//     for (let i =0; i <= index; i ++){
//         num = list.pop(list[i])
//         list1.push(num)
//     }
//     list1.reverse();
//     let output = list1.concat(list);
//     console.log(output.join(" "));
// }
function solve(numbers, rotations) {
    rotations %= numbers.length;

    for (let i = 0; i < rotations; i++){
        let firstNum = numbers.shift();
        numbers.push(firstNum);
    }
    console.log(numbers.join(' '));
}

solve([51, 47, 32, 61, 21], 2)
solve([32, 21, 61, 1], 4)
solve([2, 4, 15, 31], 5)