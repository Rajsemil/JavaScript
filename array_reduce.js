const emp = [
		{
			name: 'Suneel',
			salary: 198762
		},
		{
			name: 'Juned',
			salary: 645432
		}
];
const total = emp.reduce((acc, emp) => {
		acc += emp.salary;
		return acc;
}, 0);
console.log("Total Salary: ",total);