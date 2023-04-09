function gcd(firstNumber, secondNumber) {
    let result = [];
    let terkecil, terbesar;
    if (firstNumber <= secondNumber) {
        terkecil = firstNumber;
    } else {
        terkecil = secondNumber;
    }
    if (firstNumber >= secondNumber) {
        terbesar = firstNumber;
    } else {
        terbesar = secondNumber;
    }
    for (let i = 1; i < terkecil; i++) {
        if (terkecil % i == 0 && terbesar % i == 0) {
          result.push(i);
        }
      }
    // mengembalikan angka terbesar yang diberikan sebagai paramater input
    return Math.max(...result);
}

// TEST CASES
console.log(gcd(12, 16)); // 4
console.log(gcd(50, 40)); // 10
console.log(gcd(22, 99)); // 11
console.log(gcd(24, 36)); // 12
console.log(gcd(17, 23)); // 1
