function pascalCaseSplitter(text) {
    let output = "";
    for (const symbol of text) {
        const asciiCode = symbol.charCodeAt(0);

        if (asciiCode >= 65 && asciiCode <= 90){
            if (!!output.length){
            output += ", ";
            }
            output += symbol;
        }else{
            output += symbol;
        }
    }
    console.log(output);
    function pascalCaseSplitter(text) {
    console.log(text.split(/(?=[A-Z])/).join(", "));
    }
}

// console.log(string.split(/(?=[A-Z])/).join(", "));

pascalCaseSplitter('SplitMeIfYouCanHaHaYouCantOrYouCan')
pascalCaseSplitter('HoldTheDoor')
pascalCaseSplitter('ThisIsSoAnnoyingToDo')