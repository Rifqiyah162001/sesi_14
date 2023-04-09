function reverseString(text) {
    // buat string kosong untuk menampung string yang baru dibuat
    let string = "";
    // selama i lebih besar dri 0, perulangan berlanjut, dan decrement i
    for (let i = text.length - 1; i >= 0; i--) {
        string += text[i];
    }
    return string
} 

console.log(reverseString('Hello World and Coders'));
console.log(reverseString('John Doe'));
console.log(reverseString('I am a bookworm'));
console.log(reverseString('Coding is my hobby'));
console.log(reverseString('Super'));