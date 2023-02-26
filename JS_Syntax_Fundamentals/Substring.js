// function solve(string, startIndex, count){
//     let newString = string.split("")
//     let result = "";
//     for (let i = startIndex; i <= count; i++){
//         result += newString[startIndex]
//         startIndex += 1
//     }
//     console.log(result)
// }

function solve(string, startIndex, count){
    console.log(string.substring(startIndex, startIndex + count));
}

solve('ASentence', 1, 8)
solve('SkipWord', 4, 7)
