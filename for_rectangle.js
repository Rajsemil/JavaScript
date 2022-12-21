let r = +prompt("Enter a number: ")
let string = "";
for(let i = 0; i < r; i++) { 
for(let j = 0; j < r; j++) { 
  string += "*";
}
string += "<br>";
}
console.log(string);