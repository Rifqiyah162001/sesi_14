function listPrima(angkaPertama, angkaKedua) {
    let hasil = [], i, j
    let prima = [];
    for (i = 2; i <= angkaKedua; ++i) {
        if (!hasil[i]) {
            if (i >= angkaPertama) {
                prima.push(i);
            }
            for (j = i * i; j <= angkaKedua; j += i) {
                hasil[j] = true;
            }
        }
    }
    return prima;
}

console.log(listPrima(1, 5));
console.log(listPrima(5, 10));
console.log(listPrima(10, 20));