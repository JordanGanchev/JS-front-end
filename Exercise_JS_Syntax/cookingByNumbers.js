function solve(number, a, b, c, d, e){
    // , ...operation
    // number = Number(number) intiger
    // .forEach(opetation) => {
        // switch (operation){
        //     case "chop"
        // }
    //}
    let list = [a, b, c, d, e];
    let output = 0;
    for (let str of list) {
        switch (str) {
            case "chop":
                output = number / 2;
                console.log(output);
                number = output;
                break;
            case "dice":
                output = Math.sqrt(number);
                console.log(output);
                number = output;
                break;
            case "spice":
                output = number + 1;
                console.log(output);
                number = output;
                break;
            case "bake":
                output = number * 3;
                console.log(output);
                number = output;
                break;
            case "fillet":
                output = number - (number * 0.2);
                console.log(output);
                number = output;
                break;
        }
    }
}
solve('32', 'chop', 'chop', 'chop', 'chop', 'chop')
solve('9', 'dice', 'spice', 'chop', 'bake', 'fillet')