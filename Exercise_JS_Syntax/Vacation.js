function solve(groupOfPeople, typeOfTheGroup, dayOfTheWeek  ){
    let totalPrice;
 switch (typeOfTheGroup) {
    case "Students":
        if(dayOfTheWeek == "Friday"){
        totalPrice = groupOfPeople * 8.45;
        }else if(dayOfTheWeek == "Saturday"){
            totalPrice = groupOfPeople * 9.8;
        }else if(dayOfTheWeek == "Sunday"){
            totalPrice = groupOfPeople * 10.46;
        }
        if(groupOfPeople >= 30){
            totalPrice -= totalPrice * 0.15
        }
        break;
    case "Business":
        if (groupOfPeople >= 100){
            groupOfPeople = groupOfPeople - 10;
        }
        if(dayOfTheWeek == "Friday"){
            totalPrice = groupOfPeople * 10.9;
            }else if(dayOfTheWeek == "Saturday"){
                totalPrice = groupOfPeople * 15.6;
            }else if(dayOfTheWeek == "Sunday"){
                totalPrice = groupOfPeople * 16;
            }
        if (groupOfPeople >= 100){
            
        }
        break;
    case "Regular":
        if(dayOfTheWeek == "Friday"){
            totalPrice = groupOfPeople * 15;
            }else if(dayOfTheWeek == "Saturday"){
                totalPrice = groupOfPeople * 20;
            }else if(dayOfTheWeek == "Sunday"){
                totalPrice = groupOfPeople * 22.5;
            }
        if (groupOfPeople >= 10 && groupOfPeople <= 20){
            totalPrice -= totalPrice * 0.05; 
        }
        break;
 
    default:
        break;
 }
 console.log(`Total price: ${totalPrice.toFixed(2)}`)
}

solve(30,
    "Students",
    "Sunday")

solve(40,
"Regular",
"Saturday"
)