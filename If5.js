var side1 = prompt("Enter first side number:");
var side2 = prompt("Enter second side number:");
var side3 = prompt("Enter third side number:");
if((side1 == side2) && (side1 == side3)){
	console.log(`Equilateral triangle.`)
} else if ((side1 == side2) || (side2 == side3)){
console.log(`Isosceles triangle.`)
} else{
console.log(`Scalene triangle.`)
}