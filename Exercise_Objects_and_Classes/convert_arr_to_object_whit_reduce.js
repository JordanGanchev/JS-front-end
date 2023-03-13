let input = [
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
];
let employees = input.reduce((data, employee) => {
    data[employee] = employee.length;
    return data; 
}, {});

console.log(employees);
// ------------------------------------------------------
function parseEmployees(input) {
    Object.entries(
        input.reduce((data, employee) => {
            data[employee] = employee.length;
        }, {})
    ).forEach(([employee, length]) => {
        console.log(`Name: ${employee} -- Personal Number: ${length}`)
    })
}
