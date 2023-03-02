function modernTimes(text) {
let words = text.split(' ');
let result = [];
for (const word of words) {
    if (word.startsWith('#') && word.length > 1 && checkIfWordIsValid(word)){
        result.push(word.slice(1));
    }
    }
    console.log(result.join('\n'));

    function checkIfWordIsValid(myWord){
        let myWordLowercase = myWord.toLowerCase().slice(1);
        let isValid = true;

        for (const symbol of myWordLowercase) {
            let asciiCode = symbol.charCodeAt(0);
            if (!(asciiCode >= 97 && asciiCode <= 122)) {
                isValid = false;
                break;
            }    
        }
        return isValid
    }
}

function modernTimes(text) {
    return text.split(' ')
    .filter((word) => word.startsWith("#") && containsOnlyLetters(word))
    .map((word) => word.slice(1))
    .filter((word) => word !== "")
    .join('\n');

    function containsOnlyLetters(word) {
        return [...word.toLowerCase()]
        .slice(1)
        .map((symbol) => symbol.charCodeAt(0))
        .every((charCode) => charCode >= 97 && charCode <= 122);
    }
}



// "#word".slice(1) => word

modernTimes('Nowadays everyone uses # to tag a #special word in #socialMedia')

// console.log(
// modernTimes('The symbol # is known #variously in English-speaking #regions as the #number sign')
// )