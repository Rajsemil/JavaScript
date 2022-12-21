var tm = prompt("Enter a time between 0 to 24:  ");
if (tm>=0 && tm<=6) {
	console.log("Good Evening");
} else if (tm>=7 && tm<=11:59) {
	console.log("Good Morning");
} else if (tm==12 && tm<=18) {
	console.log("Good Afternoon");
} else if (tm>=19 && tm<=22) {
	console.log("good Day");
} else if (tm>=23 && tm<=24) {
	console.log("Good night");
} else {
	console.log("This is not write, Have a nice day!");
}