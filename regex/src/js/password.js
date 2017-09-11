/*
js regex for password
-no whitespaces
-at least 1 digit
-at least 1 lowercase letter
-at least 1 uppercase letter
-at least 1 special character .!@#$%^&*()_+=-
-password length from 8 to 16
*/
var regexPassword = /(?=^\S+$)(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[.!@#$%^&*()_+=-])[A-za-z0-9.!@#$%^&*()_+=-]{8,16}/;



var testCases = [
    {test: "kX#0jkfdr23", result: true},
    {test: "1234", result: false},
]

testRegex(testCases, regexPassword, "password");




