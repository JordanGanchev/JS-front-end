function solve(speed, area){
    let speedLimit = 0;
    let diff = 0;
    let condition = false 
    switch (area) {
        case "motorway":
            if (speed <= 130){
                speedLimit = 130;
            }else{
                diff = speed - 130;
                speedLimit = 130;
                condition = true;
            }
            break;
        case "interstate":
            if (speed <= 90){
                speedLimit = 90;
            }else{
                diff = speed - 90;
                speedLimit = 90;
                condition = true;
            }
            break;
        case "city":
            if (speed <= 50){
                speedLimit = 50;
            }else{
                diff = speed - 50;
                speedLimit = 50;
                condition = true;
            }
            break;
        case "residential":
            if (speed <= 20){
                speedLimit = 20;
            }else{
                diff = speed - 20;
                speedLimit = 20;
                condition = true;
            }
            break;
    
    }
    if (condition){
        let status = ""
        if (diff <= 20){
            status = "speeding";
        }else if (diff > 20 && diff <= 40){
            status = "excessive speeding";
        }else if ( diff > 40){
            status ="reckless driving"
        }
        console.log(`The speed is ${diff} km/h faster than the allowed speed of ${speedLimit} - ${status}`)
    }else{
        console.log(`Driving ${speed} km/h in a ${speedLimit} zone`
        )
    }
}

// solve(40, 'city')
// solve(120, 'interstate')
solve(200, 'motorway')