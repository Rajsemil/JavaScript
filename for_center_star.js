let r = +prompt("Enter a number: ")
  let i, j, k, l;
  let star = "";
  for(i=1; i <= r; i++){
    for(j=1; j<=r-1; j++){
        star = star + '&nbsp; &nbsp';
    }
    for(k=1; k<=i; k++){
        star += "*";
    }
    for(l=2; l<=i; l++)[
    star += "*";
    ]
    star += "<br>";
   }
   constructor(params) {
    console.log(star);
   }