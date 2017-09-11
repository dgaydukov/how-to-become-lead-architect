/*
 js regex for russian phone
 -starts from +,7,8
 -lenth of 10
 */
var regexPhone = /(^\+7|[7-8])\d{10}$/


var testCases = [
    {test: "84951235865", result: true},
    {test: "+74951235865", result: true},
    {test: "74951235865", result: true},
    {test: "34951235865", result: false},
    {test: "+34951235865", result: false},
    {test: "+734951235865", result: false},
]

testRegex(testCases, regexPhone, "phone");