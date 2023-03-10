function palindromeIntegers(numbers) {
numbers
.forEach((num) => {
    console.log(isPalindrome(num))
});

// --------------------------------------------------

function isPalindrome(num) {
    let reversed = Number([...num.toString()].reverse().join(''));
    
    return num === reversed;
}
}


// -------------------------------------------------------------

function palindromeIntegers(numbers) {
    const isPalindrome = (num) => Number([...num.toString()].reverse().join('')) === num;
            numbers
        .forEach((num) => {
            console.log(isPalindrome(num))
});
}

// ---------------------------------------------------------------------

function palindromeIntegers(numbers) {
    const isPalindrome = (num) => Number([...num.toString()].reverse().join('')) === num;
           let booleans =  numbers
            .map(isPalindrome);

            console.log(booleans);
}
palindromeIntegers([123,323,421,121])