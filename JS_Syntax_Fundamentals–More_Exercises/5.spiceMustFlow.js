// function spiceMustFlow(extract) {
//     let buffer = extract;
//     let counterDays = 0;
//     let leaving = 0;


//     while (buffer >= 100) {
//         leaving += buffer - 26;
//         buffer -= 10;
//         counterDays += 1;
    

//     }
    
//     console.log(counterDays)
//     console.log(leaving)


// }

function spiceMustFlow(startingYield) {

    let totalExtract = 0;
    
    let days = 0;
    
     
    
    while (startingYield >= 100) {
    
     
    
    totalExtract += (startingYield - 26);
    
    // if (startingYield >= 26) {
    
    // }
    
     
    
    startingYield -= 10;
    
    days++;
    
    }
    
     
    
    // if (startingYield < 100) {
    
    // totalExtract -= 26;
    
    // }
    
     
    
    totalExtract -= 26;
    
    if (totalExtract < 0) {
    
    totalExtract = 0;
    
    }
    
     
    
    console.log(days);
    
    console.log(totalExtract);
    
    }

spiceMustFlow(
    111
)