const admin = [32, 34, 55, 65, 4, 3, 1];
const user = {
	name: "___",
	id : parseInt(prompt("ENter your id number: "))
}
const isadmin = admin.indexOf(user.id)>-1;
console.log(isadmin);