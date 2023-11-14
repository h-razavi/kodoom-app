// A function to calculate the factorial of a positive integer n
function factorial(n: number) : number {
    // If n is zero or one, return one
    if (n === 0 || n === 1) {
      return 1;
    }
    // Otherwise, return n times the factorial of n minus one
    else {
      return n * factorial(n - 1);
    }
  }
  
  // A function to calculate the number of combinations of n objects taken r at a time
  function combination(n: number, r: number) {
    // Use the combination formula: n! / (r! * (n - r)!)
    return factorial(n) / (factorial(r) * factorial(n - r));
  }
  
  // A function to calculate the number of pairings of x objects
  export function pairings(x: number) {
    // Use the combination function with r = 2
    return combination(x, 2);
  }
  
  // Test the function with some examples
  console.log(pairings(5)); // 10
  console.log(pairings(10)); // 45
  console.log(pairings(20)); // 190
  