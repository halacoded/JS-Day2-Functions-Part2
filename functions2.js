/**
 * isOdd(n):
 * - receives a number n
 * - returns true if it's odd, false otherwise
 *
 * e.g.
 * isOdd(7) -> true
 * isOdd(10) -> false
 */
function isOdd(n) {
  if (n % 2 == 0) {
    console.log("False");
  } else {
    console.log("True");
  }
}
isOdd(2);
/**
 * oddsSmallerThan(n):
 * - receives a number n
 * - returns the number of ODD numbers smaller than n
 *
 * e.g.
 * oddsSmallerThan(7) -> 3
 * oddsSmallerThan(15) -> 7
 */
function oddsSmallerThan(n) {
  let count = 0;
  for (i = 0; i < n; i++) {
    if (i % 2 != 0) {
      count++;
    }
  }
  console.log(count);
}

oddsSmallerThan(15);

/**
 * squareOrDouble(n):
 * - receives a number n
 * - returns its square if it's odd
 * - returns its double if it's even
 *
 * e.g.
 * squareOrDouble(16) -> 32
 * squareOrDouble(9) -> 81
 */
function squareOrDouble(n) {
  if (n % 2 == 0) {
    console.log(n * 2);
  } else {
    console.log(n * n);
  }
}
squareOrDouble(16);
