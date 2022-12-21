var age = window.prompt("Enter your age: ");
if(age==18){
	console.log("You are eligible for votinf");
} else if (age<=18){
	console.log("You are not eligible for voting");
} else if (age>=18){
	console.log("You are already eligible for voting");
} else {
	console.log("You are entered wrong value! ");
}