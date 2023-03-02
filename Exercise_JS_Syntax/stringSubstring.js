// function stringSubstring(word, text) {
//     let wordLoweCase = word.toLowerCase();
//     let testLowerCase = text.toLowerCase();

//     if (testLowerCase.includes(wordLoweCase)){
//         return word;
//     }
//     return `${word} not found!`;
// }

function stringSubstring(word, text) {
    let wordLowerCase = word.toLowerCase();
    let textArr = text.split(' ');

    for (const text of textArr) {
        if (text.toLowerCase() === wordLowerCase) {
            return word;
        }
        
    }
    return `${word} not found!`;

}   
console.log(
stringSubstring(
    'javascript',
'JavaScript is the best programming language'
))

console.log(
stringSubstring(
    'python',
'JavaScript is the best programming language'
))