/**
 * Compare fibonacci with tail recursion
 */

const fib = n => n > 2 ? fib(n-1) + fib(n-2) : 1;

const tailFib = (n) => {
  const inner = (n, a, b) => {
    return n > 1 ? inner(n-1, b, a+b) : a;
  }
  return inner(n, 1, 1);
};

console.time('tail recursion fib');
console.log(tailFib(50));
console.timeEnd('tail recursion fib');

console.time('recursive fib');
console.log(fib(50));
console.timeEnd('recursive fib');

/**
 * Results
 * tail recursion fib: 0.301ms
 * recursive fib: 97267.975ms
 */