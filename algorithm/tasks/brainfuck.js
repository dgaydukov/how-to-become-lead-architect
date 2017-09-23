'use strict';


/**
 * Why is it true, (![]+[])[+!+[]] == "a"
 * Answer: Because we use typing, ![] => false
 * Checkout this article https://habrahabr.ru/post/201682/
 */
console.log((![]+[])[+!+[]] == "a")
