const users = [
	{
		fname: "Suneel",
		lname: "Rathore"
	},
	{
		fname: "Sumit",
		lname: "Garg"
	},
	{
		fname: "Amit",
		lname: "Verma"
	}
];
const finaluser = users.map((user) => {
	return {
		fullname: '${user.fname} ${user.lname}'
	};
});
console.log(finaluser);