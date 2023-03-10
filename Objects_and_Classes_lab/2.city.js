function cityInfo(city) {
    let keys = Object.keys(city);
    for (const key of keys) {
        console.log(`${key} -> ${city[key]}`)
    }
}

function cityInfo(city) {
    let tuples = Object.entries(city);
    for (const [key, values] of tuples) {
        console.log(`${key} -> ${values}`)
    }
}

cityInfo(
    {
        name: "Sofia",
        area: 492,
        population: 1238438,
        country: "Bulgaria",
        postCode: "1000"
    }
)