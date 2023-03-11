let people = {
    "Kiril": { age: 25, email: "kiril@abv.bg"},
    "Peter": { age: 24, email: "peter@abv.bg"},
    "Georgi": { age: 23, email: "georgi@abv.bg"},
};

let entries = Object.entries(people) // [[],[],[]]
let sortedByName = entries.sort((personA, personB) => {
    let personAName = personA[0]; // let personAEmail = person[1].email;
    let personBName = personB[0]; // let personBEmail = person[1].email;
 });

 for (const [name, info] of sortedByName) {
    console.log(name);
    console.log(info); 
 }