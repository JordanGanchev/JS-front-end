let pattern = '\d+'
new RegExp(`${pattern}`, 'g') //. -> method

let text = 'Password must be between 6 and 10 charactersPassword must have at least 2 digits';
let reg = new RegExp(`${text}`, 'g')
let regex = /\d+/g;
let execution = regex.exec(text);
console.log([...text.matchAll(regex)][0])



// while (execution !== null){
//     let value = execution[0];
//     console.log(value)
//     execution = regex.exec(text);
// }

let net = [...'Pass123'].map(Number).filter(Boolean)

