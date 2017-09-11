/*
 js regex for dateformat (dd-mm-yyyy HH:ii:ss)
 */
var regexDate = /\d{2}-\d{2}-\d{4} \d{2}:\d{2}:\d{2}$/
var regexDateComplex = /(([0-2][0-9])|(3[0-1]))-((0[0-9])|(1[1-2]))-\d{4} (([0-1][0-9])|(2[0-3])):[0-5][0-9]:[0-5][0-9]$/



var testCases = [
    {test: "hello world", result: false},
    {test: "24-13-2017 22:13:45", result: true},
]

testRegex(testCases, regexDate, "date");