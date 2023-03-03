// function repeatString(text  , n) {
//     return text.repeat(n);
// }
// console.log(
//     repeatString('abc', 3)
// )

function maskWordInText(){
    let myArray = ['Hi my name is John?'];
    let searchWord = 'John';
    masketWord = myArray.map(element => '*'.repeat(element.length).filter(element === searchWord).join(' '));
    
    console.log(masketWord);
}
maskWordInText()