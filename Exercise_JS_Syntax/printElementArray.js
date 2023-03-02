function solve(list, index){
    let newList = [];
    for (let i = 0; i < list.length; i++) {
        const element = list[i];
        if (i % index === 0){
            newList.push(element)
        }
    }
    return newList
}

solve(['5', 
'20', 
'31', 
'4', 
'20'], 
2)

solve(['dsa',
'asd', 
'test', 
'tset'], 
2
)
