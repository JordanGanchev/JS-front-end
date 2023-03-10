function ordered(product, quantity) {
    const coffee = (a) => a * 1.5;
    const water = (a) => a * 1;
    const coke = (a) => a * 1.4;
    const snacks = (a) => a * 2;
    
    const operationMap = {
        coffee: coffee,
        water: water,
        coke: coke,
        snacks: snacks,
    }
        return  operationMap[product](quantity).toFixed(2); // return function
    
    }
    console.log( 
    ordered("water", 5)
    )

    console.log( 
        ordered("coffee", 2)
        )