// The second task:
function rectangle(a, b) {
    const P = 2 * (a + b);
    return P;
  }
const a = 12;
const b = 15;
const P = rectangle(a, b);
console.log(P);

// The eleventh task:
let n=1
function positivenegative(n) {
    if (n > 0) {
      return "Positive";
    } else if (n < 0) {
      return "Negative";
    } else {
      return "Zero";
    }
  }
console.log(positivenegative(8)); // the numer is positive
console.log(positivenegative(-100)); // the numer is negative
console.log(positivenegative(0)); // the numer is equal to zero

// The thirteenth task:
function greatestamng2(x, y) {
    if (x > y) {
      return x;
    } else {
      return y;
    }
  }

  let result = greatestamng2(8, 56);
console.log(result); 