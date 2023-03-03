function printCertificate(grade, [firstName, lastName]){
    if (getGradeAsText() !== "Fail (2)") {
    printHeader();
    printNames();
    printGrade();
    }else {
        console.log("Student does not quality");
    }
    function printHeader() {
        console.log('~~~-   {@}   -~~~');
        console.log('~- Certificate -~');
        console.log('~~~-  ~---~  -~~~');
    }
    function printNames() {
        console.log(`${firstName} ${lastName}`)
    }

    function printGrade() {
        console.log(getGradeAsText());
    }

    function getGradeAsText(){
        if (grade >= 5.5) {
            return `Excellent (${formatToSecondDecimal(grade)})`
            ;
        }else if (grade < 5.5 && grade >= 4.5) {
            return `Very good (${formatToSecondDecimal(grade)})`
        }else if (grade < 4.5 && grade >= 3.5){
            return `Good (${formatToSecondDecimal(grade)})`
        }else if (grade < 3.5 && grade >= 3){
            return `Poor (${formatToSecondDecimal(grade)})`
        }
        return `Fail (2)`
    }

    function formatToSecondDecimal(g) {
        return (g.toFixed(2));
    }
}

printCertificate(
    3.5,
    ['riton', 'button']
)