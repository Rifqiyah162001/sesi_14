function threeStepsAB(text) {
    for (let i = 0; i < text.length; i++) {
      // jika text memiliki karakter a dan b dengan jarak mnimal 3
        if (text[i] === "a" && text[i + 4] === "b") {
          return true;
          // begitu juga sebaliknya
        } else if (text[i] === "b" && text[i + 4] === "a") {
          return true;
        }
      }
      // jika memiliki karakter a dan b namun jaraknya tdk minimal 3 maka salah
      // jika tidak memiliki karakter a dan b maka salah
      return false;
}

console.log(threeStepsAB('lane borrowed')); // true
console.log(threeStepsAB('i am sick')); // false
console.log(threeStepsAB('you are boring')); // true
console.log(threeStepsAB('barbarian')); // true
console.log(threeStepsAB('bacon and meat')); // false