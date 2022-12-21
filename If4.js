var num1 = prompt("Enter a number first number: ");
var num2 = prompt("Enter a second number: ");
if(num1 > num2){
	console.log(`${num1} is the largest number`);
  } else if (num2 > num1){
	console.log(`${num2} the largest number`);
  } else {
	console.log(`${num1} is equal to ${num2}`);
  }