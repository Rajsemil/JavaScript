function calculateArea(height,width) {
	const area = height*width;
	console.log("Area is: ",area);
}
const a = parseInt(prompt("Enter a height: "));
const b = parseInt(prompt("Enter a width: "));
calculateArea(a,b);