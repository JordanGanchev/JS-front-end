function loadingBar(number) {
   let num = number / 10;
   let output = [".", ".", ".", ".", ".", ".", ".", ".", ".", ".",];
   let newString = ''
   for (let i = 0; i < num; i++) {
    output[i] = "%";
   }
   for (let x of output) {
    newString += x
   }

   if (number !== 100) {
    console.log(`${number}% [${newString}]`);
    console.log("Still loading...");
   }else {
    console.log("100% Complete!");
    console.log(`${number}% [${newString}]`);

   }
   
}

loadingBar(100)