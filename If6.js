var marks = prompt("Enter your marks: ");
  if(marks >= 90 && marks <= 100){
    console.log("You have received A+ grade");
  } else if(marks >= 80 && marks < 90){
    console.log("You have received A grade");
  } else if(marks >= 70 && marks < 80){
    console.log("You have received B grade");
  } else if(marks >= 60 && marks < 70){
    console.log("You have received C grade");
  } else if(marks >= 50 && marks < 60){
    console.log("You have received D grade");
  } else if(marks >= 33 && marks < 50){
    console.log("You have received E grade");
  } else if(marks >= 0 && marks <32){
    console.log("You have Failed");
  } else{
    console.log("Invalid marks");
  }