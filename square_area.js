const a = parseInt(prompt("Enter a first number: "));
const b = parseInt(prompt("Enter a second number: "));
const c = parseInt(prompt("Enter a third number: "));
const s = a+b+c/2;
console.log("Area is: "+Math.sqrt(s*(s-a)*(s-b)*(s-c)));