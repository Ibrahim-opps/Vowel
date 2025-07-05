let char = prompt("Enter a single character:");
char = char.toLowerCase();
let isVowel = (char.length === 1) && (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u');
console.log(isVowel);
alert (isVowel)