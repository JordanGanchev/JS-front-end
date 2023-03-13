function login(input) {
    let reversedString = input.shift().split("").reverse().join("");
    let counter = 0;
    for (const element of input) {
        if (reversedString !== element){
            console.log("Incorrect password. Try again.")
        }else {
            console.log(`User ${element.split("").reverse().join("")} logged in.`)
            break;
        }
        if (counter >= 3) {
            console.log(`User ${element} blocked!`)
            break;
        }
        counter += 1;

    }

}

// login(
//     ['Acer','login','go','let me in','recA']
// )

login(
    ['sunny','rainy','cloudy','sunny','not sunny']
)

// login(
//     ['momo','omom']
// )