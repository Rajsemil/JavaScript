let r = +prompt("Enter a number: ")
let i, j;
for(i=r; i >= 1; i--){
  for(j=1; j<=i; j++){
   document.write('*');
  }
   document.write('<br/>');
 }