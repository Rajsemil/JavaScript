const employee_data = [
	{
		name: "kunal",
		email: "kunal@gmail.com",
		mobile: 5454342453,
		salary: 234000
	},
	{
		name: "sameer",
		email: "sameer@gmail.com",
		mobile: 5454342453,
		salary: 65434454
	},
	{
		name: "vipin",
		email: "vipin@gmail.com",
		mobile: 87452464423,
		salary: 10000
	},
	{
		name: "Rajeev",
		email: "rajeev@gmail.com",
		mobile: 55677423,
		salary: 8000
	}
];
const failed = employee_data.filter((employee_data) => {
	if (employee_data.salary>=10000) {
		return true;
	} else{
		return false;
	} 
});
console.log(failed);
console.log(employee_data);