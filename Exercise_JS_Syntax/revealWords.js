function solve(word, text){
    let onlyWord = word.split(', '); 
    let onlyWordArr = text.split(' ');
    let index = 0;
    for (const element of onlyWordArr) {
        let indexInArr = onlyWordArr.indexOf(element);
        let num = onlyWord[index]
        if (element.length === num.length && element.includes("*")) {
        
            onlyWordArr[indexInArr] = onlyWord[index];
            index += 1;
            if (index >= onlyWord.length){
                break
            }
            
        }
        
    }



    console.log(onlyWordArr.join(' '))
}

solve('great, tol, kol',
'softuni is ***** place for learning new programming languages')

solve ('great, learning',
'softuni is ***** place for ******** new programming languages')