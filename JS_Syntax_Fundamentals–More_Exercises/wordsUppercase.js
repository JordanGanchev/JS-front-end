function solve(text) {
    let textArr = text.split(" ");
    let list = ["!", " ", ",", "?", "."];
    for (const element of textArr) {
        let index = textArr.indexOf(element)
        if (element.includes(",") || element.includes("!") || element.includes(" ") || element.includes("?") || element.includes(".")){

            for (const char of element) {
                if (char === "," || char === " " || char === "!" || char === "?" || char === "."){
                
                    for (const symbol of list){
                    
                        // if (symbol === "."){
                        // var newStr = element.replace(symbol, ',')
                        // }
                        if (symbol === char){
                    var newStr = element.replace(symbol, '')
                    }
                }
                   
                    textArr[index] = newStr.toUpperCase();
                }

            }
           
   
        }else{
            textArr[index] = element.toUpperCase();
        }
    }
    console.log(textArr.join(", "))

}
// solve('Hi, how are you?')
// solve('hello')
solve('i.e. hold')

