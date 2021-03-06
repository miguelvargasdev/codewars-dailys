// Digital root is the recursive sum of all the digits in a number.

// Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.

// Examples
//     16  -->  1 + 6 = 7
//    942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
// 132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
// 493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2
function digital_root(n) {
    // split n into array of numbers for each digit - DONE
    // loop through and sum numbers in array
    // run function if n >= 10
    // return n if less than < 10
    let arr = Array.from(n.toString()).map(Number).reduce((sum,current)=> sum + current);
    
    if(arr >= 10) return digital_root(arr);
    return arr;  
  }