let number = [31, 2, 432, 32, 2, -1]; 
// let sorted = [...number].sort((aNum, bNum) => {

// })
number.sort((aNum, bNum) => {
    let result = aNum - bNum;
    console.log(result);
    return aNum - bNum;
});

number.sort((aNum, bNum) => {
    let result = bNum - aNum;
    console.log(result);
    return bNum - aNum;
});

// strings 

let strings = ["Kiro", "Gocho", "Pesho", "Lidiq", "Kuzman", "Helga"]; 
let sortedNamesAsc = [...strings].sort((aName, bName) => {
    let result = aName.localeCompare(bName);
    return result;
});



console.log(number)
console.log(strings)
console.log(sortedNamesAsc)
