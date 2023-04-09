function isPrime(number) {
    for (let i = 2; i < number; i++){
        // jika bilangan dapat dibagim maka bilangan itu adalah bil.prima
        if (number % i === 0) {
            return false
        }
    } 
    // jika bilangan tidak dapat dibagi kecuali dgn bilangan itu sendiri 
    // bilangan tu adalah bilangan prima
    return true;
}

// TEST CASES
console.log(isPrime(3)); // true
console.log(isPrime(7)); // true
console.log(isPrime(6)); // false
console.log(isPrime(23)); // true
console.log(isPrime(33)); // false
