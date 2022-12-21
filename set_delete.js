const a = [12, 53, 543, 32, 12];
const b = new Set(a);
b.delete(12);
console.log(b);