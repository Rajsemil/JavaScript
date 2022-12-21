const admin = [32, 34, 55, 65, 4, 3, 1];
const user = {
	name: "___",
	id : parseInt(prompt("ENter your id number: "))
}
console.log(admin.includes(user.id));