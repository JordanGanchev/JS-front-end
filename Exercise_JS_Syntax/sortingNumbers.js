function sortingNum(numbers){
let sorted = [...numbers].sort((a, b) => a - b);  
let step = 0;
let result = [];
while (sorted.length > 0) {
    if (step % 2 === 0) {
        let firstE1 = sorted.shift();
        result.push(firstE1);
    }else {
        let lastE1 = sorted.pop();
        result.push(lastE1);
    }
    step++;
}
return result;
}
console.log(
sortingNum(
    [1, 65, 3, 52, 48, 63, 31, -3, 18, 56]
))