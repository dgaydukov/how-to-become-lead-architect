

function testRegex(testCases, regex, name) {
    console.log("-------------------START TEST "+name+" --------------------------");
    var errors = 0;
    testCases.forEach(function(testCase) {
        if(regex.test(testCase.test) != testCase.result){
            console.log("test fail", testCase, regex);
            errors++;
        }
    });
    console.log("test finish. errors: "+errors, regex)
}