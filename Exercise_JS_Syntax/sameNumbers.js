function solve(number){
    let counter = 0;
    let numFirst = number;
    let chekSum = 0;
    let condition = Boolean;
    let delitel = numFirst / 10;
    numFirst =  parseInt(delitel);
    chekSum = Math.abs((numFirst - delitel).toFixed(2)) * 10;
    counter += chekSum;
    let list = []
    const numChek = counter;
    while( numFirst > 0){
        delitel = numFirst / 10;
        numFirst =  parseInt(delitel);
        chekSum = Math.abs((numFirst - delitel).toFixed(2)) * 10;
        counter += chekSum;
        if (chekSum !== numChek){
            list.push(1)
        }
    }
    if (list[0] === 1){
        console.log(false)
    }else{
        console.log(true)
    }
    console.log(counter)
   

  
 
}
solve(2222222)
solve(1234)