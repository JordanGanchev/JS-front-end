function solve(text, word){
    let censored = text.replace(word, repeat(word))
    while (censored.includes(word)){
        censored = censored.replace(word, repeat(word));
        censored = text.replace(word, repeat(word))
    }
    console.log(censored)

}
//#%

// function solve(text, words) {
//     for (let current of words) {
//         let replaced = '*'.repeat(current.length);
//         while (text.indexOf(current) > -1) {
//             text = text.replace(current, replaced);
//         }
//     }
//     console.log(text);
// }

function solve(text, word){
    let censored = text.split(" ");
    for (let current of censored){
        if(current === word){
            let index = censored.indexOf(current);
            let replaced = '*'.repeat(current.length);
            censored[index] = replaced;
        }
    }
    console.log(censored.join(" "));
}
solve('A small sentence with some words', 'small')
solve('Find the hidden word', 'hidden')