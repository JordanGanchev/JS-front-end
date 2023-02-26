function solve(dayOfWeek, age) {
    let price;
    let condition;
        if (dayOfWeek === "Weekday") {
            if (age >= 0 && age <= 18) {
                price = 12;
            }else if (age >= 18 && age <= 64) {
                price = 18;
            }else if (age >= 64 && age <= 122) {
                price = 12;
            }else {
                condition = true;
            }
        
        
        }else if (dayOfWeek === "Weekend") {
            if (age >= 0 && age <= 18) {
                price = 15;
            }else if (age >= 18 && age <= 64) {
                price = 20;
            }else if (age >= 64 && age <= 122) {
                price = 15;
            }else {
                condition = true
            }
        
        
        }else if (dayOfWeek === "Holiday") {
            if (age >= 0 && age <= 18) {
                price = 5;
            }else if (age >= 18 && age <= 64) {
                price = 12;
            }else if (age >= 64 && age <= 122) {
                price = 10;
            }else {
                condition = true
            }
        }
        if (condition) {
        console.log(`Error!`)
        }else {
            console.log(`${price}$`)
        }
  
    }
    
    
    
    


solve('Weekday', 42	)
solve('Holiday', -12)
solve('Holiday', 15)