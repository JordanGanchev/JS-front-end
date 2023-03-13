function meeting(input) {
  let person = {};
  for (const line of input) {
    let [ day, name ] = line.split(' ');
    if (!person.hasOwnProperty(day)){
    person [day] = name;
    console.log(`Scheduled for ${day}`)
    }else {
      console.log(`Conflict on ${day}`)
    }
  }
  for (const key in person) {
    console.log(`${key} -> ${person[key]}`)    
    }
}

meeting(
  ['Friday Bob',
  'Saturday Ted',
  'Monday Bill',
  'Monday John',
  'Wednesday George']
)