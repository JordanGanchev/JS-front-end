function modernTimes(text) {
    let words = text.split(' ')
    .filter((word) => word.startsWith('#') && word.length > 1 && /\#[A-Za-z]+$/.test(word));

    let result = [];
    for (const word of words) {
        result.push(word.slice(1));
    }
    console.log(result.join('\n'))
}
modernTimes(
    'gwertgrwt rthe5tyut rewy5u e etyue5u4'
)

/\#[A-Za-z]+$/g.exec()

console.log(
    [...'#special'.matchAll(/\#[A-Za-z]+$/g)][0]
)