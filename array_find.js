const emp = [
		{
			name: "sumit",
			id: 2
		},
		{
			name: "sameer",
			id: 3
		},
		{
			name: "justin",
			id: 4

		},
		{
			name: "sunil",
			id: 5
		},
		{
			name: "prince",
			id: 6
		},
		{
			name: "sandy",
				i1: 7
		},
		{
			name: "Ershad",
			id: 8
		}
];
const empl = emp.find((em) =>{
	return em.name = prompt("Enter your name: ");
});
console.log(empl);