/*
 js regex for email
 */

var regexEmail = /^.+@.+\..{1,3}$/

var testCases = [
    {test: "admen@gmail.com", result: true},
    {test: "test.ru", result: false},
    {test: "test@mail.x", result: true},
]

testRegex(testCases, regexEmail, "email");