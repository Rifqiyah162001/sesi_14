function urutHuruf(text) {
    //mengubah menjadi array substring dan mengembalikan array baru tanpa mengubah string asli
    let string = text.split("");
    // perulangan huruf pertama dengan kedua
    for (let i = 0; i < string.length; i++) {
        for (let j = 0; j < string.length - 1; j++) {
            if (string[j] > string[j + 1]) {
                let hasil = string[j];
                string[j] = string[j + 1];
                string[j + 1] = hasil;
            }
        }
    }
    // membuat dan mengembalikan string baru dgn menggabungkan semua elemen array
    return string.join("");
}

console.log(urutHuruf("halo"));
console.log(urutHuruf("qwerty"));
console.log(urutHuruf("qwertyuiopasdfghjklzxcvbnm"));