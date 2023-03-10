// function gladiatorExpenses(...input) {

//     let sumHelmetPrice = 0;
//     let sumSwordPrice = 0;
//     let sumShieldPrice = 0;
//     let sumArmorPrice = 0; 

//     for (let i = 1; i < input[0]; i++) {
//         if (i % 2 === 0) {
//             sumHelmetPrice += 1;
//         }
//         if (i % 3 === 0) {
//             sumSwordPrice += 1
//         }
//         if (i % 2 === 0 && i % 3 === 0) {
//             sumShieldPrice += 1;
//             if (sumShieldPrice % 2 === 0) {
//                 sumArmorPrice += 1;
//             }
//         }
        
//     }
//     let totalSum = input[1] * sumHelmetPrice +
//     input[2] * sumSwordPrice +
//     input[3] * sumShieldPrice +
//     input[4] * sumArmorPrice;

//     return `Gladiator expenses: ${totalSum.toFixed(2)} aureus`

// }

function solve(lostFightsCount, helmetPrice, swordPrice, shieldtPrice, armorPrice){
  
    let shieldCount = 0;
    let neededMoney = 0;
  
    for(let i = 1; i <= lostFightsCount; i++ ) {
        if(i % 2 === 0){
            neededMoney += +helmetPrice;
        }
        if(i % 3 === 0){
            neededMoney += +swordPrice;
        }
        if(i % 2 === 0 && i % 3 === 0){
            neededMoney += +shieldtPrice;
            shieldCount++;
        }
        if(shieldCount % 2 === 0 && shieldCount > 0){
            neededMoney += +armorPrice;
            shieldCount = 0;
        }
    }
    console.log(`Gladiator expenses: ${neededMoney.toFixed(2)} aureus`);
}


solve(
        7,
2,
3,
4,
5
)
    

solve(
    23,
12.50,
21.50,
40,
200
)
